import React from "react";
import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";


const ProfilePage = () => {
  const user = {
    imageUrl: "/Images/profile.jpg",
    name: "Andrea Smith",
    email: "student@example.com",
    bio: "Software developer passionate about React and web development.",
    posts: [
      "Just completed my latest React project!",
      "Exploring new UI design trends.",
      "Had a great experience working with Tailwind CSS!"
    ]
  };


  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", fontFamily: "Arial, sans-serif" }}>
      <ProfileImage imageUrl={user.imageUrl} />
      <UserInfo name={user.name} email={user.email} bio={user.bio} />
      <UserPosts posts={user.posts} />
    </div>
  );
};


export default ProfilePage;