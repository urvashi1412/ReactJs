import React from "react";
import profilePic from "./Images/image.png"; 

const ProfileImage = ({ imageUrl }) => {
  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <img
        src={imageUrl}
        alt="Profile"
        style={{ width: "150px", height: "150px", borderRadius: "50%" }}
      />
    </div>
  );
};

export default function WrapperComponent() {
  return <ProfileImage imageUrl={profilePic} />;
}