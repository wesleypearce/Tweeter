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
      .get("http://api.eztweeter.com/tweet", { withCredentials: true })
      .then(response => {
        setFeed(response.data);
      })
      .catch(e => console.error(e));
  };

  useEffect(() => {
    axios
      .get("http://api.eztweeter.com/user", { withCredentials: true })
      .then(response => {
        setUser(response.data);
      })
      .catch(e => console.error(e));
  }, []);

  useEffect(() => {
    getFeed();
  }, [tweet]);

  if (user == null) {
    return <div className="text-white">loading...</div>;
  } else {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 border border order-lg-1 order-xs-2 text-white">
            <div className="d-lg-block">
              <Profile
                name={user.name}
                screen_name={user.screen_name}
                url={user.url}
                description={user.description}
                followers_count={user.followers_count}
                profile_image_url_https={user.profile_image_url_https}
                setUser={setUser}
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
