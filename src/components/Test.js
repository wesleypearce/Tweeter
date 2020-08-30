import React, { useEffect, useState } from "react";
import axios from "axios";

const Test = () => {
  const [user, setUser] = useState({ username: "Undefined" });
  useEffect(() => {
    axios
      .get("https://api.eztweeter.com/", { withCredentials: true })
      .then(response => {
        setUser(response.data);
      })
      .catch(e => console.error(e));
  }, []);
  return (
    <div className="text-white">
      <h1>Test</h1>
      <p>This is a test for {user.username}</p>
    </div>
  );
};

export default Test;
