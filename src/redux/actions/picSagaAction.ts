import { FETCH_SET_PIC, SET_PIC } from '../types';


export const setPicsSagaAsync = (payload:any) => ({
  type: SET_PIC,
  payload: payload || null,
});

export const fetchPics = (payload:any) => ({
  type: FETCH_SET_PIC,
  payload: payload || null,
});

