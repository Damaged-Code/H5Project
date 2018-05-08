export default {
  fullScreen(el) {
    if (!el) {
      return
    }
    let element = el
    let requestMethod =
      element.requestFullScreen ||
      element.webkitRequestFullScreen ||
      element.mozRequestFullScreen ||
      element.msRequestFullScreen
    if (requestMethod && !this.screen) {
      this.screen = true
      requestMethod.call(element)
    } else {
      this.screen = false
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      } else {
        window.parent.showTopBottom()
      }
    }
  },
}
