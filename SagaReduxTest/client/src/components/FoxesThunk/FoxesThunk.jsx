import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import { setFoxesAsync } from '../redux/actions/foxesThunkAction';

export default function FoxesThunk() {
  const foxes = useSelector((store) => store.foxesThunk);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFoxesAsync());
  }, []);

  return (
    <Card setAsync={setFoxesAsync} img={foxes} />
  );
}
