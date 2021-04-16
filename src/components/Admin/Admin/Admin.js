import React from "react";
import ServiceList from "../ServiceList/ServiceList";
import Sidebar from "../Sidebar/Sidebar";
const Admin = () => {
  return (
    <section>
      <div className="row">
        <div className="col md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10">
          <ServiceList></ServiceList>
        </div>
      </div>
    </section>
  );
};

export default Admin;
