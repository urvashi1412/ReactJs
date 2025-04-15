import React from "react";


const Greeting = () => {
  const isMorning = true;
  const message = isMorning ? "Good Morning" : "Good Evening";


  return <h1>{message}</h1>;
};


export default Greeting;
