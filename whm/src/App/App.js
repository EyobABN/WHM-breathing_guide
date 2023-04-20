import React, { useState } from 'react';
import Welcome from './Welcome/Welcome';
import Form from './Form/Form';
import Main from './Main/Main';
import Report from './Report/Report';
import './App.css';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [showReport, setShowReport] = useState(false);

  const [mainState, setMainState] = useState({});

  return (
    <>
      {showWelcome && <Welcome setShowWelcome={setShowWelcome} setShowForm={setShowForm} />}
      {showForm && <Form setShowForm={setShowForm} setShowMain={setShowMain} setMainState={setMainState} />}
      {showMain && <Main setShowForm={setShowForm} setShowMain={setShowMain} mainState={mainState} setMainState={setMainState} setShowReport={setShowReport} />}
      {showReport && <Report setShowReport={setShowReport} setShowWelcome={setShowWelcome} mainState={mainState} />}
    </>
  );
}

export default App;
