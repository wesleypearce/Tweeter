import React from "react";
import ProfilePic from "./ProfilePic";
import firebase, { signOut } from "../firebase";
import "@firebase/auth";

const Profile = ({ displayName, photoURL }) => {
  const handleClick = () => {
    console.log(firebase.auth);
    signOut();
  };
  return (
    <div>
      <ProfilePic image={photoURL} />
      <h1 className="display-4">{displayName}</h1>
      <button onClick={handleClick} className="btn btn-danger mt-2 mb-2">
        Logout
      </button>
    </div>
  );
};

export default Profile;
