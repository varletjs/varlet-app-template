import { useEventListener } from '@vueuse/core'
import { inMobile } from 'rattail'

export function setupDesktopInMobile() {
  if (!inMobile() && window === window.parent) {
    window.location.replace('/desktop.html' + window.location.hash)
  }
}

export function useDesktop() {
  const iframeRef = ref<HTMLIFrameElement>()
  const { isDark, updateTheme } = useDark()

  if (inMobile() && window.location.pathname === '/desktop.html') {
    window.location.replace(window.location.href.replace('/desktop.html', '/'))
  }

  useEventListener(window, 'message', (event) => {
    if (event.data?.type === 'mobile-channel-initialized') {
      post('desktop-channel-initialized')
    }

    if (event.data?.type === 'mobile-route-change') {
      // do not trigger hashchange event
      window.history.replaceState(null, '', '#' + event.data.path)
    }

    if (event.data?.type === 'mobile-theme-change') {
      isDark.value = event.data?.isDark
      updateTheme()
    }
  })

  useEventListener(window, 'hashchange', () => {
    post()
  })

  function post(type: 'desktop-channel-initialized' | 'desktop-route-change' = 'desktop-route-change') {
    iframeRef.value?.contentWindow?.postMessage({ type, path: window.location.hash.slice(1) }, '*')
  }

  return {
    iframeRef,
  }
}
