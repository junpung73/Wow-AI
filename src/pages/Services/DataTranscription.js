import React from "react";
import Download from "../../components/Services/Download";
import HignQuality from "../../components/Services/public-service/HignQuality";
import TransServices from "../../components/Services/TransServices";
import topicservices from "../../__mock__/topicservices";
import transervice from "../../__mock__/transervice";
import Header from "../../components/Layouts/Header/Header";
import Footer from "../../components/Layouts/Footer";
import BuildDataset from "../../components/public/BuildDataset";
import { Container } from "../../components/Container";
const DataTranscription = () => {
  return (
    <div>
      <Header />
      <HignQuality topic={topicservices[0]} />
      <div className="contain">
        <TransServices content={transervice} />

        <Download />
      </div>
      <Container>
        <BuildDataset />
      </Container>
      <Footer />
    </div>
  );
};

export default DataTranscription;
