import React from 'react';
import { useSelector } from 'react-redux';

const App = () => {
  const isLogged = useSelector((state) => state.logged);

  return <>{isLogged && <p>Privacy information</p>}</>;
};

export default App;
