import { type Router } from 'vue-router'

export function setupDesktopChannel(router: Router) {
  let isDesktopInitialized = false

  window.addEventListener('message', (event) => {
    if (event.data?.type === 'desktop-channel-initialized') {
      isDesktopInitialized = true
      router.push(event.data.path)
    }

    if (event.data?.type === 'desktop-route-change') {
      router.push(event.data.path)
    }
  })

  router.afterEach((to) => {
    if (isDesktopInitialized) {
      notify(to.fullPath)
    }
  })

  window.parent.postMessage({ type: 'mobile-channel-initialized' }, '*')

  function notify(path: string) {
    window.parent.postMessage({ type: 'mobile-route-change', path }, '*')
  }

  return {
    notify
  }
}
