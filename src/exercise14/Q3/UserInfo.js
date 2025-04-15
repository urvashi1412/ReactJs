import React from "react";


const UserInfo = ({ name, email, bio }) => {
  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>{bio}</p>
    </div>
  );
};


export default UserInfo;