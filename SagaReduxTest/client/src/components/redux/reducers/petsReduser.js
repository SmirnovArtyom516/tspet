/* eslint-disable default-param-last */
import { SET_PETS } from '../types';

export default function petsReducer(state = '', action) {
  const { type, payload } = action;
  switch (type) {
    case SET_PETS:
      return payload;
    default:
      return state;
  }
}
