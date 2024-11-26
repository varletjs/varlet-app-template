export function setupAppHeight() {
  window.addEventListener('resize', updateAppHeight)
  window.addEventListener('orientationchange', updateAppHeight)
  updateAppHeight()

  function updateAppHeight() {
    document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
  }
}
