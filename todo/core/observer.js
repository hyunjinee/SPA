const MILLISEC = 1000
const FRAMES = 60
const MILLI_PER_FRAME = MILLISEC / FRAMES

const debounce = (callback, limit = MILLI_PER_FRAME) => {
  let timeout

  return () => {
    clearTimeout(timeout)
    timeout = setTimeout(callback, limit)
  }
}

export const observe = (observer) => {
  currentObserver = debounce(observer)
  observer()
  currentObserver = null
}

export const observable = (props) => {
  let observers = new Set()
  const state = new Proxy(
    { ...props },
    {
      get(target, prop) {
        if (typeof currentObserver === "function") {
          observers.add(currentObserver)
        }
      },
      set(obj, prop, value) {
        obj[prop] = value
        observers.forEach((observer) => observer())
        return true
      },
    }
  )

  return state
}
