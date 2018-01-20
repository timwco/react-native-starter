import { combineReducers } from 'redux';

import app  from '../models/app/reducer';

export default createReducer = nav => {
  return combineReducers({
    app,
    nav
  })
}