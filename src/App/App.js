import React, { useState } from 'react';
import Welcome from './Welcome/Welcome';
import Form from './Form/Form';
import Main from './Main/Main';
import Report from './Report/Report';
import './App.css';
import Footer from './Footer/Footer';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [showReport, setShowReport] = useState(false);

  const [mainState, setMainState] = useState({ 'pace': 3, 'breaths': 30, 'round': 0, retentionTimes: [] });

  return (
    <>
      {showWelcome && <Welcome setShowWelcome={setShowWelcome} setShowForm={setShowForm} />}
      {showForm && <Form setShowForm={setShowForm} setShowMain={setShowMain} mainState={mainState} setMainState={setMainState} />}
      {showMain && <Main setShowForm={setShowForm} setShowMain={setShowMain} mainState={mainState} setMainState={setMainState} setShowReport={setShowReport} />}
      {showReport && <Report setShowReport={setShowReport} setShowWelcome={setShowWelcome} mainState={mainState} setMainState={setMainState} />}
      <Footer />
    </>
  );
}

export default App;
