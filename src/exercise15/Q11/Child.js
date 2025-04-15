import React from "react";
import PropTypes from "prop-types"; // Import prop-types

const Child = ({ message }) => { return (
<div className="child">
<h3>Child Component</h3>
<p>Message from Parent: {message}</p>
</div>
);
};

Child.propTypes = {
message: PropTypes.string.isRequired,
};

export default Child;
