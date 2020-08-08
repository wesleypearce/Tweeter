import React from "react";
import TwitterLogin from "react-twitter-login";
import { consumerSecret, consumerKey } from "../../keys";

const Auth = () => {
  const handleAuth = (e, data) => {
    console.log(e, data);
  };

  return (
    <div>
      <TwitterLogin
        authCallback={handleAuth}
        consumerKey={consumerKey}
        consumerSecret={consumerSecret}
        callbackUrl="http://localhost:1234/callback"
        className="mx-auto"
      />
    </div>
  );
};

export default Auth;
