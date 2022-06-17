import { CardMedia } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Video = {
  display: "flex",
  alignItems: "center",
};

const AboutUs = () => {
  return (
    <div
      id="aboutus"
      className="section-scroll"
      style={{
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Row>
        <Col xs={12} lg={7} style={Video}>
          <CardMedia
            component="video"
            width="100%"
            style={{
              borderRadius: "15px",
              border: "2px solid var(--secondary-bg)",
              aspectRatio: "16/9",
            }}
            image="/videos/aboutHome.mp4"
            autoPlay
            muted
            loop
          />
        </Col>
        <Col xs={12} lg={5} style={{ color: "var(--primary-text)" }}>
          <h5 className="title-content">About Us</h5>
          <div style={{ textAlign: "justify" }}>
            Wow AI is
            <span style={{ fontWeight: "700" }}> a trusted partner </span>
            that
            <span style={{ fontWeight: "700" }}>
              {" "}
              provides high-quality data for AI training{" "}
            </span>
            in different languages at a large scale. We are experienced
            professionals with a track record of success in numerous types of
            data collecting. With a crowd of over 100,000 project contributors
            all over the world, we can provide massive, scalable high-quality
            data across data types. We also provide off-the-shelf data and
            tailor-made data for the success of your AI/ML projects.
            <br />
            <br />
            Many companies have successfully built their AI models with us. So
            do you!
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
