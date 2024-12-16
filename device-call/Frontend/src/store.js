import { createStore } from 'redux'

const initialState = {
  data:[{}],
}

const changeState = (state = initialState, { type, ...rest }) => {
  console.log('data in recus---------->',rest)
  switch (type) {
    case 'set':
      return {...state, ...rest }

     default:
      return state
  }
}

const store = createStore(changeState)
export default store
