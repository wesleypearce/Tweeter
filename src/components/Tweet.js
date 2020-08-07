import React from "react";
import ProfilePic from "./ProfilePic";
import Input from "./Input";

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
        <Input inputFunction="Tweet" />
      </div>
    </div>
  );
};

export default Tweet;
