/* eslint-disable default-param-last */
import { SET_FOXES_SAGA } from '../types';

export default function catsReducer(state = '', action) {
  const { type, payload } = action;
  switch (type) {
    case SET_FOXES_SAGA:
      return payload;
    default:
      return state;
  }
}
