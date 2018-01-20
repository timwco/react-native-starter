import { SET_SOMETHING } from './constants';

const initialState = {}

const reducer = function (state = initialState, action) {
  switch (action.type) {

    case SET_SOMETHING:
      return action.something

    default:
      return state
  }
}

export default reducer;