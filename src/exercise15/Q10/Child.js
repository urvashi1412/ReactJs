import React from "react";

const Child = ({ message }) => { return (
<div className="child">
<h3>Child Component</h3>
<p>Message from Parent: {message}</p>
</div>
);
};

export default Child;
