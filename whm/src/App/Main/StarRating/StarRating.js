import React from "react";
import { useState } from "react";
import './StarRating.css';
import Star from "./Star/Star";


const createArray = length => [...Array(length)];

export default function StarRating({ totalStars=5}) {
  const [selectedStars, setSelectedStars] = useState(0);
  const [hoveredStars, setHoveredStars] = useState(0);
  return (
  <>
    {createArray(totalStars).map((n, i) => (
      <Star
        key={i}
        hovered={hoveredStars > i}
        onHover={() => setHoveredStars(i + 1)}
        offHover={() => setHoveredStars(0)}
        selected={selectedStars > i}
        onSelect={() => setSelectedStars(i + 1)}
      />
    ))}
  </>
  );
}