import React from "react";


const CurrentDay = () => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().getDay();
  return <h1>Today is {days[today]}</h1>;
};


export default CurrentDay;
