import React from "react";

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

export default BreathSelect;