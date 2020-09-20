import React from "react";
import ProfilePic from "./ProfilePic";

const FeedItem = ({ tweet }) => {
  return (
    <div className="bg-light border border row">
      <div className="col-lg-2">
        <ProfilePic image={tweet.createdBy.photoURL} />
      </div>
      <div className="col-lg-10">
        {tweet.createdBy.displayName}{" "}
        {/* <span className="text-muted">@{item.createdBy.screen_name}</span> */}
        <p>{tweet.tweet}</p>
      </div>
    </div>
  );
};

export default FeedItem;
