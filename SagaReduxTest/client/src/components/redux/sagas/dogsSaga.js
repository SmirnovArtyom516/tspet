import {
  call, put, takeLatest, delay,
} from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_DOGS } from '../types';
import { setDogs } from '../actions/dogActioins';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions

const getDogsAsync = () => axios.get('https://dog.ceo/api/breeds/image/random');

function* dogsWorker() {
  try {
    yield delay(500);
    const res = yield call(getDogsAsync);
    yield put(setDogs(res.data.message));
  } catch (e) {
    console.log(e);
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* dogsWatcher() {
  yield takeLatest(FETCH_DOGS, dogsWorker);
}

export default dogsWatcher;
