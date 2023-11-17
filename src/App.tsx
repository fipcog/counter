import React, { useState } from 'react';
import './App.css';
import { Counter } from './components/counter/Counter';
import { Settings } from './components/settings/Settings';

export type ErrorType = '' | 'incorrect' | 'unsetted'

function App() {

  return (
    <>
      <Settings />
      <Counter />
    </>
  )  
}

export default App;
