import React, { useEffect } from "react";
import HelloBox from "./HelloBox";
import { firestore } from "../firebase";
import regeneratorRuntime from "regenerator-runtime";

const Home = ({ user, setUser }) => {
  useEffect(() => {
    getSnapshot();
  });

  async function getSnapshot() {
    const snapshot = await firestore.collection("tweets").get();

    snapshot.forEach(doc => {
      const id = doc.id;
      const data = doc.data();

      console.log({ id, data });
    });
  }

  return (
    <div>
      <HelloBox user={user} setUser={setUser} />
    </div>
  );
};

export default Home;
