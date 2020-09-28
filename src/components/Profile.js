import React from "react";
import ProfilePic from "./ProfilePic";

const Profile = ({ displayName, photoURL }) => {
  const logout = () => {
    console.log("logged out... psyche");
  };
  console.log(JSON.stringify(displayName));

  return (
    <div>
      <ProfilePic image={photoURL} />
      <h1 className="display-4">{displayName}</h1>
      <button onClick={logout} className="btn btn-danger mt-2 mb-2">
        Logout
      </button>
    </div>
  );
};

export default Profile;
