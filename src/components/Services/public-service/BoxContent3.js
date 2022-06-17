import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import ReactCardFlip from 'react-card-flip';

const BoxStyled = styled(Box)({
  position: "relative",
  borderRadius: "30px",
  aspectRatio: "1/1",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "15px",
  color: "var(--primary-text)",
  backgroundColor: "var(--secondary-text)",
  cursor: "pointer",
  transition: "all .5s ease",
  '&:hover': {
    backgroundColor: "var(--secondary-bg)",
  }
});

const TitleStyled = styled("h1")(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "bold",
  padding: "1vh 0",
  cursor: "pointer",
  textAlign: "center",
  overflowWrap: 'break-word',
  [theme.breakpoints.down("md")]: {
    padding: "0",
  },
}));
const BoxDetail = styled(Box)({
  borderRadius: "30px",
  aspectRatio: "1/1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "5%",
  backgroundColor: "var(--primary-text)",
  color: "var(--secondary-text)",
  cursor: "pointer",
});
const Detail = styled("p")(({ theme }) => ({
  fontSize: "18px",
  marginBottom: "0",
  textAlign: "left",
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
}));

const BoxContent3 = ({ content }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div>
        <BoxStyled onClick={handleClick}>
          <TitleStyled>
            {content.title}
          </TitleStyled>
        </BoxStyled>
      </div>

      <div>
        <BoxDetail onClick={handleClick}>
          <Detail>
            {content.description}
          </Detail>
        </BoxDetail>
      </div>
    </ReactCardFlip>
  );
};

export default BoxContent3;
