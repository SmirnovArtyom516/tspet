/* eslint-disable default-param-last */
import { SET_CATS } from '../types';

export default function catsReducer(state = '', action) {
  const { type, payload } = action;
  switch (type) {
    case SET_CATS:
      return payload;
    default:
      return state;
  }
}
