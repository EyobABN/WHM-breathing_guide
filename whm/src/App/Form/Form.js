import React, { useState } from "react";
import './Form.css'


const PaceSelect = ({ paces, onChange }) => {
  return (
    <label className="form-element">
      BREATHING PACE
      <select defaultValue={'Normal'} onChange={onChange}>
        {paces.map((pace) => (
          <option key={pace} value={pace}>
            {pace}
          </option>
        ))}
      </select>
    </label>
  );
};

const BreathSelect = ({ numbers, onChange }) => {
  return (
    <label className="form-element">
      BREATHS BEFORE RETENTION
      <select defaultValue={30} onChange={onChange}>
        {numbers.map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
    </label>
  );
};

const Form = ({ setMainState, setFormSubmitted }) => {
  const [ formState, setFormState ] = useState({ 'pace': 'Normal', 'breaths': 30 });

  const handleSubmit = (event) => {
    event.preventDefault();
    setMainState(formState);
    setFormSubmitted(true);
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
