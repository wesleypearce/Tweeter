import React from "react";
import TwitterLogin from "react-twitter-login";
import { consumerSecret, consumerKey } from "../../keys";

const Auth = ({ setUser, setAuthError }) => {
  const handleAuth = (e, data) => {
    if (e) setAuthError(e);
    setUser(data);
  };

  return (
    <div>
      <TwitterLogin
        authCallback={handleAuth}
        consumerKey={consumerKey}
        consumerSecret={consumerSecret}
        callbackUrl="http://localhost:1234/"
        className="mx-auto"
      />
    </div>
  );
};

export default Auth;
