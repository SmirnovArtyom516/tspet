import React from 'react';
import { useDispatch } from 'react-redux';

export default function Card({ setAsync, img }) {
  const dispatch = useDispatch();

  function clickHandle() {
    dispatch(setAsync());
  }

  return (
    <div className="card" style={{ marginLeft: '40%', marginTop: '100px', width: '20rem' }}>
      <img src={img} className="card-img-top" alt="..." />
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
