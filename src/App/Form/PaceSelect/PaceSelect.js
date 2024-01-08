import React from "react";

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

export default PaceSelect;
