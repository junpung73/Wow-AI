import React from "react";
import * as bs from "react-icons/bs";
import {
  Reserved,
  FooterContainer,
  ListCol,
  LogoCol,
  Wrapper,
  SocialRow,
  Social,
} from "./style";

const Footer = () => {
  return (
    <div style={{ marginTop: "300px", scrollSnapAlign: "end" }}>
      <Wrapper>
        <FooterContainer>
          <LogoCol>
            <a href="/">
              <img src="Frame.png" alt="logo" />
            </a>
            <h3>
              A global provider of <span>high-quality</span> AI training data
            </h3>
            <SocialRow>
              <Social>
                <bs.BsFacebook />
              </Social>
              <Social>
                <bs.BsInstagram />
              </Social>
              <Social>
                <bs.BsLinkedin />
              </Social>
              <Social>
                <bs.BsTwitter />
              </Social>
            </SocialRow>
          </LogoCol>
          <ListCol>
            <h3>Company</h3>
            <a href="#">About us</a>
            <a href="#">Services</a>
            <a href="#">Resources</a>
            <a href="#">Join our crowd pool</a>
            <a href="#">Privacy</a>
            <a href="#">Security</a>
          </ListCol>
          <ListCol>
            <h3>Data collection</h3>
            <a href="#">Audio Collection</a>
            <a href="#">Image Collection</a>
            <a href="#">Utterances Collection</a>
          </ListCol>
          <ListCol>
            <h3>Data annotation</h3>
            <a href="#">Image Annotation</a>
            <a href="#">Entity Annotation</a>
            <a href="#">Video Annotation</a>
          </ListCol>
          <ListCol>
            <h3>Data transcription</h3>
            <a href="#">Image Transcription</a>
            <a href="#">Audio Transcription</a>
            <a href="#">Other special services?</a>
          </ListCol>
        </FooterContainer>
      </Wrapper>
      <Wrapper>
        <FooterContainer>
          <Reserved>
            <h3>All rights reserved by WOW-AI</h3>
          </Reserved>
        </FooterContainer>
      </Wrapper>
    </div>
  );
};
export default Footer;
