import React from "react";


const Report = ({ setShowReport, setShowWelcome, mainState }) => {
  const handleClick = () => {
    setShowWelcome(true)
    setShowReport(false);
  };

  return (
    <div className="report">
      <div className="title">WELL DONE</div>
      <div className="subTitle">Relax, and let your breathing return to normal. Here are your results</div>
      <div className="state">{`${JSON.stringify(mainState)}`}</div>
      <button
        className="button"
        onClick={handleClick}
      >RETURN TO HOMEPAGE</button>
    </div>
  );
};

export default Report;
