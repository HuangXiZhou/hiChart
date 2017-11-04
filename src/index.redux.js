
const ADD = 'ADD'
const REDUCE = 'REDUCE'

export function counter(state = 0, action) {
  switch(action.type) {
    case ADD:
      return state + 1
    case REDUCE:
      return state - 1
    default:
      return 10
  }
}

export function addGun() {
  return {type: ADD}
}

export function reduceGun() {
  return {type: REDUCE}
}
