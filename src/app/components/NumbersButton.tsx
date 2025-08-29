"use client";
import React, { useState } from "react";

const NumbersButton = () => {
  const [number, setNumber] = useState<number>(0);
  return (
    <div className="sub-title btn_numbers">
      <button
        onClick={() => {
          setNumber((prev) => (prev <= 1 ? prev : prev - 1));
        }}
      >
        -
      </button>
      <span>{number}</span>
      <button
        onClick={() => {
          setNumber((prev) => prev + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default NumbersButton;
