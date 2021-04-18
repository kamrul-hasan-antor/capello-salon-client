import React, { useEffect, useState } from "react";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  console.log(orders);
  useEffect(() => {
    const url = "http://localhost:5000/booking";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div className="font-style bg-color mt-4 p-4">
      <div className="row text-center pt-2 mt-2 ml-2 bg-white text-smaller">
        <div className="col-md-3 text-left ">
          <h5>Name</h5>
        </div>
        <div className="col-md-4 text-left ">
          <h5>Email ID</h5>
        </div>
        <div className="col-md-2 ">
          <h5>Service</h5>
        </div>
        <div className="col-md-2">
          <h5>Pay With</h5>
        </div>
      </div>
      {orders.map((data) => {
        return (
          <div className="mt-3 pl-2">
            <div className="row mt-1  ">
              <div className="col-md-3">
                <h6 className="">{data.name}</h6>
              </div>
              <div className="col-lg-4">
                <h6>{data.email}</h6>
              </div>
              <div className="col-md-2 text-center">
                <h6>{data.title}</h6>
              </div>
              <div className="col-md-2 text-center">
                <h6>Credit Card</h6>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderList;
