import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import ReactCardFlip from 'react-card-flip';

const BoxStyled = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: "30px",
  aspectRatio: "1/1",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "2%",
  backgroundColor: "var(--secondary-text)",
  color: "var(--primary-text)",
  cursor: "pointer",
}));

const TitleStyled = styled("h1")(({ theme }) => ({
  fontSize: "var(--normal-text)",
  fontWeight: "500",
  padding: "1vh",
  textAlign: 'center',
  [theme.breakpoints.down("md")]: {
    fontSize: "var(--normal-text)",
    fontWeight: "normal",
    padding: "0",
  },
}));
const BoxDetail = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: "30px",
  aspectRatio: "1/1",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "2%",
  backgroundColor: "var(--primary-text)",
  color: "var(--secondary-text)",
  cursor: "pointer",
}));
const Detail = {
  fontSize: "14px",
  lineHeight: "14px",
  marginBottom: "0",
  textAlign: "center",
}

const BoxContent4 = ({ content }) => {
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
          <p style={Detail}>
            {content.description}
          </p>
        </BoxDetail>
      </div>
    </ReactCardFlip>
    // <BoxStyled>
    //   <TitleStyled onClick={() => handleClickShowBox(index)}>
    //     {content.title}
    //   </TitleStyled>
    //   {isActive && (
    //     <BoxDetail onClick={() => handleClickShowBox(null)}>
    //       {content.description}
    //     </BoxDetail>
    //   )}
    // </BoxStyled>
  );
};

export default BoxContent4;
