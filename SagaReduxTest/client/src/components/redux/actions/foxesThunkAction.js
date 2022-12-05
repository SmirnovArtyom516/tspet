import axios from 'axios';

import { SET_FOXES_THUNK } from '../types';

export const setFoxes = (payload) => ({ type: SET_FOXES_THUNK, payload });

export const setFoxesAsync = () => (dispatch) => {
  axios('https://randomfox.ca/floof/')
    .then((res) => {
      dispatch(setFoxes(res.data.image));
    })
    .catch(console.log);
};
