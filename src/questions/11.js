import React, { useState } from "react";


const RandomNumberGenerator = () => {
  const [number, setNumber] = useState(null);


  return (
    <div>
      <button onClick={() => setNumber(Math.floor(Math.random() * 100) + 1)}>Generate Random Number</button>
      {number !== null && <p>Random Number: {number}</p>}
    </div>
  );
};


export default RandomNumberGenerator;
