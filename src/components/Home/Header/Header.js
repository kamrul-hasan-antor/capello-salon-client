import React from "react";
import "./Header.css";
import imgOne from "../../../images/background.jpg";
import imgTwo from "../../../images/background2.jpg";
import imgThree from "../../../images/side2.jpg";
import { Carousel } from "react-bootstrap";
const Header = () => {
  return (
    <Carousel>
      <Carousel.Item className="carousel-item">
        <img className="d-block images" src={imgOne} alt="First slide" />
        <Carousel.Caption className="caption text-left">
          <div className="row font-style">
            <div className="col-12 col-md-8 mt-md-5 ">
              <h5>Classic Hair Style & Shaves</h5>
              <h1>
                Our hair style <br /> enhances your smile.
              </h1>
              <p>
                Our barbershop is the territory created purely for males who
                appreciate premium quality, time and flawless look.
              </p>
              <button className="button">Make appointment</button>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block images" src={imgTwo} alt="Second slide" />
        <Carousel.Caption className="caption text-left">
          <div className="row font-style">
            <div className="col-12 col-md-8 mt-md-5">
              <h5>Its Not Just a Haircut, Its an Experience</h5>
              <h1>Being a barber is about taking care of the people.</h1>
              <p>
                Our barbershop is the territory created purely for males who
                appreciate premium quality, time and flawless look.
              </p>
              <button className="button">Make appointment</button>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block images" src={imgThree} alt="Third slide" />

        <Carousel.Caption className="caption text-left ">
          <div className="row font-style">
            <div className="col-12 col-md-8 mt-md-5">
              <h5>Its Not Just a Haircut, Its an Experience</h5>
              <h1>
                Where mens want <br /> to look their very best.
              </h1>
              <p>
                Our barbershop is the territory created purely for males who
                appreciate premium quality, time and flawless look.
              </p>
              <button className="button">Make appointment</button>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Header;
