import { Box, styled } from "@mui/material";
import React from "react";

const BoxStyled = styled(Box)({
  border: "2px solid var(--secondary-bg)",
  borderRadius: "30px",
  width: "100%",
});
const VerticalLine = styled("div")(({ theme }) => ({
  borderLeft: "2px solid var(--secondary-bg)",
  margin: "2vh 0",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
const RowStyled = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  borderBottom: "2px solid var(--secondary-bg)",
  margin: "0 2vh",
  padding: "5vh 0",
  [theme.breakpoints.down("sm")]: {
    padding: "2vh 0",
  },
}));
const LinkStyle = {
  color: "var(--primary-text)",
  textDecoration: "none",
};
const ImgStyled = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "14px",
  },
}));
const MedicalStyled = styled("a")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "30%",
  },
}));
const LinkS = styled('span')({
  transition: "all .3s ease",
  '&:hover': {
    fontWeight: 'bold'
  }
});

const Download = () => {
  return (
    <div className="section-scroll" style={{ padding: "20vh 0" }} id="download">
      <div style={{ marginBottom: "5vh" }}>
        <img
          src="/images/Cloud-Download.png"
          alt="Cloud-Download"
          style={{ marginTop: "-30px" }}
        />
        <span className="title-content"> Download Our Sample Datasets</span>
      </div>
      <BoxStyled>
        <RowStyled>
          <h1 className="title-description">Medical dataset</h1>
          <VerticalLine/>
          <h1 className="title-description">OCR dataset</h1>
          <VerticalLine/>
          <h1 className="title-description">Audio dataset</h1>
        </RowStyled>
        <RowStyled>
          <a href="#download" style={LinkStyle}>
            <ImgStyled src="/images/Group882.svg" alt="Download" />
            <LinkS> Imaging data </LinkS>
          </a>
          <VerticalLine style={{borderColor: "var(priamry-bg)"}}/>
          <a href="#download" style={LinkStyle}>
            <ImgStyled src="/images/Group882.svg" alt="Download" />
            <LinkS> Imaging data </LinkS>
          </a>
          <VerticalLine style={{borderColor: "var(priamry-bg)"}}/>
          <a href="#download" style={LinkStyle}>
            <ImgStyled src="/images/Group882.svg" alt="Download" />
            <LinkS> Audio data </LinkS>
          </a>
        </RowStyled>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "5vh 0",
            margin: "0 2vh",
          }}
        >
          <a href="#download" style={LinkStyle}>
            <ImgStyled src="/images/Group882.svg" alt="Download" />
            <LinkS> Audio data </LinkS>
          </a>
          <VerticalLine style={{borderColor: "var(priamry-bg)"}}/>
          <div>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </div>
          <VerticalLine style={{borderColor: "var(priamry-bg)"}}/>
          <MedicalStyled href="#download" style={LinkStyle}>
            <ImgStyled src="/images/Group882.svg" alt="Download" />
            <LinkS> Medical Audio data </LinkS>
          </MedicalStyled>
        </div>
      </BoxStyled>
    </div>
  );
};

export default Download;
