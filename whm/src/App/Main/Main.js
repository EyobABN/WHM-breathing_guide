import React, { useState } from 'react';
import './Main.css';
import Counter from './Counter/Counter';
import { motion, useAnimation } from 'framer-motion';
// import StarRating from './StarRating/StarRating';

const Main = ({ mainState }) => {
  const controls = useAnimation();
  const [isBreathing, setIsBreathing] = useState(false);
  const breathLength = 4;

  const handlePlayClick = () => {
    console.log('handlePlayClick called');
    setIsBreathing(!isBreathing);
    if (!isBreathing) {
      controls.start({
        scale: [1, 1.3, 1],
        transition: {
          duration: breathLength,
          ease: 'easeInOut',
          repeat: Number(mainState.breaths) - 1,
        },
      });
    } else {
      controls.stop();
    }
  };

  return (
    <main className='main'>
      <div style={{'margin': '50px'}}>{JSON.stringify(mainState)}</div>
      <motion.div animate={controls} className='bubble'>
        <div className='circle'></div>
        { isBreathing ? <Counter maxCount={Number(mainState.breaths)} delay={breathLength * 1000}/> : '' }
      </motion.div>
      <div className='controls'>
        <button
          type='button'
          title={isBreathing ? 'Stop session' : 'Start session'}
          className='button'
          onClick={handlePlayClick}>
          {isBreathing ? 'STOP' : 'START'}
        </button>
        {/* <StarRating className='stars'/> */}
      </div>
    </main>
  );
};

export default Main;
