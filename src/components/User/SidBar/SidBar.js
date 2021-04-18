import React from "react";
import { Link } from "react-router-dom";
import "./SidBar.css";
const SidBar = () => {
  return (
    <div className="sidebar d-flex flex-colum justify-content-center pt-5 font-style">
      <ul>
        <li className="lists">
          <Link className="links sub-heading" to="/book">
            Book
          </Link>
        </li>
        <li className="lists">
          <Link className="links sub-heading" to="/bookingList">
            Booking List
          </Link>
        </li>
        <li className="lists">
          <Link className="links sub-heading" to="/review">
            Review
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidBar;
