import React from "react";
import './Welcome.css'


const Welcome = ({ setShowWelcome, setShowForm}) => {
  const handleClick = () => {
    setShowForm(true)
    setShowWelcome(false);
  };

  return (
    <div className="welcome">
      <div className="subTitle">Wim Hof Method</div>
      <div className="title">BREATHING GUIDE</div>
      <button
        className="button"
        onClick={handleClick}
        type="button"
      >EXERCISE</button>
      <a href="https://www.youtube.com/watch?v=OpTG02x6w5o" rel="noreferrer" target="_blank">What is Wim Hof?</a>
    </div>
  );
};

export default Welcome;
