import React from "react";
import FeedItem from "./FeedItem";

const Feed = ({ feed }) => {
  const renderFeed = () => {
    return feed.map(item => {
      return <FeedItem key={item.id} item={item} />;
    });
  };
  return <div className="border">{renderFeed()}</div>;
};

export default Feed;
