import React from "react";

const StyledButton = () => { const buttonStyle = {
backgroundColor: "#FF6F61", // Bright Coral (Primary color) padding: "10px 20px",
fontSize: "16px", color: "white",
border: "none",
borderRadius: "5px", cursor: "pointer",
};

return <button style={buttonStyle}>Click Me</button>;
};

export default StyledButton;
