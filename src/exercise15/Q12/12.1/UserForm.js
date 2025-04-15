import React, { useState } from "react";

const UserForm = () => {
const [formData, setFormData] = useState({ name: "", email: "" });

const handleChange = (e) => {
setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => { e.preventDefault();
alert(`Submitted Name: ${formData.name}, Email: ${formData.email}`);
};

return (
<div className="form-container">
<h2>React Form</h2>
<form onSubmit={handleSubmit}>
<label>Name:</label>
<input
type="text" name="name"
value={formData.name}
onChange={handleChange}
required
/>
<br></br>
<br></br>
<label>Email:</label>
<input
type="email" name="email"
value={formData.email} onChange={handleChange} required
/>
<br></br>
<br></br>
<button type="submit">Submit</button>
</form>

<div className="output">
<h3>Preview:</h3>
<p><strong>Name:</strong> {formData.name}</p>
<p><strong>Email:</strong> {formData.email}</p>
</div>
</div>
);
};

export default UserForm;
