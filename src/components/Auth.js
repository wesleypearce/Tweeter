import React from "react";
import { signInWithTwitter } from "../firebase";
import { navigate } from "@reach/router";
import { createUser } from "../firebase";

const Auth = ({ setUser }) => {
  const handleClick = async () => {
    const data = await signInWithTwitter();
    // const user = await createUser(data.user);

    const snapshot = await createUser(data.user);
    const id = snapshot.id;
    const userData = snapshot.data();
    const user = { id, ...userData };
    // const user = await getUser(snapshot);
    console.log(`in auth user is ${{ user }}`);
    setUser(user);
    navigate("/dashboard");
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
    </div>
  );
};

export default Auth;
