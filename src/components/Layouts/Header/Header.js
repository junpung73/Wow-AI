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
  const [showNavbar, setShowNavbar] = useState(false);
  const [showMenu, setShowMenu] = useState("");

  useEffect(() => {
    const updateWindowDimensions = () => {
      setShowMenu("");
    };

    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <>
      <ContactContainer>
        <Wrapper style={{ marginBottom: 0 }} className="contain section-scroll">
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
      <Navbar>
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
              <NavItem
                navItemName="Services"
                showMenu={showMenu}
                onClick={() =>
                  showMenu === "Services"
                    ? setShowMenu("")
                    : setShowMenu("Services")
                }
              >
                <a>Services</a>
                <Dropdown>
                  <a href="/data-collection">Data Collection</a>
                  <a href="/data-annotation">Data Annotation</a>
                  <a href="/data-transcription">Data Transcription</a>
                </Dropdown>
              </NavItem>
              <NavItem showMenu={showMenu} navItemName="off-the-shelf">
                <a href="/off-the-shelf">Off the shelf data</a>
              </NavItem>
              <NavItem showMenu={showMenu} navItemName="resources">
                <a href="/resources">Resources</a>
              </NavItem>
              <NavItem
                showMenu={showMenu}
                navItemName="Company"
                onClick={() =>
                  showMenu === "Company"
                    ? setShowMenu("")
                    : setShowMenu("Company")
                }
              >
                <a href="#">Company</a>
                <Dropdown>
                  <a href="/about-us">About Us</a>
                  <a href="/contact">Contact</a>
                </Dropdown>
              </NavItem>
              <NavItem showMenu={showMenu} navItemName="join-our-talent-pool">
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
