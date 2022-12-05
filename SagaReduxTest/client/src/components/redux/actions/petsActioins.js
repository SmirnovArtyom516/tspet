import axios from 'axios';

import { SET_PETS } from '../types';

export const setPets = (payload) => ({ type: SET_PETS, payload });

export const setPetsAsync = (input) => (dispatch) => {
  if (input === 'cats') {
    axios('https://api.thecatapi.com/v1/images/search?size=full')
      .then((res) => {
        dispatch(setPets(res.data[0].url));
      })
      .catch(console.log);
  } else if (input === 'dogs') {
    axios('https://dog.ceo/api/breeds/image/random')
      .then((res) => {
        dispatch(setPets(res.data.message));
      })
      .catch(console.log);
  }
};
