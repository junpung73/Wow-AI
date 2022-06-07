import React from "react";
import { Box, styled } from "@mui/material";

const BoxStyled = styled(Box)({
  borderRadius: "30px",
  aspectRatio: "1/1",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "10%",
});

const TitleStyled = styled("h5")(({ theme }) => ({
  fontSize: "var(--medium-text-3)",
  fontWeight: "bold",
  padding: "1vh 0",
  [theme.breakpoints.down("sm")]: {
    fontSize: "var(--normal-text)",
    padding: "0",
  },
}));
const Descrip = styled("p")(({ theme }) => ({
  fontSize: "var(--normal-text)",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const BoxContent2 = ({ content }) => {
  return (
    <BoxStyled
      style={{
        backgroundColor: `${content.bgcolor}`,
        color: `${content.color}`,
      }}
    >
      <TitleStyled>{content.title}</TitleStyled>
      <Descrip>{content.description}</Descrip>
    </BoxStyled>
  );
};

export default BoxContent2;
