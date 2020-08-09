import React, { useState, useEffect } from "react";
import Tweet from "./Tweet";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Profile from "./Profile";

const Dashboard = props => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const { user } = props.location.state;
    if (user !== undefined) {
      setUser(user);
    }
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 border border order-lg-3">
          <Sidebar />
        </div>
        <div className="col-lg-3 border border order-lg-1 text-white">
          <div className="d-none d-lg-block">
            <Profile
              name="Midoriya"
              screen_name="Midoriya"
              url="https://www.wesleypearce.com"
              description="All Might's successor!"
              followers_count={27}
              profile_banner_url_https={null}
              profile_image_url_https={
                "https://i2.wp.com/geekvibesnation.com/wp-content/uploads/2018/12/Izuku_Midoriya.png?fit=982%2C720&ssl=1"
              }
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
