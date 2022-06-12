import React from "react";
import Dataset from "../../components/public/Dataset";
import Download from "../../components/Services/Download";
import HignQuality from "../../components/Services/public-service/HignQuality";
import ProjectAI from "../../components/Services/ProjectAI";
import TextCollection from "../../components/Services/TextCollection";

import topicservices from "../../__mock__/topicservices";
import sectionservices from "../../__mock__/collection";
import SpeechCollection from "../../components/Services/SpeechCollection";
import IllutrationSection from "../../components/Services/IllutrationSection";

import Header from "../../components/Layouts/Header/Header";
import Footer from "../../components/Layouts/Footer";

const DataCollection = () => {
  return (
    <div className="view-scroll">
      <Header />
      <HignQuality topic={topicservices[1]} />
      <div className="contain">
        <a className="arrowdown" href="#project-ai">
          <img src="/images/scrollarrow.png" alt="scroll" />
        </a>
        <ProjectAI />
        <a className="arrowdown" href="#text-collection">
          <img src="/images/scrollarrow.png" alt="scroll" />
        </a>
        <TextCollection content={sectionservices[0]} />
        <a className="arrowdown" href="#speech-collection">
          <img src="/images/scrollarrow.png" alt="scroll" />
        </a>
        <SpeechCollection content={sectionservices[1]} />
        <a className="arrowdown" href="#image-collection">
          <img src="/images/scrollarrow.png" alt="scroll" />
        </a>
        <IllutrationSection content={sectionservices[2]} />
        <a className="arrowdown" href="#video-collection">
          <img src="/images/scrollarrow.png" alt="scroll" />
        </a>
        <IllutrationSection content={sectionservices[3]} />
        <a className="arrowdown" href="#download">
          <img src="/images/scrollarrow.png" alt="scroll" />
        </a>
        <Download />
        <a className="arrowdown" href="#dataset">
          <img src="/images/scrollarrow.png" alt="scroll" />
        </a>
        <Dataset />
      </div>
      <Footer />
    </div>
  );
};

export default DataCollection;
