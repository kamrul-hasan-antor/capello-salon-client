import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
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
                <Link className="mr-auto nav-link" to="/">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link className="mr-auto nav-link" to="/">
                  Appointment
                </Link>
              </li>
              <li>
                <Link className="mr-auto nav-link" to="/">
                  Login
                </Link>
              </li>
              <li>
                <Link className="mr-auto nav-link" to="/admin/services">
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
