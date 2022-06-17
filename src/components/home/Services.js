import { Box, Grid, Link, styled } from "@mui/material";
import React from "react";

const BoxStyled = styled(Box)({
  border: "2px solid var(--secondary-bg)",
  borderRadius: "15px",
  padding: "10px",
  aspectRatio: "1/1",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  marginBottom: "1.5rem",
  transition: "all .3s ease",
  "&:hover": {
    backgroundColor: "var(--secondary-text)",
  },
});

const BoxContent = {
  paddingLeft: "20px",
};

const LinkStyled = styled(Link)(({ theme }) => ({
  fontSize: "var(--medium-text-3)",
  fontWeight: "bold",
  color: "var(--secondary-bg)",
  textDecoration: "none",
  alignSelf: "flex-end",
  marginBottom: "1vh",
  cursor: "pointer",
  "&:hover": {
    color: "var(--secondary-bg)",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const UlStyled = styled("ul")(({ theme }) => ({
  display: "block",
  // [theme.breakpoints.down("sm")]: {
  //   display: "none",
  // },
}));
const TitleStyled = styled("h1")(({ theme }) => ({
  fontSize: "var(--medium-text-3)",
  fontWeight: "bold",
  padding: "2vh 0 1.5vh 0",
  color: "var(--primary-text)",
  [theme.breakpoints.down("sm")]: {
    fontSize: "var(--normal-text)",
  },
}));

const Services = () => {
  return (
    <div id="services" className="section-scroll" style={{ padding: "10vh 0" }}>
      <div className="title-content" style={{ textAlign: "center" }}>
        Services
      </div>
      <Grid container spacing={2}>
        <Grid item lg={6} xs={12}>
          <img
            src="/images/Rectangle112.png"
            alt="Services"
            style={{
              width: "100%",
              borderRadius: "15px",
              border: "2px solid var(--secondary-bg)",
              padding: "5px",
            }}
          />
        </Grid>
        <Grid item lg={3} xs={6}>
          <BoxStyled style={BoxContent}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TitleStyled>+ Data collection</TitleStyled>
              <UlStyled>
                <li>Text data collection</li>
                <li>Image data collection</li>
                <li>Speech data collection</li>
                <li>Audio data collection</li>
              </UlStyled>
            </div>
            <LinkStyled>
              Discover now &nbsp;
              <img src="/images/Vector9.png" alt="..." />
            </LinkStyled>
          </BoxStyled>
          <BoxStyled style={BoxContent}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TitleStyled>+ Transcription</TitleStyled>
              <UlStyled>
                <li>Image Transcription</li>
                <li>Audio Transcription</li>
                <li>Tailor-made solution</li>
              </UlStyled>
            </div>
            <LinkStyled>
              Learn more &nbsp;
              <img src="/images/Vector9.png" alt="..." />
            </LinkStyled>
          </BoxStyled>
        </Grid>
        <Grid item lg={3} xs={6}>
          <BoxStyled style={BoxContent}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TitleStyled>+ Data annotation</TitleStyled>
              <UlStyled>
                <li>Text data annotation</li>
                <li>Image data annotation</li>
                <li>Speech data annotation</li>
                <li>Audio data annotation</li>
              </UlStyled>
            </div>
            <div style={{ display: "flex" }}>
              <LinkStyled>
                Free <br /> Consultation &nbsp;
                <img src="/images/Vector9.png" alt="..." />
              </LinkStyled>
            </div>
          </BoxStyled>
          <BoxStyled style={BoxContent}>
            <TitleStyled>+ Tailor-made solution ?</TitleStyled>
            <LinkStyled>
              Share with us &nbsp;
              <img src="/images/Vector9.png" alt="..." />
            </LinkStyled>
          </BoxStyled>
        </Grid>
      </Grid>
    </div>
  );
};

export default Services;
