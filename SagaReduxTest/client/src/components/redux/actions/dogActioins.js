import { SET_DOGS, FETCH_DOGS } from '../types';

export const setDogs = (payload) => ({
  type: SET_DOGS,
  payload,
});

export const fetchDogs = (payload) => ({
  type: FETCH_DOGS,
  payload,
});
