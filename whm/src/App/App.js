import React, { useState } from 'react';
// import Header from './Header/Header';
import Form from './Form/Form';
import Main from './Main/Main';
// import Footer from './Footer/Footer';
import './App.css';

function App() {
  const [mainState, setMainState] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <>
      {/* <Header /> */}
      {!formSubmitted && <Form setMainState={setMainState} setFormSubmitted={setFormSubmitted} />}
      {formSubmitted && <Main className="App-main" mainState={mainState} />}
      {/* <Footer /> */}
    </>
  );
}

export default App;
