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
  padding: "5%",
  color: "var(--primary-text)",
  backgroundColor: "var(--secondary-text)",
  cursor: "pointer",
  transition: "all .5s ease",
  '&:hover': {
    backgroundColor: "var(--secondary-bg)",
  }
});

const TitleStyled = styled("h1")(({ theme }) => ({
  fontSize: "var(--medium-text-3)",
  fontWeight: "bold",
  padding: "1vh 0",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    fontSize: "var(--normal-text)",
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
const Detail = {
  fontSize: "18px",
  lineHeight: "18px",
  marginBottom: "0",
  textAlign: "justify",
}

const BoxContent3 = ({ index, isActive, handleClickShowBox, content }) => {
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

export default BoxContent3;
