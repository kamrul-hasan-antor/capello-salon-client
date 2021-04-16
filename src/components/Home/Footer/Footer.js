import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="main-footer">
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-3">
            <h6 className="font-style text-white text-center">Social Media</h6>
            <p className="text-smaller pt-3">
              Our barbershop is the created for men who appreciate premium
              quality, time and flawless look.
            </p>
          </div>
          <div className="col-md-3">
            <h6 className="font-style text-white text-center">Headquarters</h6>
            <p className="text-smaller pt-3">
              962 Fifth Avenue, 3rd Floor New York, NY10022
            </p>
            <p className="text-smaller pt-3">
              Hello@dynamiclayers.net <br />
              (+123) 456 789 101
            </p>
          </div>
          <div className="col-md-3">
            <h6 className="font-style text-white text-center">Opening Hours</h6>
            <p className="text-smaller pt-3">
              Monday - Friday: 11:30am - 2:008pm
            </p>
            <p className="text-smaller">Saturday – Monday: 9am – 8pm</p>
            <p className="text-smaller">Monday - Friday: 5:30am - 11:008pm</p>
            <p className="text-smaller">Saturday - Sunday: 4:30am - 1:00pm</p>
          </div>
          <div className="col-md-3">
            <h6 className="font-style text-white text-center">
              Subscribe to our contents
            </h6>
            <input
              className="subs-form"
              type="email"
              name=""
              id=""
              placeholder=" Email Address..."
            />
            <button className="button">subscribe</button>
          </div>
        </div>
      </div>
      <div className="text-center font-style text-white pt-5">
        <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
      </div>
    </section>
  );
};

export default Footer;
