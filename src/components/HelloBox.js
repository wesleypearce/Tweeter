import React from "react";
import Auth from "./Auth";

const HelloBox = () => {
  return (
    <div className="col-lg-6 text-white mx-auto p-5">
      <h1 className="display-1 text-center">Hello!</h1>

      <div className="col-lg-6 col-md-5 mx-auto mt-3 mb-3">
        <Auth />
      </div>

      <p className="text-center lead">
        Come see what everyone is talking about!
      </p>
      <p className="text-center mt-4">
        EzTweeter is a fake Twitter. When you log in, you will see your profile
        but all tweets you make in the EzTweeter app are only displayed here.
        They are not being updated on Twitter.com.
      </p>
    </div>
  );
};

export default HelloBox;
