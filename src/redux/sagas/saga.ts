import { all, fork } from 'redux-saga/effects';
import PicsSaga from './picSaga';

export default function* rootSaga() {
  yield all([
    fork(PicsSaga),
  ]);
}