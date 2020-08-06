import React from "react";
import ProfilePic from "./ProfilePic";

const Tweet = () => {
  return (
    <div className="row border bg-light">
      <div className="col-lg-2">
        <ProfilePic
          image={
            "https://i2.wp.com/geekvibesnation.com/wp-content/uploads/2018/12/Izuku_Midoriya.png?fit=982%2C720&ssl=1"
          }
        />
      </div>
      <div className="col-lg-10 mt-auto mb-1">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            id="tweet"
            aria-describedby="tweet"
          />
          <div className="input-group-append">
            <button className="btn btn-light">Tweet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
