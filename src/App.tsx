import React, { useState } from 'react';
import './App.css';
import { Counter } from './components/counter/Counter';
import { Settings } from './components/settings/Settings';

function App() {
  const defaultInitCount = 0
  const defaultLimitCount = 5
  const [initialCount, setInitialCount] = useState<number>(defaultInitCount)
  const [limitCount, setLimitCount] = useState<number>(defaultLimitCount)

  return (
    <>
      <Settings setInitCount={setInitialCount} setLimitCount={setLimitCount} defaultInitCount={defaultInitCount} defaultLimitCount={defaultLimitCount}/>
      <Counter initialCount={initialCount} limitCount={limitCount}/>
    </>
  )  
}

export default App;
