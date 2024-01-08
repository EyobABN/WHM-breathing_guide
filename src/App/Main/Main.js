import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Prompt from './Prompt/Prompt';
import BreathCounter from './BreathCounter/BreathCounter';
import Countup from './Timers/Countup';
import Countdown from './Timers/Countdown';
import { FaPlay, FaAngleLeft } from 'react-icons/fa';
import './Main.css';


const Main = ({ setShowForm, setShowMain, mainState, setMainState, setShowReport }) => {
  const [isStart, setIsStart] = useState(true);
  const [isBreathing, setIsBreathing] = useState(false);
  const [isInRetention, setIsInRetention] = useState(false);
  const [isInRecovery, setIsInRecovery] = useState(false);

  const [retentionSeconds, setRetentionSeconds] = useState(0);

  const controls = useAnimation();
  const breathLength = mainState.pace;
  const recoveryLength = 15;
  const promptDuration = 5000;

  const handleStart = () => {
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
    setIsBreathing(false);
    setIsInRetention(true);
    controls.start({scale: 1, transition: {duration: duration, ease: 'easeInOut'}});
  }

  const handleRecoveryClick = () => {
    const duration = mainState.pace / 2;

    controls.stop();
    setIsInRetention(false);
    setMainState({...mainState, 'retentionTimes': [...mainState.retentionTimes, retentionSeconds]});
    setRetentionSeconds(0);
    setIsInRecovery(true);
    controls.start({scale: [1, 1.3], transition: {duration: duration, ease: 'easeInOut'}});
  }

  const handleTransition = () => {
    setIsInRecovery(false);
    setIsStart(true);
  }

  const handleFinishClick = () => {
    setShowReport(true);
    setShowMain(false);
  }

  return (
    <main className='main'>
      <FaAngleLeft className='button' id='back-button' onClick={() => { setShowForm(true); setShowMain(false);}} />
      <div className='prompt'>
        { isStart && <Prompt text={`PRESS PLAY TO BEGIN${mainState.round ? ` ROUND ${mainState.round + 1}` : ''}`} /> }
        { isBreathing && <Prompt text={`TAKE ${mainState.breaths} DEEP BREATHS`} time={promptDuration * 2} /> }
        { isInRetention && <Prompt text={'EXHALE AND HOLD'} time={promptDuration} /> }
        { isInRecovery && <Prompt text={'INHALE DEEPLY AND HOLD'} time={promptDuration} /> }
      </div>
      <div id='state'><Prompt text={!isStart ? `ROUND ${mainState.round}` : ''} /></div>
      <div className='bubble'>
        { isStart && <FaPlay type='button' id='play-button' onClick={handleStart} /> }
        <motion.div className='circle' animate={controls}></motion.div>
        { isBreathing && <BreathCounter setIsBreathing={setIsBreathing} setIsInRetention={setIsInRetention} maxCount={mainState.breaths} delay={breathLength * 1000}/> }
        { isInRetention && <Countup seconds={retentionSeconds} setSeconds={setRetentionSeconds} /> }
        { isInRecovery && <Countdown seconds={recoveryLength} controls={controls} completeRound={handleTransition} mainState={mainState} />}
      </div>
      <div className='controls'>
        { isBreathing && <button type='button' className='button' onClick={handleRetentionClick}>GO INTO RETENTION</button> }
        { isInRetention && <button type='button' className='button' onClick={handleRecoveryClick}>GO INTO RECOVERY</button> }
      </div>
      <button type='button' className='button' id='finish-button' onClick={handleFinishClick}>FINISH</button>
    </main>
  );
};

export default Main;
