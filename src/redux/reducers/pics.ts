import { SET_PIC } from '../types';

export default function catsReducer(state = '', action: any) {
  const { type, payload } = action;
  switch (type) {
    case SET_PIC:
      return payload;
    default:
      return state;
  }
}