import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-colum justify-content-center pt-5 font-style">
      <ul>
        <li className="lists">
          <Link className="links sub-heading" to="/admin/services">
            Services List
          </Link>
        </li>
        <li className="lists">
          <Link className="links sub-heading" to="/admin/addServices">
            Add Services
          </Link>
        </li>
        <li className="lists">
          <Link className="links sub-heading" to="/admin/makeAdmin">
            Make Admin
          </Link>
        </li>
        <li className="lists">
          <Link className="links sub-heading" to="/admin/manageServices">
            Manage Services
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
