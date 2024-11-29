import { type Router } from 'vue-router'

export function setupDesktopChannel(router: Router) {
  let isDesktopChannelInitialized = false

  window.addEventListener('message', (event) => {
    if (event.data?.type === 'desktop-channel-initialized') {
      isDesktopChannelInitialized = true
      router.push(event.data.path)
    }

    if (event.data?.type === 'desktop-route-change') {
      router.push(event.data.path)
    }
  })

  router.afterEach((to) => {
    if (isDesktopChannelInitialized) {
      window.parent.postMessage({ type: 'mobile-route-change', path: to.fullPath }, '*')
    }
  })

  window.parent.postMessage({ type: 'mobile-channel-initialized' }, '*')
}
