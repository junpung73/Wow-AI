import { CardMedia, Container, Grid, styled, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Title = {
  fontSize: "var(--normal-text)",
  fontWeght: "bold",
  marginTop: "4vh",
  marginBottom: "1.4rem",
};

const BulletPoint = {
  paddingLeft: "1.4rem",
  listStyleImage: "url('images/Vector85.png')",
};

const InfoPage = styled(Grid)(({ theme }) => ({
  display: "block",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
const CardMediaStyled = styled(CardMedia)(({ theme }) => ({
  maxWidth: "40%",
  padding: "2vh 0",
  [theme.breakpoints.down("md")]: {
    maxWidth: "20%",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "40%",
  },
}));

const Footer = () => {
  return (
    <div
      className="section-scroll"
      style={{
        backgroundColor: "var(--primary-bg)",
        color: "var(--primary-text)",
        width: "100%",
      }}
    >
      <hr style={{ color: "white", height: "2px", margin: "0" }} />
      <div className="container" style={{ marginBottom: "5vh" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4}>
            <Link to="/">
              <CardMediaStyled component="img" image="/Frame.png" />
            </Link>
            <Typography style={{ textAlign: "justify" }}>
              A trusted partner that provides high-quality data solutions for AI
              training at a large scale.
            </Typography>
          </Grid>
          <InfoPage item xs={3} md={2}>
            <Typography style={Title}>Company</Typography>
            <ul style={BulletPoint}>
              <li>About us</li>
              <li>Service</li>
              <li>Resources</li>
              <li>Join our crowd pool</li>
            </ul>
          </InfoPage>
          <InfoPage item xs={3} md={2}>
            <Typography style={Title}>Data Collection</Typography>
            <ul style={BulletPoint}>
              <li>Audio Collection</li>
              <li>Image Collection</li>
              <li>Utterances Collection</li>
            </ul>
          </InfoPage>
          <InfoPage item xs={3} md={2}>
            <Typography style={Title}>Data Annotation</Typography>
            <ul style={BulletPoint}>
              <li>Image Annotation</li>
              <li>Entity Annotation</li>
              <li>Video Annotation</li>
            </ul>
          </InfoPage>
          <InfoPage item xs={3} md={2}>
            <Typography style={Title}>Data Transcription</Typography>
            <ul style={BulletPoint}>
              <li>Image Transcription</li>
              <li>Audio Transcription</li>
              <li>Other special services?</li>
            </ul>
          </InfoPage>
        </Grid>
      </div>
      <hr style={{ color: "white", height: "2px", margin: "0" }} />
      <Container className="container">
        <Typography
          style={{
            textAlign: "center",
            padding: "2vh",
            fontWeight: "lighter",
            lineHeight: "22px",
            letterSpacing: "0.3rem",
            color: "#B8B8B8",
          }}
        >
          All rights reserved by WOW-AI
        </Typography>
      </Container>
    </div>
  );
};

export default Footer;
