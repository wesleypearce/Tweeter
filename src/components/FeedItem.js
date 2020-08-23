import React from "react";
import ProfilePic from "./ProfilePic";

const FeedItem = ({ item }) => {
  console.log(item.createdAt);
  return (
    <div className="bg-light border border row">
      <div className="col-lg-2">
        <ProfilePic image={item.createdBy.profile_image_url_https} />
      </div>
      <div className="col-lg-10">
        {item.createdBy.name}{" "}
        <span className="text-muted">@{item.createdBy.screen_name}</span>
        <p>{item.tweet}</p>
      </div>
    </div>
  );
};

export default FeedItem;
