import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import "./SignIn.css";
import { googleSignIn, initializeSignIn } from "./SignInMethod";

const SignIn = () => {
  initializeSignIn();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [user, setUser] = useState({
    isSignIn: false,
    userName: "",
    email: "",
    password: "",
    imgSrc: "",
    error: "",
    success: false,
  });
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  };

  const handleSignIn = () => {
    googleSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

  return (
    <div
      style={{ height: "500px" }}
      className="mt-5 pt-5 font-style text-center  justify-content-center"
    >
      <h4>Please Login.....</h4>
      <button
        className="w-25 border border-light button"
        type="submit"
        onClick={handleSignIn}
      >
        Continue With Google
      </button>
    </div>
  );
};

export default SignIn;
