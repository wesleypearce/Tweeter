import React from "react";

const HelloBox = () => {
  return (
    <div className="col-lg-6 text-white mx-auto p-5">
      <h1 className="display-1 text-center">Hello!</h1>

      <div className="col-lg-6 col-md-5 mx-auto mt-3 mb-3">
        <button className="btn-block btn-light mx-auto">Sign Up</button>
        <button className="btn-block btn-light mx-auto">Log In</button>
      </div>

      <p className="text-center lead">
        Come see what everyone is talking about!
      </p>
    </div>
  );
};

export default HelloBox;
