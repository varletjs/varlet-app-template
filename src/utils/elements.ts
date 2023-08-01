export function setupAppHeight() {
  const setAppHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
  }

  window.addEventListener('resize', setAppHeight)
  window.addEventListener('orientationchange', setAppHeight)
  setAppHeight()
}
