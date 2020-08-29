import React from "react";
import ProfilePic from "./ProfilePic";
import Input from "./Input";
import axios from "axios";

const Tweet = ({ user, tweet, setTweet }) => {
  const postTweet = tweet => {
    axios
      .post(
        "http://api.eztweeter.com/tweet",
        { createdBy: user._id, tweet },
        { withCredentials: true }
      )
      .then(() => console.log({ createdBy: user._id, tweet }))
      .catch(e => console.error(e));
  };

  return (
    <div className="row border bg-light">
      <div className="col-lg-2">
        <ProfilePic image={user.profile_image_url_https} />
      </div>
      <div className="col-lg-10 mt-auto mb-1">
        <Input setInput={setTweet} postInput={postTweet} input={tweet} />
      </div>
    </div>
  );
};

export default Tweet;
