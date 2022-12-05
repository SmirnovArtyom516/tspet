import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';


import rootSaga from './sagas/saga';

import PicsSaga from './reducers/pics';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    PicsSaga: PicsSaga,
  },
  middleware: (mid) => [...mid(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
