import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSagaPets } from '../redux/actions/petsSagaActions';

export default function Pets() {
  const { id } = useParams();
  const dispatch = useDispatch();

  function clickHandle() {
    dispatch(fetchSagaPets(id));
  }

  const pets = useSelector((store) => store.petsSaga);
  useEffect(() => {
    clickHandle();
  }, [id]);

  return (
    <div className="card" style={{ marginLeft: '40%', marginTop: '100px', width: '20rem' }}>
      <img src={pets} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Pretty pet for your relax</h5>
        <div className="d-flex justify-content-around">
          <button onClick={clickHandle} type="button" className="btn btn-primary">👍</button>
          <button onClick={clickHandle} type="button" className="btn btn-primary">😕</button>
          <button onClick={clickHandle} type="button" className="btn btn-primary">👎🏾</button>
        </div>
      </div>
    </div>
  );
}
