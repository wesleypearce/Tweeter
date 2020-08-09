import React, { useEffect } from "react";
import FeedItem from "./FeedItem";
import axios from "axios";

const testFeed = [
  {
    text: `I can't believe that pigs are flying!`,
    createdAt: Date.now(),
    user: {
      name: "Bakugo",
      twitterName: "Bakugo",
      profileImg:
        "https://pm1.narvii.com/7299/82cafc94bfb2bcf1d7796ee1da8107ce5cd8bd9br1-1077-1077v2_hq.jpg"
    }
  },
  {
    text: `Time to put everyone to sleep`,
    createdAt: Date.now(),
    user: {
      name: "Midnight",
      twitterName: "Midnight",
      profileImg:
        "https://vignette.wikia.nocookie.net/bokunoheroacademia/images/5/52/Midnight_Anime_Profile.png/revision/latest/window-crop/width/200/x-offset/0/y-offset/0/window-width/383/window-height/383?cb=20171015163508"
    }
  },
  {
    text: `I have a splitting migraine`,
    createdAt: Date.now(),
    user: {
      name: "Eraser Head",
      twitterName: "EraserHead",
      profileImg:
        "https://api.personality-database.com/profile_images/6601.png?credit_id=17048"
    }
  }
];

const Feed = ({ user }) => {
  useEffect(() => {
    if (user !== null) {
      axios
        .get(
          `https://api.twitter.com/1.1/statuses/lookup.json?id=${user.user_id}`
        )
        .then(data => console.log(data))
        .catch(e => console.error(e));
    }
  });
  const renderFeed = () => {
    return testFeed.map(item => {
      return <FeedItem key={item.text} item={item} />;
    });
  };
  return <div className="border">{renderFeed()}</div>;
};

export default Feed;
