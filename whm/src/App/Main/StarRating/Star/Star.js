import React from 'react'
import { FaStar } from 'react-icons/fa';

const Star = ({ selected=false, hovered=false, onHover = f => f, offHover = f => f, onSelect = f => f }) => {
  return (
    <FaStar
      color={selected ? 'orange' : (hovered ? 'grey' : 'darkgrey')}
      onMouseOver={onHover}
      onMouseOut={offHover}
      onClick={onSelect}
    />
  );
};

export default Star;
