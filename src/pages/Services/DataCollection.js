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

const DataCollection = () => {
  return (
    <div>
      <HignQuality topic={topicservices[1]} />
      <div className="contain">
        <div className="arrowdown">
          <img src="/images/scrollarrow.png" alt="scroll" />
        </div>
        <ProjectAI />
        <div className="arrowdown">
          <img src="/images/scrollarrow.png" alt="scroll" />
        </div>
        <TextCollection content={sectionservices[0]} />
        <SpeechCollection content={sectionservices[1]} />
        <IllutrationSection content={sectionservices[2]} />
        <IllutrationSection content={sectionservices[3]} />
        <Download />
        <Dataset />
      </div>
    </div>
  );
};

export default DataCollection;
