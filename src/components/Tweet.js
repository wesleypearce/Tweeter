import React from "react";
import ProfilePic from "./ProfilePic";
import Input from "./Input";
import firestore from "../firebase";
import { collectIdsAndDocs } from "../utilities";

const Tweet = ({ user, tweet, feed, setFeed, setTweet }) => {
  const postTweet = async tweet => {
    const docRef = await firestore.collection("tweets").add(tweet);
    const doc = await docRef.get();

    const newTweet = collectIdsAndDocs(doc);
    setFeed([newTweet, ...feed]);
  };

  return (
    <div className="row border bg-light">
      <div className="col-lg-2">
        <ProfilePic image={user.photoURL} />
      </div>
      <div className="col-lg-10 mt-auto mb-1">
        <Input setInput={setTweet} postInput={postTweet} input={tweet} />
      </div>
    </div>
  );
};

export default Tweet;
