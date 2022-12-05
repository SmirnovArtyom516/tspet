import {
    call, put, takeLatest, delay,
  } from 'redux-saga/effects';
  import axios from 'axios';
  import { FETCH_SET_PIC } from '../types';
  import { setPicsSagaAsync } from '../actions/picSagaAction';
  
  const getPicAsync = ():any => axios('https://api.waifu.pics/sfw/waifu');
  
  function* PicWorker():any
  {
    try {
      yield delay(500);
      const res: any = yield call(getPicAsync);
      yield put(setPicsSagaAsync(res.data.url));
    } catch (e) {
      console.log(e);
    }
  }
  
  function* PicWatcher() {
    yield takeLatest(FETCH_SET_PIC, PicWorker);
  }
  
  export default PicWatcher;