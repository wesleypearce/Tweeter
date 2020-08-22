import React, { useState } from "react";
import ProfilePic from "./ProfilePic";
import Input from "./Input";
import axios from "axios";

const Tweet = ({ user }) => {
  const [tweet, setTweet] = useState(null);

  const postTweet = () => {
    axios
      .post("http://localhost:5000/tweet", { createdBy: user._id, tweet })
      .then(() => console.log("Tweet posted!"))
      .catch(e => console.error(e));
  };

  return (
    <div className="row border bg-light">
      <div className="col-lg-2">
        <ProfilePic image={user.profile_image_url_https} />
      </div>
      <div className="col-lg-10 mt-auto mb-1">
        <Input setInput={setTweet} postInput={postTweet} />
      </div>
    </div>
  );
};

export default Tweet;
