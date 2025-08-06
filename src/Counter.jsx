import React from 'react';
import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  // return <button onClick={() => setCount(count + 1)}>{count}</button>;

  const setCounterHandler = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return <button onClick={setCounterHandler}>count is {count}</button>;
};
