import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import { fetchFoxes } from '../redux/actions/foxesSagaAction';

export default function FoxesSaga() {
  const foxesSaga = useSelector((store) => store.foxesSaga);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFoxes());
  }, []);

  return (
    <Card setAsync={fetchFoxes} img={foxesSaga} />
  );
}
