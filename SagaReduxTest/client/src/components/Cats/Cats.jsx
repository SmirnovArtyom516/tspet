import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import { setCatsAsync } from '../redux/actions/catActions';

export default function Cats() {
  const cats = useSelector((store) => store.cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCatsAsync());
  }, []);

  return (
    <Card setAsync={setCatsAsync} img={cats} />
  );
}
