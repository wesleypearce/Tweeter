import React from "react";
import ProfilePic from "./ProfilePic";

const FeedItem = ({ item }) => {
  return (
    <div className="bg-light border border row">
      <div className="col-lg-2">
        <ProfilePic image={item.user.profileImg} />
      </div>
      <div className="col-lg-10">
        {item.user.name}{" "}
        <span className="text-muted">@{item.user.twitterName}</span>
        <p>{item.text}</p>
      </div>
    </div>
  );
};

export default FeedItem;
