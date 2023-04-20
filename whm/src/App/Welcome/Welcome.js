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
      >EXERCISE</button>
    </div>
  );
};

export default Welcome;
