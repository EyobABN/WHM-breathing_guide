import React, { useState } from "react";
import './Form.css'

const BreathSelect = ({ numbers, onChange }) => {
  return (
    <label>
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
  const [ formState, setFormState ] = useState({ 'breaths': 30 });

  const handleSubmit = (event) => {
    event.preventDefault();
    setMainState(formState);
    setFormSubmitted(true);
  };

    const handleNumberChange = (event) => {
    setFormState({ ...formState, 'breaths': event.target.value });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <BreathSelect numbers={[10, 20, 30, 40, 50, 60]} onChange={handleNumberChange} />
      <button type="submit" className="button">NEXT</button>
    </form>
  );
};

export default Form;
