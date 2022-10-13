import React, { useState } from 'react';
import useCounter from '../hooks/useCounter';

const Counter = () => {
    const {
        value, increment, decrement, reset, MAX_VALUE, MIN_VALUE,
    } = useCounter(0);
    const [step, setStep] = useState(1);

  return (
    <>
      <label htmlFor="step">Step: </label>
      <input type="number" value={step} id="step" onChange={(e) => setStep(e.target.value)} />

      <h2>{value}</h2>
      <button type="button" disabled={value === MAX_VALUE} onClick={() => increment(Number(step))}>
        Increment
      </button>
      <button type="button" disabled={value === MIN_VALUE} onClick={() => decrement(Number(step))}>
        Decrement
      </button>
      <button type="button" onClick={() => reset()}>
        Reset
      </button>
    </>
  );
};

export default Counter;
