import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
const ManageServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const url = "https://warm-spire-93290.herokuapp.com/services";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const handleClick = (id) => {
    const url = `https://warm-spire-93290.herokuapp.com/delete/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log("deleted"));
  };

  return (
    <section className="row ">
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-10 bg-color font-style mt-3">
        <div className="p-2">
          <div className="row text-center bg-white mt-2 pt-2">
            <div className="col-md-2 text-left">
              <h5>Service Name</h5>
            </div>
            <div className="col-md-2">
              <h5>Price</h5>
            </div>
            <div className="col-md-5">
              <h5>Description</h5>
            </div>
            <div className="col-md-2">
              <h5>Action</h5>
            </div>
          </div>
          {services.map((service) => {
            return (
              <div className="mt-3">
                <div className="row text-center mt-1 text-center">
                  <div className="col-md-2">
                    <h5 className="">{service.title}</h5>
                  </div>

                  <div className="col-md-2">
                    <h6>${service.price}</h6>
                  </div>
                  <div className="col-md-5">
                    <p>${service.description}</p>
                  </div>
                  <div className="col-md-2">
                    <button
                      className="button"
                      onClick={() => handleClick(`${service._id}`)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ManageServices;
