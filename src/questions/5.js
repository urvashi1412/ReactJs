import React from "react";


const SumOfSquares = () => {
  const num1 = 3;
  const num2 = 4;
  const sumOfSquares = num1 * num1 + num2 * num2;


  return <p>The sum of squares of {num1} and {num2} is {sumOfSquares}.</p>;
};


export default SumOfSquares;
