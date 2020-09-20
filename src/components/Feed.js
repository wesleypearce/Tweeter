import React from "react";
import FeedItem from "./FeedItem";

const Feed = ({ feed }) => {
  const renderFeed = () => {
    return feed.map(tweet => {
      return <FeedItem key={tweet.id} tweet={tweet} />;
    });
  };
  return <div className="border">{renderFeed()}</div>;
};

export default Feed;
