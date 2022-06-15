import React from "react";
import { Reserved, FooterContainer, ListCol, LogoCol, Wrapper } from "./style";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <FooterContainer>
          <LogoCol>
            <a href="/">
              <img src="Frame.png" alt="logo" />
            </a>
            <h3>
              A trusted partner that provides high-quality data solutions for AI
              training at a large scale.
            </h3>
          </LogoCol>
          <ListCol>
            <h3>Company</h3>
            <a href="#">About us</a>
            <a href="#">Services</a>
            <a href="#">Resources</a>
            <a href="#">Join our crowd pool</a>
          </ListCol>
          <ListCol>
            <h3>Company</h3>
            <a href="#">About us</a>
            <a href="#">Services</a>
            <a href="#">Resources</a>
            <a href="#">Join our crowd pool</a>
          </ListCol>
          <ListCol>
            <h3>Company</h3>
            <a href="#">About us</a>
            <a href="#">Services</a>
            <a href="#">Resources</a>
            <a href="#">Join our crowd pool</a>
          </ListCol>
          <ListCol>
            <h3>Company</h3>
            <a href="#">About us</a>
            <a href="#">Services</a>
            <a href="#">Resources</a>
            <a href="#">Join our crowd pool</a>
          </ListCol>
        </FooterContainer>
      </Wrapper>
      <Wrapper>
        <FooterContainer>
          <Reserved>
            <h3>All right reserved by WOW-AI</h3>
          </Reserved>
        </FooterContainer>
      </Wrapper>
    </>
  );
};
export default Footer;
