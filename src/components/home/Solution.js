import React from "react";
import SlideContent from "../public/SlideContent";
import solutions from "../../__mock__/solutions";
import { Grid, styled } from "@mui/material";

const Box1 = styled("div")(({ theme }) => ({
  backgroundColor: "var(--secondary-bg)",
  height: "20rem",
  aspectRatio: "1/1",
  borderRadius: "30px",
  paddingLeft: "4vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  transition: "all .3s ease",
  cursor: "pointer",
  "&:hover": {
    transform: 'scale(1.1)',
  },
  [theme.breakpoints.down("sm")]: {
    height: "16rem",
    fontSize: "var(--normal-text)",
  },
}));
const Box2 = styled("div")(({ theme }) => ({
  position: "absolute",
  marginBottom: "10vh",
  marginLeft: "8vh",
  height: "20rem",
  backgroundColor: "var(--secondary-text)",
  aspectRatio: "1/1",
  borderRadius: "30px",
  padding: "0 2vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "left",
  [theme.breakpoints.down("sm")]: {
    height: "16rem",
    fontSize: "var(--small-text)",
  },
}));
const Contain = styled("div")(({ theme }) => ({
  padding: "10vh 20vh",
  [theme.breakpoints.down("lg")]: {
    padding: "10vh 0",
  },
}));

const Solution = () => {
  return (
    <Contain id="solution" className="section-scroll">
      <h1
        className="title-content"
        style={{ display: "flex", justifyContent: "center" }}
      >
        AI solutions for your industry
      </h1>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <a href="#solutions" className="btn btn-control">
          Healthcare
        </a>
        <a href="#solutions" className="btn btn-control">
          Retail
        </a>
        <a href="#solutions" className="btn btn-control">
          Automobile
        </a>
        <a href="#solutions" className="btn btn-control">
          Banking
        </a>
        <a href="#solutions" className="btn btn-control">
          Manufacturing
        </a>
      </div>
      <br />
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} style={{ marginBottom: '20px' }}>
          <SlideContent content={solutions[0]} />
        </Grid>
        <Grid item xs={12} sm={6} style={{ position: "relative" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box1>
              <h1 className="title-description" style={{ padding: "0", cursor: "pointer", }}>
                Free Consultation
              </h1>
            </Box1>
            <Box2>
              <h1 className="title-description" style={{ padding: "0" }}>
                Retail
              </h1>
              <p>
                From enhanced customer service to better sales forecasts, AI is
                transforming retail by creating a truly customer-centric
                experience. Use high-quality speech, NLP, and QoE data to power
                your AI.
              </p>
            </Box2>

          </div>
        </Grid>
      </Grid>
    </Contain>
  );
};

export default Solution;
