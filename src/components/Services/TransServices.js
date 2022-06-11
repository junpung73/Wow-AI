import { Box, Grid, styled } from "@mui/material";
import React from "react";

const BoxStyled = styled(Box)({
  borderRadius: "30px",
  aspectRatio: "1/1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

});

const BoxDetail = styled(Box)({
  borderRadius: "30px",
  aspectRatio: "1/1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "var(--secondary-text)",
  color: "var(--primary-text)",
  padding: "10%",
  transition: 'all .5s ease',
  '&:hover': {
    backgroundColor: "var(--primary-text)",
    color: "var(--secondary-text) !important",
  }
});

const ContaiService = styled('div')(({ theme }) => ({
  padding: "10vh 50vh",
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
const TitleStyled = styled("h5")(({ theme }) => ({
  fontSize: "var(--medium-text-3)",
  fontWeight: "bold",
  [theme.breakpoints.down("md")]: {
    fontSize: "var(--normal-text)",
    padding: "0",
  },
}));

const TransServices = () => {
  return (
    <ContaiService id='trans-services'>
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
          <BoxDetail>
            <TextStyled>
              Audio transcription is the process of converting spoken language
              into written language. This is what we do best.
            </TextStyled>
          </BoxDetail>
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
          <BoxDetail>
            <TitleStyled>Image Transcription</TitleStyled>
          </BoxDetail>
        </Grid>
      </Grid>
    </ContaiService>
  );
};

export default TransServices;
