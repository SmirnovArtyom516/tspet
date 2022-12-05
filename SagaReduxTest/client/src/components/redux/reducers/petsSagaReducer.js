/* eslint-disable default-param-last */
import { SET_PETS_SAGA } from '../types';

export default function petsSagaReducer(state = '', action) {
  const { type, payload } = action;
  switch (type) {
    case SET_PETS_SAGA:
      return payload;
    default:
      return state;
  }
}
