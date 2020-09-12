import React, { useState, useEffect } from "react";
import Tweet from "./Tweet";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Profile from "./Profile";
import axios from "axios";
import { firestore } from "../firebase";
import { collectIdsAndDocs } from "../utilities";

const Dashboard = ({ user, setUser }) => {
  const [feed, setFeed] = useState([]);
  const [tweet, setTweet] = useState(null);

  const getFeed = async () => {
    const snapshot = await firestore.collection("tweets").get();

    const feed = snapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data };
    });
    setFeed(feed);
  };

  useEffect(() => {
    getFeed();
  });

  if (user == null) {
    return <div className="text-white">loading...</div>;
  } else {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 border border order-lg-1 order-xs-2 text-white">
            <div className="d-lg-block">
              <Profile
                displayName={user.displayName}
                photoURL={user.photoURL}
                feed={feed}
                setFeed={setFeed}
                setTweet={setTweet}
              />
            </div>
          </div>
          <div className="col-lg-9 border border bg-light order-lg-2 order-xs-1">
            <div className="mb-2 mt-2">
              <Tweet user={user} tweet={tweet} setTweet={setTweet} />
            </div>
            <Feed feed={feed} />
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
