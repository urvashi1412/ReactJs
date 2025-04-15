import React, { useRef, useState } from "react";

const UserFormRef = () => { const nameRef = useRef(null); const emailRef = useRef(null);
const [submittedData, setSubmittedData] = useState(null); const handleSubmit = (e) => {
e.preventDefault(); // Prevent page reload

const name = nameRef.current.value; const email = emailRef.current.value;

setSubmittedData({ name, email }); nameRef.current.value = "";
emailRef.current.value = "";
};

return (
<div className="form-container">
<h2>React Form with useRef</h2>
<form onSubmit={handleSubmit}>
<label>Name:</label>
<input type="text" ref={nameRef} required />

<label>Email:</label>
<input type="email" ref={emailRef} required />

<button type="submit">Submit</button>
</form>

{submittedData && (
<div className="output">
<h3>Submitted Data:</h3>
<p><strong>Name:</strong> {submittedData.name}</p>
<p><strong>Email:</strong> {submittedData.email}</p>
</div>
)}
</div>
);
};

export default UserFormRef;
