import React from "react";
import ProfilePic from "./ProfilePic";

const FeedItem = ({ tweet }) => {
  return (
    <div className="bg-light d-flex">
      <div className="mr-3">
        <ProfilePic image={tweet.createdBy.photoURL} />
      </div>
      <div>
        {tweet.createdBy.displayName}{" "}
        {/* <span className="text-muted">@{item.createdBy.screen_name}</span> */}
        <p>{tweet.tweet}</p>
      </div>
    </div>
  );
};

export default FeedItem;
