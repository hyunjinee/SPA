import { observable, observe } from "./observer.js"

class Component {
  $root
  #state
  #props

  constructor($root, props) {
    this.$root = $root
    this.#props = props

    this.#state = observable()

    observe(() => {})
  }

  get state() {
    return Object.freeze({ ...this.#state })
  }

  get props() {
    return Object.freeze({ ...this.#props })
  }

  setState(newState) {
    for (const [key, value] of Object.entries(newState)) {
      if (!this.#state.hasOwnProperty(key)) {
        continue
      }

      this.#state[key] = value
    }
  }

  #render() {
    this.$root.innerHTML = this.html() || ""
  }

  addEvent(eventType, targetSelector, callback) {
    const listener = (event) => {
      if (!event.target.closest(targetSelector)) {
        return
      }

      callback(event)
    }

    if (this.$root) {
      this.$root.addEventListener(eventType, listener)
    }
  }
}
