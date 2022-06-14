import React from "react";
import Download from "../../components/Services/Download";
import ImgVdSection from "../../components/annotation/ImgVdSection";
import HignQuality from "../../components/Services/public-service/HignQuality";
import topicservices from "../../__mock__/topicservices";
import annotation from "../../__mock__/annotation";
import TextAudioSection from "../../components/annotation/TextAudioSection";
import Header from "../../components/Layouts/Header/Header";
import Footer from "../../components/Layouts/Footer";
import BuildDataset from "../../components/public/BuildDataset";
import { Container } from "../../components/Container";

const DataAnnotation = () => {
  return (
    <div>
      <Header />
      <HignQuality topic={topicservices[2]} />
      <div className="contain">
        <ImgVdSection content={annotation[0]} />

        <TextAudioSection content={annotation[1]} />

        <TextAudioSection content={annotation[2]} />

        <ImgVdSection content={annotation[3]} />

        <Download />
      </div>
      <Container>
        <BuildDataset />
      </Container>
      <Footer />
    </div>
  );
};

export default DataAnnotation;
