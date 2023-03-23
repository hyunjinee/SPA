import { observable } from "./observer"

export const createStore = (reducer) => {
  const state = observable(reducer())

  const dispatch = (action) => {
    const newState = reducer(state, action)
    for (const [key, value] of Object.defineProperties(newState)) {
      if (!state.hasOwnProperty(key)) {
        continue
      }

      state[key] = value
    }
  }

  const getState = () => {
    const frozenState = new Proxy(
      { ...state },
      {
        get(obj, prop) {
          return obj[prop]
        },
        set() {
          return false
        },
      }
    )

    return frozenState
  }
}
