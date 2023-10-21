import React, { useState } from 'react';
import './App.css';
import { Counter } from './components/counter/Counter';
import { Settings } from './components/settings/Settings';

export type ErrorType = '' | 'incorrect' | 'unsetted'

function App() {
  let defaultInitCount = 0
  let localStorInitCount= localStorage.getItem('initCount')
  if (localStorInitCount) defaultInitCount = JSON.parse(localStorInitCount) 

  let defaultLimitCount = 5
  let localStorLimitCount = localStorage.getItem('limitCount')
  if (localStorLimitCount) defaultLimitCount = JSON.parse(localStorLimitCount) 


  const [initialCount, setInitialCount] = useState<number>(defaultInitCount)
  const [limitCount, setLimitCount] = useState<number>(defaultLimitCount)
  const [error, setError] = useState<ErrorType>('')

  return (
    <>
      <Settings setInitCount={setInitialCount}
                setLimitCount={setLimitCount} 
                defaultInitCount={defaultInitCount} 
                defaultLimitCount={defaultLimitCount}
                initialCount={initialCount}
                limitCount={limitCount}
                setError={setError}
                />
      <Counter initialCount={initialCount} limitCount={limitCount} error={error}/>
    </>
  )  
}

export default App;
