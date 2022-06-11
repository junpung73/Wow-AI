import React from "react";
import Dataset from "../../components/public/Dataset";
import Download from "../../components/Services/Download";
import ImgVdSection from "../../components/annotation/ImgVdSection";
import HignQuality from "../../components/Services/public-service/HignQuality";
import topicservices from "../../__mock__/topicservices";
import annotation from "../../__mock__/annotation";
import TextAudioSection from "../../components/annotation/TextAudioSection";

const DataAnnotation = () => {
  return (
    <div>
      <HignQuality topic={topicservices[2]} />
      <div className="contain">
        <div className="arrowdown">
          <img src="/images/scrollarrow.png" alt="scroll" />
        </div>
        <ImgVdSection content={annotation[0]} />
        <div className="arrowdown">
          <img src="/images/scrollarrow.png" alt="scroll" />
        </div>
        <TextAudioSection content={annotation[1]} />
        <div className="arrowdown">
          <img src="/images/scrollarrow.png" alt="scroll" />
        </div>
        <TextAudioSection content={annotation[2]} />
        <div className="arrowdown">
          <img src="/images/scrollarrow.png" alt="scroll" />
        </div>
        <ImgVdSection content={annotation[3]} />
        <div className="arrowdown">
          <img src="/images/scrollarrow.png" alt="scroll" />
        </div>
        <Download />
        <div className="arrowdown">
          <img src="/images/scrollarrow.png" alt="scroll" />
        </div>
        <Dataset />
      </div>
    </div>
  );
};

export default DataAnnotation;
