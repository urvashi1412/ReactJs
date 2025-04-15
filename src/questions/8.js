import React from "react";


const PrimeChecker = ({ number }) => {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };


  return <p>{number} is {isPrime(number) ? "a Prime" : "not a Prime"} number.</p>;
};


export default PrimeChecker;
