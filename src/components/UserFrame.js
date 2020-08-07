import React from "react";
import Tweet from "./Tweet";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import SearchBox from "./SearchBox";
import Profile from "./Profile";

const UserFrame = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 border border">
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
          <SearchBox />
        </div>
        <div className="col-lg-6 border border bg-light">
          <div className="mb-2 mt-2">
            <Tweet />
          </div>
          <Feed />
        </div>
        <div className="col-lg-3 border border">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default UserFrame;
