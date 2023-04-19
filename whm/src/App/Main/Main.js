import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Counter from './Counter/Counter';
import { FaPlay, FaArrowLeft, FaTimes, FaFastForward } from 'react-icons/fa';

import './Main.css';

const Main = ({ setShowForm, setShowMain, mainState }) => {
  const controls = useAnimation();
  const [isBreathing, setIsBreathing] = useState(false);
  const breathLength = mainState.pace;

  const handleClick = () => {
    setIsBreathing(!isBreathing);
    if (!isBreathing) {
      controls.start({
        scale: [1, 1.2, 1],
        transition: {
          duration: breathLength,
          ease: 'easeInOut',
          repeat: mainState.breaths - 1,
        },
      });
    } else {
      controls.stop();
      controls.start({scale: 1, transition: {duration: 1, ease: 'easeInOut'}});
    }
  };

  return (
    <main className='main'>
      <FaArrowLeft className='back-button' onClick={() => { setShowForm(true); setShowMain(false);}} />
      <div className='state'>{`Round N | ${JSON.stringify(mainState)}`}</div>
      <div className='bubble'>
        <motion.div className='circle' animate={controls}></motion.div>
        { isBreathing ?
          <Counter maxCount={mainState.breaths} delay={breathLength * 1000}/> :
          <FaPlay type='button' title='Start session' onClick={handleClick} className='play-button'/> }
      </div>
      <div className='controls'>
        { isBreathing ?
          <FaFastForward type='button' title='Go into retention' className='ff-button' onClick={handleClick} /> :
          '' }
      </div>
      <FaTimes type='button' title='Stop session' className='finish-button'>Finish</FaTimes>
    </main>
  );
};

export default Main;
