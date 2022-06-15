import { Box, Grid, styled } from "@mui/material";
import React from "react";

const BoxStyled = styled(Box)(({ theme }) => ({
  backgroundColor: "var(--secondary-text)",
  borderRadius: "30px",
  width: "22%",
  aspectRatio: "1/1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
    borderRadius: "15px",
  },
}));
const ContentStyled = styled("div")(({ theme }) => ({
  textAlign: "justify",
  [theme.breakpoints.down("md")]: {
    fontSize: "var(--small-text)",
  },
}));

const Management = () => {
  return (
    <div
      style={{ padding: "20vh 0" }}
      id="management"
      className="section-scroll"
    >
      <h1
        className="title-content"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Our crowd management
      </h1>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <img
            src="/images/image36.png"
            alt="management"
            style={{
              border: "2px solid var(--secondary-bg)",
              borderRadius: "15px",
              padding: "5px",
              width: "100%",
            }}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <ContentStyled>
            <i>
              The quality of AI data depends on the people who collect and
              annotate it. We make sure to support every single resource 24/7 so
              that they can deliver the highest-quality data.
              <br />
              <br />
              We build a close relationship with our global crowd through our
              unique way of management. Our crowd resources are our valuable
              assets.
            </i>
          </ContentStyled>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              margin: "2vh 0",
            }}
          >
            <BoxStyled>
              <p style={{ marginBottom: '0' }}>
                100,000 Global <br /> Freelancers
              </p>
            </BoxStyled>
            <BoxStyled>
              <p style={{ marginBottom: '0' }}>
                120+ <br /> Languages
              </p>
            </BoxStyled>
            <BoxStyled>
              <p style={{ marginBottom: '0' }}>
                247+ <br /> Support
              </p>
            </BoxStyled>
            <BoxStyled>
              <p style={{ marginBottom: '0' }}>
                100% <br /> Customer <br /> Satisfation
              </p>
            </BoxStyled>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a href="/contact" className="btn btn-dark">
              Contact us now
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Management;
