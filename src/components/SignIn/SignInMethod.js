import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeSignIn = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
};

export const googleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((res) => {
      const { displayName, email, photoURL } = res.user;
      const signedInUser = {
        isSignIn: true,
        name: displayName,
        email: email,
        imgSrc: photoURL,
        success: true,
      };
      // setUserToken();
      return signedInUser;
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log(errorCode, errorMessage);
    });
};
// const setUserToken = () => {
//   firebase
//     .auth()
//     .currentUser.getIdToken(/* forceRefresh */ true)
//     .then(function (idToken) {
//       sessionStorage.setItem("token", idToken);
//     })
//     .catch(function (error) {});
// };
