import { SET_PETS_SAGA, FETCH_PETS_SAGA } from '../types';

export const setSagaPets = (payload) => ({
  type: SET_PETS_SAGA,
  payload,
});

export const fetchSagaPets = (payload) => ({
  type: FETCH_PETS_SAGA,
  payload,
});
