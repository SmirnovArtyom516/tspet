import { all, fork } from 'redux-saga/effects';
import dogsWatcher from './dogsSaga';
import petsSagaWatcher from './petsSaga';
import foxesWatcher from './foxesSaga';

export default function* rootSaga() {
  yield all([
    fork(dogsWatcher), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
    fork(petsSagaWatcher),
    fork(foxesWatcher),
  ]);
}
