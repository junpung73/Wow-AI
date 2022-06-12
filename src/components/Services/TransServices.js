import { Box, Grid, styled } from "@mui/material";
import React from "react";
import { useState } from 'react';

const BoxStyled = styled(Box)({
  borderRadius: "30px",
  aspectRatio: "1/1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

});

const BoxContain = styled(Box)({
  borderRadius: "30px",
  aspectRatio: "1/1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "var(--secondary-text)",
  color: "var(--primary-text)",
  padding: "10%",
});

const ContaiService = styled('div')(({ theme }) => ({
  padding: "10vh 20rem",
  [theme.breakpoints.down("lg")]: {
    padding: "10vh 14rem",
  },
  [theme.breakpoints.down("md")]: {
    padding: "10vh 8rem",
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
  cursor: 'pointer',
  padding: '8vh 1vh',
  [theme.breakpoints.down("md")]: {
    fontSize: "var(--normal-text)",
    padding: "0",
  },
}));
const BoxDetail = styled(Box)(({ theme }) => ({
  borderRadius: "30px",
  height: '15rem',
  aspectRatio: "1/1",
  display: "flex",
  position: 'absolute',
  padding: '0.5rem',
  marginBottom: '2rem',
  marginLeft: '2rem',
  justifyContent: "center",
  alignItems: "center",
  textAlign: 'justify',
  backgroundColor: "var(--primary-text)",
  color: "var(--secondary-text)",
  lineHeight: '18px',
  cursor: 'pointer',
  [theme.breakpoints.down("lg")]: {
    height: '18rem',
  },
  [theme.breakpoints.down("md")]: {
    height: '14rem',
  },
  [theme.breakpoints.down("sm")]: {
    height: '8rem',
    lineHeight: '16px',
    padding: '0.2rem',
    borderRadius: "15px",
  },
}));

const TransServices = ({ content }) => {
  const [active, setActive] = useState(null);

  const handleClickShowBox = (index) => {
    setActive(index);
  };
  return (
    <ContaiService id='trans-services'>
      <h2 className="title-content" style={{ textAlign: "center" }}>
        Transcription Services
      </h2>
      {content.map((content, index) => {
                const isActive = active === index;
                return (
        <Grid container spacing={2} style={{ margin: '1px 0' }}>
          <Grid item xs={6}>
            <BoxStyled>
              <img
                src={content.img}
                alt="transcription service"
                style={{ borderRadius: "30px", width: "100%" }}
              />
            </BoxStyled>
          </Grid>
          <Grid item xs={6}>
            <BoxContain>
              <TitleStyled onClick={() => handleClickShowBox(index)}>{content.title}</TitleStyled>
              {isActive && (
              <BoxDetail onClick={() => handleClickShowBox(null)}>
                <TextStyled>
                  Audio transcription is the process of converting spoken language
                  into written language. This is what we do best.
                </TextStyled>
              </BoxDetail>
              )}
            </BoxContain>
          </Grid>
        </Grid>
      )
    })}

    </ContaiService>
  );
};

export default TransServices;
