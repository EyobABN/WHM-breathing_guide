import React, { useState, useEffect } from 'react';

const BreathCounter = ({ setIsBreathing, setIsInRetention, maxCount, delay }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (count <= maxCount) {
      const timeoutId = setTimeout(() => setCount(count + 1), delay);
      return () => clearTimeout(timeoutId);
    } else {
      setIsBreathing(false);
      setIsInRetention(true);
    }
  }, [count, maxCount, delay, setIsBreathing, setIsInRetention]);

  return <div className='counter'>{count}</div>;
};

export default BreathCounter;
