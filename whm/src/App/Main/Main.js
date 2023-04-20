import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import BreathCounter from './BreathCounter/BreathCounter';
import Countup from './Timers/Countup';
import Countdown from './Timers/Countdown';
import { FaPlay, FaArrowLeft, FaTimes } from 'react-icons/fa';
import './Main.css';


const Main = ({ setShowForm, setShowMain, mainState, setMainState }) => {
  const [isStart, setIsStart] = useState(true);
  const [isBreathing, setIsBreathing] = useState(false);
  const [isInRetention, setIsInRetention] = useState(false);
  const [isInRecovery, setIsInRecovery] = useState(false);
  const [isInTransition, setIsInTransition] = useState(false);

  const [retentionSeconds, setRetentionSeconds] = useState(0);

  const controls = useAnimation();
  const breathLength = mainState.pace;
  const recoveryLength = 15;

  const handleStart = () => {
    if (isInTransition) setIsInTransition(false);
    if (isStart) setIsStart(false);
    setMainState({...mainState, 'round': mainState.round + 1})
    setIsBreathing(!isBreathing);
    if (!isBreathing) { // animate circle
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

  const handleRetentionClick = () => {
    const duration = mainState.pace / 2;

    controls.stop();
    controls.start({scale: 1, transition: {duration: duration, ease: 'easeInOut'}});
    setIsBreathing(false);
    // setTimeout(() => {
      setIsInRetention(true);
    // }, duration * 1000);
  }

  const handleRecoveryClick = () => {
    const duration = mainState.pace / 2;

    controls.stop();
    controls.start({scale: 1.3, transition: {duration: duration, ease: 'easeInOut'}});
    setIsInRetention(false);
    setMainState({...mainState, 'retentionTimes': [...mainState.retentionTimes, retentionSeconds]});
    setRetentionSeconds(0);
    // setTimeout(() => {
      setIsInRecovery(true);
    // }, duration * 1000);
  }

  const handleTransition = () => {
    setIsInRecovery(false);
    setIsInTransition(true);
  }

  return (
    <main className='main'>
      <FaArrowLeft className='back-button' onClick={() => { setShowForm(true); setShowMain(false);}} />
      <div className='prompt'>
        { isStart && 'PRESS PLAY TO START' }
        { isBreathing && `TAKE ${mainState.breaths} DEEP BREATHS` }
        { isInRetention && 'LET GO AND HOLD' }
        { isInRecovery && 'TAKE A DEEP BREATH IN AND HOLD'}
      </div>
      <div className='state'>{`${JSON.stringify(mainState)}`}</div>
      <div className='bubble'>
        <motion.div className='circle' animate={controls}></motion.div>
        { isStart && <FaPlay type='button' className='play-button' title='Start session' onClick={handleStart} /> }
        { isBreathing && <BreathCounter setIsBreathing={setIsBreathing} setIsInRetention={setIsInRetention} maxCount={mainState.breaths} delay={breathLength * 1000}/> }
        { isInRetention && <Countup seconds={retentionSeconds} setSeconds={setRetentionSeconds} /> }
        { isInRecovery && <Countdown seconds={recoveryLength} controls={controls} completeRound={handleTransition} mainState={mainState} />}
      </div>
      <div className='controls'>
        { isBreathing && <button type='button' className='button' onClick={handleRetentionClick}>GO INTO RETENTION</button> }
        { isInRetention && <button type='button' className='button' onClick={handleRecoveryClick}>GO INTO RECOVERY</button> }
      </div>
      <FaTimes type='button' title='Stop session' className='finish-button' />
    </main>
  );
};

export default Main;
