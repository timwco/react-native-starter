import { SET_SOMETHING } from './constants';

export const setSomething = function (something) {
  return { type: SET_SOMETHING, something }
}
