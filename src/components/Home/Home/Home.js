import React from "react";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Portfolio from "../Portfolio/Portfolio";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Services></Services>
      <Portfolio></Portfolio>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
