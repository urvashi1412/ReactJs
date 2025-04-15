import React, { useRef } from "react";

const FormWithRef = () => {
const inputRef = useRef(null); // Create a reference

const handleFocus = () => {
inputRef.current.focus(); // Focus the input field
};

return (
<div>
<h2>Auto-Focus Input Field</h2>
<input ref={inputRef} type="text" placeholder="Type something..." />
<button onClick={handleFocus}>Focus Input</button>
</div>
);
};

export default FormWithRef;
