/* eslint-disable default-param-last */
import { SET_DOGS } from '../types';

export default function catsReducer(state = '', action) {
  const { type, payload } = action;
  switch (type) {
    case SET_DOGS:
      return payload;
    default:
      return state;
  }
}
