import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement } from '../store/actions';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <section>
      <p>Counter: {counter}</p>

      <div>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement(3))}>-</button>
      </div>
    </section>
  );
};

export default Counter;
