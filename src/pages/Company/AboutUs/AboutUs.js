import React from "react";
import AboutDescrip from "../../../components/AboutDescrip";
import { Topic } from "./style";
import Header from "../../../components/Layouts/Header/Header";
import Footer from "../../../components/Layouts/Footer/Footer";
import { Container } from "../../../components/Container";

const AboutUs = () => {
  return (
    <>
      <Header />
      <Topic>wow AI LLC</Topic>
      <Container style={{ scrollSnapAlign: "start" }}>
        <AboutDescrip />
      </Container>
      <Footer />
    </>
  );
};

export default AboutUs;
