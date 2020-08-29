import React from "react";

const Auth = () => {
  const handleClick = () => {
    window.open("http://api.eztweeter.com/auth/twitter", "_self");
  };

  return (
    <div className="text-center">
      <input
        type="image"
        alt="Twitter Login"
        onClick={handleClick}
        className="mx-auto"
        src="https://cdn.cms-twdigitalassets.com/content/dam/developer-twitter/auth-docs/sign-in-with-twitter-gray.png.img.fullhd.medium.png"
      />
      {/* <button
        className="btn-block rounded btn-light mx-auto"
        onClick={handleClick}
      >
        Log In with Twitter
      </button> */}
    </div>
  );
};

export default Auth;
