import React from "react";
import { Box, styled } from "@mui/material";

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
});

const TitleStyled = styled("h1")(({ theme }) => ({
  fontSize: "var(--medium-text-3)",
  fontWeight: "bold",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    fontSize: "var(--normal-text)",
    padding: "0",
  },
}));
// const Descrip = styled("p")(({ theme }) => ({
//   fontSize: "var(--normal-text)",
//   [theme.breakpoints.down("md")]: {
//     display: "none",
//   },
// }));
const BoxDetail = styled(Box)(({ theme }) => ({
  borderRadius: "30px",
  height: "16rem",
  aspectRatio: "1/1",
  display: "flex",
  position: "absolute",
  padding: "0.5rem",
  marginBottom: "2rem",
  marginLeft: "2rem",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "justify",
  backgroundColor: "var(--primary-text)",
  color: "var(--secondary-text)",
  lineHeight: "18px",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    height: "14rem",
  },
  [theme.breakpoints.down("sm")]: {
    height: "10rem",
    lineHeight: "16px",
    padding: "0.2rem",
    borderRadius: "15px",
  },
}));

const BoxContent2 = ({ index, isActive, handleClickShowBox, content }) => {
  return (
    <BoxStyled>
      <TitleStyled onClick={() => handleClickShowBox(index)}>
        {content.title}
      </TitleStyled>
      {isActive && (
        <BoxDetail onClick={() => handleClickShowBox(null)}>
          {content.description}
        </BoxDetail>
      )}
    </BoxStyled>
  );
};

export default BoxContent2;
