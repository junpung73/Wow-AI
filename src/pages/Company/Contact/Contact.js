import React from "react";
import Header from "../../../components/Layouts/Header/Header";
import Footer from "../../../components/Layouts/Footer";

import BuildDataset from "../../../components/public/BuildDataset";

const Contact = () => {
  return (
    <>
      <Header />
      {/* <Dataset /> */}
      <BuildDataset />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          height: "20vh",
        }}
      >
        <h5 className="title-description">
          Contact Details <br />
          Address: 19W 34TH ST STE 1018, NY, USA <br />
          Email: contact@wow-ai.com
        </h5>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
