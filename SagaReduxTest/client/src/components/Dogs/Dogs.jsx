import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import { fetchDogs } from '../redux/actions/dogActioins';

export default function Dogs() {
  const dogs = useSelector((store) => store.dogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDogs());
  }, []);

  return (
    <Card img={dogs} setAsync={fetchDogs} />
  );
}
