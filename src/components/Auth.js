import React from "react";
import { signInWithTwitter } from "../firebase";
import { navigate } from "@reach/router";
import { firestore } from "../firebase";

const Auth = ({ user, setUser }) => {
  const handleClick = async () => {
    const data = await signInWithTwitter();

    console.log(data.user);

    firestore
      .collection("users")
      .where("email", "==", data.user.email)
      .get()
      .then(querySnapshot => {
        if (!querySnapshot.empty) {
          console.log("Document data: ");
          querySnapshot.forEach(doc => console.log(doc.data()));
        } else {
          firestore
            .collection("users")
            .add({
              displayName: data.user.displayName,
              email: data.user.email,
              photoURL: data.user.photoURL
            })
            .then(function(docRef) {
              console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
              console.error("Error adding document: ", error);
            });
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });

    setUser(data.user);
    navigate("/dashboard");
  };

  console.log(user);

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
