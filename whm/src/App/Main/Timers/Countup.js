import React, { useEffect } from 'react';

const Countup = ({ seconds, setSeconds }) => {

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds, setSeconds]);

  const minutes = Math.floor(seconds / 60);
  const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const displaySeconds = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;

  return (
    <div className='timer'>
      {displayMinutes}:{displaySeconds}
    </div>
  );
};

export default Countup;
