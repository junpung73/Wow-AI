import { Box, Grid, styled } from "@mui/material";
import React, { useState } from "react";
import ReactCardFlip from 'react-card-flip';

const BoxStyled = styled(Box)({
  borderRadius: "30px",
  aspectRatio: "1/1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  
});

const BoxContain = styled(Box)({
  position: "relative",
  borderRadius: "30px",
  aspectRatio: "1/1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "var(--secondary-text)",
  color: "var(--primary-text)",
  padding: "10%",
  cursor: "pointer",
  transition: "all .5s ease",
  '&:hover': {
    backgroundColor: "var(--secondary-bg)",
  }
});

const ContaiService = styled("div")(({ theme }) => ({
  padding: "10vh 20rem",
  [theme.breakpoints.down("lg")]: {
    padding: "10vh 14rem",
  },
  [theme.breakpoints.down("md")]: {
    padding: "10vh 8rem",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0",
  },
}));
const TextStyled = styled("p")(({ theme }) => ({
  marginBottom: "0",
  [theme.breakpoints.down("sm")]: {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "3",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));
const TitleStyled = styled("h1")(({ theme }) => ({
  fontSize: "var(--medium-text-3)",
  fontWeight: "bold",
  padding: "8vh 1vh",
  [theme.breakpoints.down("md")]: {
    fontSize: "var(--normal-text)",
    padding: "0",
  },
}));
const BoxDetail = styled(Box)({
  position: "relative",
  borderRadius: "30px",
  aspectRatio: "1/1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10%",
  backgroundColor: "var(--primary-text)",
  color: "var(--secondary-text)",
  cursor: "pointer",
});

const TransServices = ({ content }) => {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);

  const handleClick1 = () => {
    setIsFlipped1(!isFlipped1);
  }
  const handleClick2 = () => {
    setIsFlipped2(!isFlipped2);
  }
  return (
    <ContaiService id="trans-services" className="section-scroll">
      <h1 className="title-content" style={{ textAlign: "center" }}>
        Transcription Services
      </h1>
      <Grid container spacing={2} style={{ marginTop: "1px" }}>
        <Grid item xs={6}>
          <BoxStyled>
            <img
              src={content[0].img}
              alt="transcription service"
              style={{ borderRadius: "30px", width: "100%" }}
            />
          </BoxStyled>
        </Grid>
        <Grid item xs={6}>
          <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">
            <div>
              <BoxContain onClick={handleClick1}>
                <TitleStyled>
                  {content[0].title}
                </TitleStyled>
              </BoxContain>
            </div>

            <div>
              <BoxDetail onClick={handleClick1}>
                <TextStyled>
                  {content[0].description}
                </TextStyled>
              </BoxDetail>
            </div>
          </ReactCardFlip>
        </Grid>

        <Grid item xs={6}>
          <BoxStyled>
            <img
              src={content[1].img}
              alt="transcription service"
              style={{ borderRadius: "30px", width: "100%" }}
            />
          </BoxStyled>
        </Grid>
        <Grid item xs={6}>
          <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal">
            <div>
              <BoxContain onClick={handleClick2}>
                <TitleStyled>
                  {content[1].title}
                </TitleStyled>
              </BoxContain>
            </div>

            <div>
              <BoxDetail onClick={handleClick2}>
                <TextStyled>
                  {content[1].description}
                </TextStyled>
              </BoxDetail>
            </div>
          </ReactCardFlip>
        </Grid>
      </Grid>
    </ContaiService>
  );
};

export default TransServices;
