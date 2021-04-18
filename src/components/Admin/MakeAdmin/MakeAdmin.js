import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const MakeAdmin = () => {
  const [admin, setAdmin] = useState({});
  const handleBlur = (e) => {
    const newAdmin = { ...admin };
    newAdmin[e.target.name] = e.target.value;
    setAdmin(newAdmin);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "https://warm-spire-93290.herokuapp.com/addAdmin";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(admin),
    }).then((res) => console.log("server side response", res));
  };
  return (
    <div className="row bg-color font-style">
      <div className="col-md-2 col-sm-6 col-12">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-10 mt-3 ">
        <div class="login-box">
          <form onSubmit={handleSubmit}>
            <h1 className="mb-2">Make Admin</h1>
            <label>Admin User Email</label>
            <div class="user-box">
              <input
                className="form-control w-50"
                type="text"
                onBlur={handleBlur}
                name="email"
                required=""
              />
            </div>
            <input class="button mt-3" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
