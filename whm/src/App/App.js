import React, { useState } from 'react';
import Welcome from './Welcome/Welcome';
import Form from './Form/Form';
import Main from './Main/Main';
import './App.css';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [mainState, setMainState] = useState({});

  return (
    <>
      {showWelcome && <Welcome setShowWelcome={setShowWelcome} setShowForm={setShowForm} />}
      {showForm && <Form setShowForm={setShowForm} setShowMain={setShowMain} setMainState={setMainState} />}
      {showMain && <Main setShowForm={setShowForm} setShowMain={setShowMain} mainState={mainState} />}
    </>
  );
}

export default App;
