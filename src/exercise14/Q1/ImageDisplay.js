import React from "react";
import AvocadoImage from "./Images/image.png";


const ImageDisplay = () => {
  return (
    <div>
      <h3>Avocado Image (from src/Images)</h3>
      <img src={AvocadoImage} alt="Avocado" width="200" />


      <h3>Banana Image (from public/Images)</h3>
      <img src={`${process.env.PUBLIC_URL}/Images/banana.png`} alt="Banana" width="200" />
    </div>
  );
};


export default ImageDisplay;