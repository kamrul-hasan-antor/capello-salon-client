import React from "react";
import "./Portfolio.css";
import imgOne from "../../../images/work (1).jpg";
import imgTwo from "../../../images/work (2).jpg";
import imgThree from "../../../images/work (3).jpg";
import imgFour from "../../../images/work (4).jpg";
const Portfolio = () => {
  return (
    <section className="font-style">
      <h6 className="text-center sub-heading mt-5">From Portfolio </h6>
      <h2 className="text-center heading-text">Our Recent Works</h2>
      <div class="row row-cols-1 row-cols-md-4 g-4 p-5">
        <div class="col">
          <div class="card align-items-center mt-2 shadow">
            <img src={imgOne} class="img-fluid" alt="..." />
            <div class="card-body">
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam eum
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card align-items-center mt-2 shadow">
            <img src={imgTwo} class="img-fluid" alt="..." />
            <div class="card-body">
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam eum
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card align-items-center mt-2 shadow">
            <img src={imgThree} class="img-fluid" alt="..." />
            <div class="card-body">
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam eum
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card align-items-center mt-2 shadow">
            <img src={imgFour} class="img-fluid" alt="..." />
            <div class="card-body">
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam eum
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
