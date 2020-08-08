import React from "react";
import TwitterLogin from "react-twitter-login";
import { consumerSecret, consumerKey } from "../../keys";

const Auth = () => {
  const handleAuth = (e, data) => {
    console.log(e, data);
  };

  return (
    <TwitterLogin
      authCallback={handleAuth}
      consumerKey={consumerKey}
      consumerSecret={consumerSecret}
      callbackUrl="http://localhost:1234/callback"
    />
  );
};

export default Auth;
