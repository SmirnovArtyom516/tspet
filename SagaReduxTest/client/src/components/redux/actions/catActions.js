import axios from 'axios';

import { SET_CATS } from '../types';

export const setCats = (payload) => ({ type: SET_CATS, payload });

export const setCatsAsync = () => (dispatch) => {
  axios('https://api.thecatapi.com/v1/images/search?size=full')
    .then((res) => {
      dispatch(setCats(res.data[0].url));
    })
    .catch(console.log);
};
