import {
  call, put, takeLatest, delay,
} from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_FOXES_SAGA } from '../types';
import { setFoxesSagaAsync } from '../actions/foxesSagaAction';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions

const getFoxesAsync = () => axios.get('https://randomfox.ca/floof/');

function* foxesWorker() {
  try {
    yield delay(500);
    const res = yield call(getFoxesAsync);
    yield put(setFoxesSagaAsync(res.data.image));
  } catch (e) {
    console.log(e);
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* foxesWatcher() {
  yield takeLatest(FETCH_FOXES_SAGA, foxesWorker);
}

export default foxesWatcher;
