export class LocalStorage {
  set(name, val) {
    if (typeof val === 'string') {
      localStorage.setItem(name, val)
    } else {
      localStorage.setItem(name, JSON.stringify(val))
    }
  }
  get(name) {
    if (localStorage.getItem(name)) {
      return JSON.parse(localStorage.getItem(name))
    }
    return undefined
  }
  del(name) {
    localStorage.removeItem(name)
  }
}
export class SessionStorage {}
