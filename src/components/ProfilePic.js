import React from "react";

const ProfilePic = props => {
  return (
    <img
      src={props.image}
      className="img-fluid img-thumbnail d-inline mt-1 mb-1"
      alt="Your profile pic"
    />
  );
};

export default ProfilePic;
