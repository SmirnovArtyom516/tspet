import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import catsReducer from './reducers/catsReduser';
import petsReducer from './reducers/petsReduser';

import dogsReducer from './reducers/dogsReducer';
// import dogsWatcher from './sagas/dogsSaga';

import petsSagaReducer from './reducers/petsSagaReducer';
// import petsSagaWatcher from './sagas/petsSaga';

import rootSaga from './sagas/saga';

import foxerThunkReducer from './reducers/foxesThunkReducer';

import foxesSagaReducer from './reducers/foxesSagaReducer';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    cats: catsReducer,
    dogs: dogsReducer,
    pets: petsReducer,
    petsSaga: petsSagaReducer,
    foxesThunk: foxerThunkReducer,
    foxesSaga: foxesSagaReducer,
  },
  middleware: (mid) => [...mid(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
