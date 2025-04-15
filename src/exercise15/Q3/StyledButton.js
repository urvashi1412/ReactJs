import React from "react";

const StyledButton = () => { return (
<div>
<style>
{`
.custom-button {
background-color: #FF6F61; padding: 10px 20px;
font-size: 16px; color: white; border: none; border-radius: 5px; cursor: pointer;
}

.custom-button:hover {
background-color: #E35B50;
}
`}
</style>
<button className="custom-button">Click Me</button>
</div>
);
};

export default StyledButton;
