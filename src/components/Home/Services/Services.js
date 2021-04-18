import React, { useEffect, useState } from "react";
import AllServices from "../AllServices/AllServices";
import "./Services.css";

const Services = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    const url = "https://warm-spire-93290.herokuapp.com/services";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div className="main-section">
      <h5 className="font-style sub-heading text-center pt-4">
        Trend Salon & Spa
      </h5>
      <h2 className="font-style heading-text text-center">Our Services</h2>

      {service.map((data) => (
        <AllServices data={data}></AllServices>
      ))}
    </div>
  );
};

export default Services;
