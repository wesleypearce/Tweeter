import React from "react";
import ProfilePic from "./ProfilePic";

const FeedItem = ({ item }) => {
  return (
    <div className="bg-light border border row">
      <div className="col-lg-2">
        {/* <ProfilePic image={item.createdBy.user.photoURL} /> */}
      </div>
      <div className="col-lg-10">
        {/* {item.createdBy.user.displayName}{" "} */}
        {/* <span className="text-muted">@{item.createdBy.screen_name}</span> */}
        <p>{item.tweet}</p>
      </div>
    </div>
  );
};

export default FeedItem;
