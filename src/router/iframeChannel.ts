import { type Router } from 'vue-router'

export function setupIframeChannel(router: Router) {
  window.addEventListener('message', (event) => {
    if (event.data?.type === 'route-change') {
      router.push(event.data.path)
    }
  })

  function notify(path: string) {
    window.parent.postMessage({ type: 'route-change', path }, '*')
  }

  window.parent.postMessage({ type: 'router-channel-connected' }, '*')

  return {
    notify
  }
}
