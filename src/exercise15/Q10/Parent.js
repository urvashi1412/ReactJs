import React from "react";
import Child from "./Child";

const Parent = () => {
const message = "Hello from the Parent component!";

return (
<div className="parent">
<h2>Parent Component</h2>
<Child message={message} />
</div>
);
};

export default Parent;
