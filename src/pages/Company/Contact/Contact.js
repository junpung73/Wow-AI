import React from "react";
import Header from "../../../components/Layouts/Header/Header";
import Footer from "../../../components/Layouts/Footer/Footer";

import BuildDataset from "../../../components/public/BuildDataset";
import { Container } from "../../../components/Container";

const Contact = () => {
  return (
    <>
      <Header />
      {/* <Dataset /> */}
      <Container>
        <BuildDataset />
      </Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          height: "1vh",
        }}
      >
        <h3 style={{ fontWeight: "500" }}>
          Contact Details <br />
          Address: 19W 34TH ST STE 1018, NY, USA <br />
          Email: contact@wow-ai.com
        </h3>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
