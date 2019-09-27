import React from 'react';
import { useDispatch } from 'react-redux';

import Counter from './components/Counter';
import Logged from './components/Logged';
import { signIn } from './store/actions';

const App = () => {
  const dispatch = useDispatch();

  return (
    <main>
      <button onClick={() => dispatch(signIn())}>Login</button>

      <Logged />
      <Counter />
    </main>
  );
};

export default App;
