import React, { useState, useEffect } from "react";
import Tweet from "./Tweet";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Profile from "./Profile";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState({ screen_name: "Undefined" });
  useEffect(() => {
    axios
      .get("http://localhost:5000/", { withCredentials: true })
      .then(response => {
        setUser(response.data._json);
      })
      .catch(e => console.error(e));
  }, []);

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
              profile_banner_url_https={user.profile_banner_url_https}
              profile_image_url_https={user.profile_image_url_https}
            />
          </div>
        </div>
        <div className="col-lg-6 border border bg-light order-lg-2">
          <div className="mb-2 mt-2">
            <Tweet />
          </div>
          <Feed user={user} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
