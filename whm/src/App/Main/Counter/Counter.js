import React, { useState, useEffect } from 'react';

const Counter = ({ maxCount, delay }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log('Counter useEffect called');
    if (count < maxCount) {
      const timeoutId = setTimeout(() => setCount(count + 1), delay);
      return () => clearTimeout(timeoutId);
    }
  }, [count, maxCount, delay]);

  return <div className='counter'>{count}</div>;
};

export default Counter;
