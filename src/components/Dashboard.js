import React, { useState, useEffect } from "react";
import Tweet from "./Tweet";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Profile from "./Profile";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [feed, setFeed] = useState([]);
  const [tweet, setTweet] = useState(null);

  const getFeed = () => {
    axios
      .get("http://localhost:5000/tweet")
      .then(response => {
        setFeed(response.data);
      })
      .catch(e => console.error(e));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/", { withCredentials: true })
      .then(response => {
        setUser(response.data);
        getFeed();
      })
      .catch(e => console.error(e));
  }, [tweet]);

  if (user == null) {
    return <div className="text-white">loading...</div>;
  } else {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 border border order-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-3 border border order-lg-1 text-white">
            <div className="d-none d-lg-block">
              <Profile
                name={user.name}
                screen_name={user.screen_name}
                url={user.url}
                description={user.description}
                followers_count={user.followers_count}
                profile_image_url_https={user.profile_image_url_https}
              />
            </div>
          </div>
          <div className="col-lg-6 border border bg-light order-lg-2">
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
