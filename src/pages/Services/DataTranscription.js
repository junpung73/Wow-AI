import React from "react";
import Dataset from "../../components/public/Dataset";
import Download from "../../components/Services/Download";
import HignQuality from "../../components/Services/public-service/HignQuality";
import TransServices from "../../components/Services/TransServices";
import topicservices from "../../__mock__/topicservices";

const DataTranscription = () => {
  return (
    <div>
      <HignQuality topic={topicservices[0]} />
      <div className="contain">
        <div className="arrowdown">
          <img src="/images/scrollarrow.png" alt="scroll" />
        </div>
        <TransServices />
        <Download />
        <Dataset />
      </div>
    </div>
  );
};

export default DataTranscription;
