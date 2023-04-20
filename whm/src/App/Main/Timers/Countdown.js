import React, { useState, useEffect } from 'react';

const Countdown = ({ seconds, controls, completeRound, mainState }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (!timeLeft) {

      const duration = mainState.pace / 2 + 4;
  
      controls.stop();
      controls.start({scale: 1, transition: {duration: duration, ease: 'easeInOut'}});
      setTimeout(() => {
        completeRound();
      }, duration * 1000);
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, controls, completeRound, mainState.pace]);

  const minutes = Math.floor(timeLeft / 60);
  const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const displaySeconds = timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60;

  return (
    <div className='timer'>
      {timeLeft === 0 ? 'LET GO' : `${displayMinutes}:${displaySeconds}`}
    </div>
  );
};

export default Countdown;
