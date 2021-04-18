import React from "react";
import OrderList from "../OrderList/OrderList";

import Sidebar from "../Sidebar/Sidebar";
const Admin = () => {
  return (
    <section>
      <div className="row">
        <div className="col md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10">
          <OrderList></OrderList>
        </div>
      </div>
    </section>
  );
};

export default Admin;
