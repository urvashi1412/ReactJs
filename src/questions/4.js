import React from "react";


const StyledMessage = () => {
  const messageStyle = {
    color: "blue",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
    padding: "10px",
    border: "2px solid blue",
    borderRadius: "5px",
  };


  return <div style={messageStyle}>This is a styled message!</div>;
};


export default StyledMessage;
