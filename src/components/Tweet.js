import React from "react";
import ProfilePic from "./ProfilePic";
import Input from "./Input";

const Tweet = ({ user }) => {
  return (
    <div className="row border bg-light">
      <div className="col-lg-2">
        <ProfilePic image={user.profile_image_url_https} />
      </div>
      <div className="col-lg-10 mt-auto mb-1">
        <Input inputFunction="Tweet" />
      </div>
    </div>
  );
};

export default Tweet;
