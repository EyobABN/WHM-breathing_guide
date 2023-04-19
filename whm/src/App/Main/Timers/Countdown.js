import React, { useState, useEffect } from 'react';

const Countdown = ({ seconds, controls, completeRound, mainState }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (!timeLeft) {
      const duration = mainState.pace / 2;
  
      controls.stop();
      controls.start({scale: 1, transition: {duration: duration, ease: 'easeInOut'}});
      setTimeout(() => {
        completeRound();
      }, duration * 1000 + 2000);
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, controls, completeRound, mainState.pace]);

  const displaySeconds = timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60;

  return (
    <div className='timer'>
      <p>00:{displaySeconds}</p>
    </div>
  );
};

export default Countdown;
