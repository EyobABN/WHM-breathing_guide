import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Prompt = ({ text, time = null }) => {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    if (time !== null) {
      const timeout = setTimeout(() => setShowText(false), time);
      return () => clearTimeout(timeout);
    }
  }, [time]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: showText ? 1 : 0 }}
      transition={{ duration: 0.25 }}
    >
      {text}
    </motion.div>
  );
};

export default Prompt;
