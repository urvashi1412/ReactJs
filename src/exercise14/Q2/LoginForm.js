import React, { useState } from "react";


const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    city: "",
    webserver: "",
    role: "",
    sso: []
  });


  const [message, setMessage] = useState("");


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;


    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        sso: checked
          ? [...prevData.sso, value]
          : prevData.sso.filter((item) => item !== value)
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };


  const handleReset = () => {
    setFormData({
      username: "",
      password: "",
      city: "",
      webserver: "",
      role: "",
      sso: []
    });
    setMessage("");
  };


  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("Saved! ✅");
  };


  return (
    <div style={{ width: "350px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center" }}>Novell Services Login</h2>


      <label>Username:</label>
      <input type="text" name="username" value={formData.username} onChange={handleChange} style={{ width: "100%", marginBottom: "10px" }} />


      <label>Password:</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} style={{ width: "100%", marginBottom: "10px" }} />


      <label>City of Employment:</label>
      <input type="text" name="city" value={formData.city} onChange={handleChange} style={{ width: "100%", marginBottom: "10px" }} />


      <label>Web Server:</label>
      <select name="webserver" value={formData.webserver} onChange={handleChange} style={{ width: "100%", marginBottom: "10px" }}>
        <option value="">-- Choose a server --</option>
        <option value="Server1">Server 1</option>
        <option value="Server2">Server 2</option>
        <option value="Server3">Server 3</option>
      </select>


      <p>Please specify your role:</p>
      <label><input type="radio" name="role" value="Admin" checked={formData.role === "Admin"} onChange={handleChange} /> Admin</label><br />
      <label><input type="radio" name="role" value="Engineer" checked={formData.role === "Engineer"} onChange={handleChange} /> Engineer</label><br />
      <label><input type="radio" name="role" value="Manager" checked={formData.role === "Manager"} onChange={handleChange} /> Manager</label><br />
      <label><input type="radio" name="role" value="Guest" checked={formData.role === "Guest"} onChange={handleChange} /> Guest</label><br />


      <p>Single Sign-on to the following:</p>
      <label><input type="checkbox" name="sso" value="Mail" checked={formData.sso.includes("Mail")} onChange={handleChange} /> Mail</label><br />
      <label><input type="checkbox" name="sso" value="Payroll" checked={formData.sso.includes("Payroll")} onChange={handleChange} /> Payroll</label><br />
      <label><input type="checkbox" name="sso" value="Self-service" checked={formData.sso.includes("Self-service")} onChange={handleChange} /> Self-service</label><br />


      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <button onClick={handleLogin} style={{ marginRight: "10px", padding: "5px 15px" }}>Login</button>
        <button type="button" onClick={handleReset} style={{ padding: "5px 15px" }}>Reset</button>
      </div>


      {message && <p style={{ textAlign: "center", color: "green", marginTop: "10px" }}>{message}</p>}
    </div>
  );
};


export default LoginForm;