import React from "react";
import './Welcome.css'


const Welcome = ({ setShowWelcome, setShowForm}) => {
  const handleClick = () => {
    setShowForm(true)
    setShowWelcome(false);
  };

  return (
    <div className="welcome">
      <h1>WIM HOF METHOD</h1>
      <p>Breathing Guide</p>
      <button
        className="button"
        onClick={handleClick}
      >EXERCISE</button>
    </div>
  );
};

export default Welcome;
