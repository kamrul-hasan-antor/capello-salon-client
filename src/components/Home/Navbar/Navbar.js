import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./Navbar.css";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  console.log(loggedInUser);

  useEffect(() => {
    const url = "https://warm-spire-93290.herokuapp.com/isAdmin";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);

  return (
    <div>
      <nav class="navbar navbar-expand-lg mainNav ">
        <div class="container-fluid">
          <a class="navbar-brand font-style" href="/">
            <h3>Cappiello Salon</h3>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-auto font-style">
              <li class="nav-item">
                <Link className="mr-auto nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className="mr-auto nav-link" to="/">
                  Services
                </Link>
              </li>

              <li class="nav-item">
                <Link className="mr-auto nav-link" to="/">
                  About us
                </Link>
              </li>
              <li>
                <Link className="mr-auto nav-link" to="/">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="mr-auto nav-link" to="/review">
                  Reviews
                </Link>
              </li>
              <li>
                <Link className="mr-auto nav-link" to="/">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link className="mr-auto nav-link" to="/signIn">
                  Login
                </Link>
              </li>
              {isAdmin && (
                <div>
                  <li>
                    <Link className="mr-auto nav-link" to="/admin/orderList">
                      Admin
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
