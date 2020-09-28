import React from "react";
import ProfilePic from "./ProfilePic";
import Input from "./Input";
import { firestore } from "../firebase";
// import { collectIdsAndDocs } from "../utilities";

const Tweet = ({ user, tweet, feed, setFeed, setTweet }) => {
  const postTweet = async tweet => {
    const docRef = await firestore
      .collection("tweets")
      .add({ createdBy: user, tweet });
    const doc = await docRef.get();
    const newTweet = { id: doc.id, ...doc.data() };

    setFeed([newTweet, ...feed]);
  };

  return (
    <div className="bg-light d-flex">
      <div className="mr-3">
        <ProfilePic image={user.photoURL} />
      </div>
      <div className="w-100">
        <Input setInput={setTweet} postInput={postTweet} input={tweet} />
      </div>
    </div>
  );
};

export default Tweet;
