import React from 'react';
import { useQuery } from '@apollo/client';
import client from './query';
import './App.css';

const App = () => {
  const data = useQuery(client);
  return (
    <div className="App">
      {data}
    </div>
  );
}

export default App;
