import React from "react";

export default function Arrows({ prevSlide, nextSlide }) {
  return (
    <div>
      <span onClick={prevSlide}>&#10094</span>
      <span onClick={nextSlide}>&#10095</span>
    </div>
  );
}
