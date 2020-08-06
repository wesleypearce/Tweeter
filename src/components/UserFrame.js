import React from "react";
import Tweet from "./Tweet";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import SearchBox from "./SearchBox";

const UserFrame = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 border border-danger">
          <SearchBox />
        </div>
        <div className="col-lg-6 border border-danger bg-light">
          <div className="mb-2 mt-2">
            <Tweet />
          </div>
          <Feed />
        </div>
        <div className="col-lg-3 border border-danger">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default UserFrame;
