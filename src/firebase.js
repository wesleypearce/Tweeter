import firebase from "@firebase/app";
import "@firebase/firestore";
import "@firebase/auth";
import { registerFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO2N5KejAY4lyq6QU-w0kiPXgBqnCwp30",
  authDomain: "eztweeter-e0b9c.firebaseapp.com",
  databaseURL: "https://eztweeter-e0b9c.firebaseio.com",
  projectId: "eztweeter-e0b9c",
  storageBucket: "eztweeter-e0b9c.appspot.com",
  messagingSenderId: "253955459714",
  appId: "1:253955459714:web:2b8dea8f83f67ebdef829b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const provider = new firebase.auth.TwitterAuthProvider();

export const signInWithTwitter = () =>
  auth
    .signInWithPopup(provider)
    .then(function(result) {
      // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
      // You can use these server side with your app's credentials to access the Twitter API.
      const token = result.credential.accessToken;
      const secret = result.credential.secret;
      // The signed-in user info.
      const user = result.user;

      return { user, secret, token };
    })
    .catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;

      console.log({ errorCode, errorMessage, email, credential });
    });

export const getUser = snapshot => {
  return new Promise(async (resolve, reject) => {
    console.log({ snapshot });
    const user = await snapshot.data();
    // .then(doc => {
    //   if (doc.exists) return doc;
    //   else return undefined;
    // });
    if (user != undefined) resolve(user);
    else reject(Error("It broke"));
  });
};

export const createUser = user => {
  return new Promise(async (resolve, reject) => {
    const ref = await firestore
      .collection("users")
      .where("email", "==", user.email)
      .get()
      .then(async querySnapshot => {
        if (querySnapshot.empty) {
          const ref = firestore.collection("users").doc();

          ref
            .set({
              displayName: user.displayName,
              email: user.email,
              photoURL: user.photoURL
            })
            .catch(function(error) {
              console.error("Error adding document: ", error);
            });

          return ref;
        } else {
          const querySnapshot = await firestore
            .collection("users")
            .where("email", "==", user.email)
            .get()
            .then(querySnapshot => querySnapshot);
          console.log(`querySnapshot is ${querySnapshot.docs}`);
          const ref = querySnapshot.docs[0];
          console.log(typeof ref);
          return ref;
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
    if (ref != undefined) {
      resolve(ref);
    } else {
      reject(Error("It broke"));
    }
  });
};

export const firestore = firebase.firestore();

export default firebase;
