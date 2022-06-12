import React from "react";
import { Box, styled } from "@mui/material";

const BoxStyled = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: "30px",
  aspectRatio: "1/1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2%",
  backgroundColor: "var(--secondary-text)",
  color: "var(--primary-text)",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    borderRadius: "15px",
  },
}));

const TitleStyled = styled("h5")(({ theme }) => ({
  fontSize: "var(--medium-text-3)",
  fontWeight: "bold",
  padding: "1vh",
  [theme.breakpoints.down("md")]: {
    fontSize: "var(--normal-text)",
    fontWeight: "normal",
    padding: "0",
  },
}));
const BoxDetail = styled(Box)(({ theme }) => ({
  borderRadius: "30px",
  height: "12rem",
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
  [theme.breakpoints.down("md")]: {
    height: "12rem",
  },
  [theme.breakpoints.down("sm")]: {
    height: "10rem",
    lineHeight: "16px",
    padding: "0.2rem",
    borderRadius: "15px",
  },
}));

const BoxContent5 = ({ index, isActive, handleClickShowBox, content }) => {
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

export default BoxContent5;
