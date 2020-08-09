import React from "react";
import HelloBox from "./HelloBox";

const Home = ({ setUser, setAuthError }) => {
  return (
    <div>
      <HelloBox setUser={setUser} setAuthError={setAuthError} />
    </div>
  );
};

export default Home;
