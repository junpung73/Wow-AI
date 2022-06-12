import React from "react";
import AboutDescrip from "../../../components/AboutDescrip";
import { Topic } from "./style";
import Header from "../../../components/Layouts/Header/Header";
import Footer from "../../../components/Layouts/Footer";

const AboutUs = () => {
  return (
    <>
      <Header />
      <Topic>wow AI LLC</Topic>
      <div className="container">
        <AboutDescrip />
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
