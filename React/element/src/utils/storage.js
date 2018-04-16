export class LocalStorage {
  set(name, val) {
    if (typeof val === 'string') {
      localStorage.setItem(name, val);
    } else {
      localStorage.setItem(name, JSON.stringify(val));
    }
  }
  get(name) {
    if (localStorage.getItem(name)) {
      return JSON.parse(localStorage.getItem(name));
    }
    return undefined;
  }
  del(name) {
    if (localStorage.getItem(name)) {
      localStorage.removeItem(name);
    } else {
      return undefined;
    }
  }
}
export class SessionStorage {}
