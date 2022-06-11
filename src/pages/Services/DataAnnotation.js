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
        <a className="arrowdown" href="#image-annotation">
          <img src="/images/scrollarrow.png" alt="scroll" />
        </a>
        <ImgVdSection content={annotation[0]} />
        <a className="arrowdown" href="#text-annotation">
          <img src="/images/scrollarrow.png" alt="scroll" />
        </a>
        <TextAudioSection content={annotation[1]} />
        <a className="arrowdown" href="#audio-annotation">
          <img src="/images/scrollarrow.png" alt="scroll" />
        </a>
        <TextAudioSection content={annotation[2]} />
        <a className="arrowdown" href="#video-annotation">
          <img src="/images/scrollarrow.png" alt="scroll" />
        </a>
        <ImgVdSection content={annotation[3]} />
        <a className="arrowdown" href="#download">
          <img src="/images/scrollarrow.png" alt="scroll" />
        </a>
        <Download />
        <a className="arrowdown" href="#dataset">
          <img src="/images/scrollarrow.png" alt="scroll" />
        </a>
        <Dataset />
      </div>
    </div>
  );
};

export default DataAnnotation;
