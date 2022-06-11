import { Box, Grid, styled } from "@mui/material";
import React from "react";

const BoxStyled = styled(Box)({
  borderRadius: "30px",
  aspectRatio: "1/1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const ContaiService = styled(Grid)(({ theme }) => ({
  padding: "20vh",
  [theme.breakpoints.down("md")]: {
    padding: "0",
  },
}));
const TextStyled = styled("p")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "3",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

const TransServices = () => {
  return (
    <ContaiService>
      <h2 className="title-content" style={{ textAlign: "center" }}>
        Transcription Services
      </h2>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <BoxStyled>
            <img
              src="/images/Group39352.png"
              alt="transcription service"
              style={{ borderRadius: "30px", width: "100%" }}
            />
          </BoxStyled>
        </Grid>
        <Grid item xs={6}>
          <BoxStyled
            style={{
              backgroundColor: "var(--primary-text)",
              color: "var(--secondary-text)",
              padding: "10%",
            }}
          >
            <TextStyled>
              Audio transcription is the process of converting spoken language
              into written language. This is what we do best.
            </TextStyled>
          </BoxStyled>
        </Grid>
        <Grid item xs={6}>
          <BoxStyled>
            <img
              src="/images/Group39352.png"
              alt="transcription service"
              style={{ borderRadius: "30px", width: "100%" }}
            />
          </BoxStyled>
        </Grid>
        <Grid item xs={6}>
          <BoxStyled
            style={{
              backgroundColor: "var(--secondary-text)",
              color: "var(--primary-text)",
              padding: "10%",
            }}
          >
            <h5 className="title-description">Image Transcription</h5>
          </BoxStyled>
        </Grid>
      </Grid>
    </ContaiService>
  );
};

export default TransServices;
