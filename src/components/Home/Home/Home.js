import React from "react";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Services></Services>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
};

export default Home;
