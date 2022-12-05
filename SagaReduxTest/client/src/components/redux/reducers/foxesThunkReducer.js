/* eslint-disable default-param-last */
import { SET_FOXES_THUNK } from '../types';

export default function foxerThunkReducer(state = '', action) {
  const { type, payload } = action;
  switch (type) {
    case SET_FOXES_THUNK:
      return payload;
    default:
      return state;
  }
}
