import React from "react";
import "react-slideshow-image/dist/styles.css";
import AboutUs from "../components/home/AboutUs";
import Management from "../components/home/Management";
import Services from "../components/home/Services";
import SlideHome from "../components/home/SlideHome";
import Solution from "../components/home/Solution";
import WhyChoose from "../components/home/WhyChoose";
import Header from "../components/Layouts/Header/Header";
import Footer from "../components/Layouts/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <SlideHome />
      <div className="contain">
        <AboutUs />

        <Services />

        <WhyChoose />

        <Solution />

        <Management />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
