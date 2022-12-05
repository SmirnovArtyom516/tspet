import {
  // eslint-disable-next-line no-unused-vars
  call, put, takeEvery, takeLatest, throttle, delay,
} from 'redux-saga/effects';

import axios from 'axios';
import { FETCH_PETS_SAGA } from '../types';
import { setSagaPets } from '../actions/petsSagaActions';

const catApi = 'https://api.thecatapi.com/v1/images/search?size=full'; // url
const dogApi = 'https://dog.ceo/api/breeds/image/random'; // message

const getPetsWithAxios = (url) => axios(url);

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* petsSagaWorker(action) {
  try {
    yield delay(1000);
    if (action.payload === 'cats') {
      const res = yield call(getPetsWithAxios, catApi);
      yield put(setSagaPets(res.data[0].url));
    } else if (action.payload === 'dogs') {
      const res = yield call(getPetsWithAxios, dogApi);
      yield put(setSagaPets(res.data.message));
    }
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* petsSagaWatcher() {
  yield takeLatest(FETCH_PETS_SAGA, petsSagaWorker);
}

export default petsSagaWatcher;
