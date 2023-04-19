import React, { useState } from "react";
import PaceSelect from "./PaceSelect/PaceSelect";
import BreathSelect from "./BreathSelect/BreathSelect";
import './Form.css'

const Form = ({ setShowForm, setShowMain, setMainState }) => {
  const [ formState, setFormState ] = useState({ 'pace': 3, 'breaths': 30 });

  const handleSubmit = (event) => {
    event.preventDefault();
    setMainState(formState);
    setShowMain(true);
    setShowForm(false);
  };

  const handlePaceChange = (event) => {
    let breathLength;

    switch (event.target.value) {
      case 'Normal': 
        breathLength = 3;
        break;
      case 'Slow':
        breathLength = 4;
        break;
      case 'Fast':
        breathLength = 2;
        break;
      default:
        breathLength = 3;
    };
    setFormState({ ...formState, 'pace': breathLength });
  };

  const handleNumberChange = (event) => {
        setFormState({ ...formState, 'breaths': Number(event.target.value) });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-elements">
        <h3 className="title">SET YOUR PREFERENCES</h3>
        <PaceSelect
          paces={['Slow', 'Normal', 'Fast']}
          onChange={handlePaceChange}
        />
        <BreathSelect
          numbers={[10, 20, 30, 40, 50, 60]}
          onChange={handleNumberChange}
        />
      </div>
      <button type="submit" className="button">NEXT</button>
    </form>
  );
};

export default Form;
