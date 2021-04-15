import React from "react";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Services></Services>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
};

export default Home;
