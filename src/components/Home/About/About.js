import React from "react";
import image from "../../../images/side3.jpg";
import beard from "../../../images/beard.png";
const About = () => {
  return (
    <main
      style={({ height: "620px" }, { width: "100%" })}
      className="mt-5 mb-5"
    >
      <div className="row">
        <div className="col-md-5 mt-5 text-center">
          <h6 className="font-style sub-heading">Introducing</h6>
          <h1 className="font-style heading-text">
            The Barber Shop <br />
            Science 1991
          </h1>
          <img className="img-fluid w-75" src={beard} alt="" />
          <p className="font-style text-small">
            Barber is a person whose occupation is mainly to cut dress groom
            style and shave men's and boys' hair. A barber's place of work is
            known as a "barbershop" or a "barber's". Barbershops are also places
            of social interaction and public discourse. In some instances,
            barbershops are also public forums.
          </p>
          <button className="button">more about us</button>
        </div>
        <div className="col-md-7 mt-5">
          <img
            style={{ height: "90%" }}
            src={image}
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
    </main>
  );
};

export default About;
