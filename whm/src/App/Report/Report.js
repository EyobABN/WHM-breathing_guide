import React from "react";
import Table from "./Table/Table";


const Report = ({ setShowReport, setShowWelcome, mainState, setMainState }) => {
  const handleClick = () => {
    setMainState({...mainState, 'round': 0, retentionTimes: []});
    setShowWelcome(true);
    setShowReport(false);
  };

  return (
    <div className="report">
      { mainState.retentionTimes.length > 0 ?
          <>
            <div className="title">WELL DONE</div>
            <div className="subTitle">Relax, and let your breathing return to normal.<br/>Here are your results</div>
            <Table times={mainState.retentionTimes} />
          </> :
          <div className="subTitle">No rounds completed.<br/>Return to the homepage to start a new session.</div> 
      }
      <button className="button" onClick={handleClick}>RETURN TO HOMEPAGE</button>
    </div>
  );
};

export default Report;
