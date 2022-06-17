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
  position: "relative",
  cursor: "pointer",
  transition: "all .3s ease",
  "&:hover": {
    top: "-20px",
    backgroundColor: "var(--primary-text)",
    color: "var(--secondary-text)",
  },
});
const TitleStyled = styled("p")(({ theme }) => ({
  fontSize: "var(--medium-text-3)",
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
            <TitleStyled>
              100,000 Global <br /> Freelancers
            </TitleStyled>
          </BoxStyled>
        </Grid>
        <Grid item xs={6} sm={3}>
          <BoxStyled>
            <TitleStyled>120+ Languages</TitleStyled>
          </BoxStyled>
        </Grid>
        <Grid item xs={6} sm={3}>
          <BoxStyled>
            <TitleStyled>247+ Support</TitleStyled>
          </BoxStyled>
        </Grid>
        <Grid item xs={6} sm={3}>
          <BoxStyled>
            <TitleStyled>
              98% Customer <br /> Satisfation
            </TitleStyled>
          </BoxStyled>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectAI;
