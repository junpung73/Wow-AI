import React from "react";
import { Box, styled } from "@mui/material";

const BoxStyled = styled(Box)({
  borderRadius: "30px",
  aspectRatio: "1/1",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "2%",
  color: "var(--primary-text)",
  backgroundColor: "var(--secondary-text)",
  transition: 'all 0.5s ease',
  '&:hover': {
    color: "var(--secondary-text)",
    backgroundColor: "var(--primary-text)",
  }
});

const TitleStyled = styled("h5")(({ theme }) => ({
  fontSize: "var(--medium-text-3)",
  fontWeight: "bold",
  padding: "1vh 0",
  [theme.breakpoints.down("md")]: {
    fontSize: "var(--normal-text)",
    padding: "0",
  },
}));
const Descrip = styled("p")(({ theme }) => ({
  fontSize: "var(--normal-text)",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const BoxContent3 = ({ content }) => {
  return (
    <BoxStyled>
      <TitleStyled>{content.title}</TitleStyled>
      <Descrip>{content.description}</Descrip>
    </BoxStyled>
  );
};

export default BoxContent3;
