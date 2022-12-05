import { SET_FOXES_SAGA, FETCH_FOXES_SAGA } from '../types';

export const setFoxesSagaAsync = (payload) => ({
  type: SET_FOXES_SAGA,
  payload,
});

export const fetchFoxes = (payload) => ({
  type: FETCH_FOXES_SAGA,
  payload,
});
