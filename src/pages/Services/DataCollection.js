import React from "react";
import Download from "../../components/Services/Download";
import HignQuality from "../../components/Services/public-service/HignQuality";
import ProjectAI from "../../components/Services/ProjectAI";
import TextCollection from "../../components/Services/TextCollection";

import topicservices from "../../__mock__/topicservices";
import sectionservices from "../../__mock__/collection";
import SpeechCollection from "../../components/Services/SpeechCollection";
import IllutrationSection from "../../components/Services/IllutrationSection";
import BuildDataset from "../../components/public/BuildDataset";
import { Container } from "../../components/Container";
import Header from "../../components/Layouts/Header/Header";
import Footer from "../../components/Layouts/Footer";

const DataCollection = () => {
  return (
    <div>
      <Header />
      <HignQuality topic={topicservices[1]} />
      <div className="contain">
        <ProjectAI />

        <TextCollection content={sectionservices[0]} />

        <SpeechCollection content={sectionservices[1]} />

        <IllutrationSection content={sectionservices[2]} />

        <IllutrationSection content={sectionservices[3]} />

        <Download />
      </div>
      <Container>
        <BuildDataset />
      </Container>
      <Footer />
    </div>
  );
};

export default DataCollection;
