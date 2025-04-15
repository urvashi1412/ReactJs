import React from "react";


const UserPosts = ({ posts }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h3>User Posts</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post, index) => (
          <li key={index} style={{ margin: "10px 0", padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }}>
            {post}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default UserPosts;