import { Box, Grid, styled } from "@mui/material";
import React from "react";

const BoxStyled = styled(Box)({
  backgroundColor: "var(--secondary-text)",
  borderRadius: "15px",
  aspectRatio: "1/1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
});
const titleStyled = styled("p")(({ theme }) => ({
  fontSize: "var(--medium-text-2)",
  fontWeoght: "bold",
  marginBottom: "0",
  [theme.breakpoints.down("md")]: {
    fontSize: "var(--normal-text)",
  },
}));

const ProjectAI = () => {
  return (
    <div
      style={{ padding: "20vh 0" }}
      id="project-ai"
      className="section-scroll"
    >
      <h1 className="title-content" style={{ textAlign: "center" }}>
        Jumpstart your AI projects <br /> with excellent-quality data{" "}
      </h1>
      <Grid container spacing={5}>
        <Grid item xs={6} sm={3}>
          <BoxStyled>
            <div>
              <titleStyled>100,000</titleStyled> Global <br /> Freelancers
            </div>
          </BoxStyled>
        </Grid>
        <Grid item xs={6} sm={3}>
          <BoxStyled>
            <div>
              <titleStyled>120+</titleStyled> Languages
            </div>
          </BoxStyled>
        </Grid>
        <Grid item xs={6} sm={3}>
          <BoxStyled>
            <div>
              <titleStyled>247+</titleStyled> Support
            </div>
          </BoxStyled>
        </Grid>
        <Grid item xs={6} sm={3}>
          <BoxStyled>
            <div>
              <titleStyled>100%</titleStyled> Customer <br /> Satisfation
            </div>
          </BoxStyled>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectAI;
