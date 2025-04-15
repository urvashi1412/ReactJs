import React from "react";


const LeapYearChecker = () => {
  const year = 2024; // Hardcoded year


  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;


  return <p>{year} is {isLeap ? "a Leap Year" : "not a Leap Year"}</p>;
};


export default LeapYearChecker;
