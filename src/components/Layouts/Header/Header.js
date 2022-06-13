import React, { useEffect, useRef, useState } from "react";
import * as io from "react-icons/io";
import * as io5 from "react-icons/io5";
import * as fa from "react-icons/fa";
import * as bi from "react-icons/bi";
import * as im from "react-icons/im";
import {
  ContactContainer,
  InfoText,
  Navbar,
  Wrapper,
  NavItem,
  NavItemWrapper,
  NavItemContainer,
  IndicatorBar,
  Indicator,
  NavbarButton,
  NavbarExit,
  PageCover,
  Dropdown,
} from "./style";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);

  const handleScroll = () => {
    // console.log(window.scrollY);
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ContactContainer>
        <Wrapper className="contain section-scroll">
          <Wrapper>
            <InfoText>
              English
              <io.IoIosArrowDown />
            </InfoText>
          </Wrapper>
          <Wrapper>
            <InfoText>
              <fa.FaMapMarkerAlt />
              34th ST STE 1018, NY, USA
            </InfoText>
            <InfoText>
              <io5.IoMail />
              34th ST STE 1018, NY, USA
            </InfoText>
          </Wrapper>
        </Wrapper>
      </ContactContainer>
      <Navbar scrollY={scrollY}>
        <Wrapper className="contain">
          <Wrapper>
            <a href="/">
              <img src="./Frame.png" />
            </a>
          </Wrapper>
          <NavItemContainer>
            <PageCover
              showNavbar={showNavbar}
              onClick={() => setShowNavbar(false)}
            />
            <NavItemWrapper showNavbar={showNavbar}>
              {showNavbar === true ? (
                <div>
                  <Wrapper>
                    <a href="/">
                      <img src="./Frame.png" />
                    </a>
                  </Wrapper>
                </div>
              ) : null}
              <NavItem>
                <a>Services</a>
                <Dropdown>
                  <a href="/data-collection">Data Collection</a>
                  <a href="/data-annotation">Data Annotation</a>
                  <a href="/data-transcription">Data Transcription</a>
                </Dropdown>
              </NavItem>
              <NavItem>
                <a href="/off-the-shelf">Off the shelf data</a>
              </NavItem>
              <NavItem>
                <a href="/resources">Resources</a>
              </NavItem>
              <NavItem>
                <a href="#">Company</a>
                <Dropdown>
                  <a href="/about-us">About Us</a>
                  <a href="/contact">Contact</a>
                </Dropdown>
              </NavItem>
              <NavItem>
                <a href="/join-our-talent-pool">Join Our Talent Pool</a>
              </NavItem>
              {showNavbar === true ? (
                <NavbarExit onClick={() => setShowNavbar(false)}>
                  <im.ImCross />
                </NavbarExit>
              ) : null}
            </NavItemWrapper>
            <NavbarButton onClick={() => setShowNavbar(() => !showNavbar)}>
              <bi.BiMenu />
            </NavbarButton>
          </NavItemContainer>
        </Wrapper>
      </Navbar>
    </>
  );
}
