import React from "react";
import Download from "../../components/Services/Download";
import HignQuality from "../../components/Services/public-service/HignQuality";
import TransServices from "../../components/Services/TransServices";
import topicservices from "../../__mock__/topicservices";
import transervice from "../../__mock__/transervice";
import Header from "../../components/Layouts/Header/Header";
import Footer from "../../components/Layouts/Footer";
import BuildDataset from "../../components/public/BuildDataset";
const DataTranscription = () => {
  return (
    <div>
      <Header />
      <HignQuality topic={topicservices[0]} />
      <div className="contain">
        <a className="arrowdown" href="#trans-services">
          <img src="/images/scrollarrow.png" alt="scroll" />
        </a>
        <TransServices content={transervice} />
        <a className="arrowdown" href="#download">
          <img src="/images/scrollarrow.png" alt="scroll" />
        </a>
        <Download />
        <a className="arrowdown" href="#dataset">
          <img src="/images/scrollarrow.png" alt="scroll" />
        </a>
        <BuildDataset />
      </div>
      <Footer />
    </div>
  );
};

export default DataTranscription;
