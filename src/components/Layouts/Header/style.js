import styled from "styled-components/macro";
import { DropdownAnimationMax, DropdownAnimationMin } from "./Animation";

export const ContactContainer = styled.div`
  width: 100%;
  padding: 5px 0;
  display: flex;
  justify-content: center;
  border-bottom: 1px white solid;

  @media (max-width: 769px) {
    display: none;
  }
`;

export const Navbar = styled.div`
  width: 100%;
  height: 90px;
  position: relative;

  z-index: 9999;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;

  -webkit-box-shadow: 5px 5px 20px -10px #000000;
  box-shadow: 5px 5px 20px -10px #000000;

  background-color: ${({ scrollY }) =>
    scrollY < 10 ? "var(--primary-bg)" : "transparent"};

  &:hover {
    background-color: var(--primary-bg);
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  white-space: nowrap;

  > a > img {
    width: 120px;
    margin: 20px 0;
  }

  @media (max-width: 1024px) {
    font-size: 12px;
  }

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const InfoText = styled.div`
  color: white;
  align-items: center;
  font-size: var(--normal-text);

  > svg {
    margin: 0 5px;
  }
`;

export const LogoWrapper = styled(Wrapper)`
  justify-content: flex-start;
  width: 20%;
`;

export const NavItemContainer = styled(Wrapper)`
  justify-content: flex-end;
  width: 80%;
`;

export const NavItemWrapper = styled(Wrapper)`
  gap: 30px;

  @media (max-width: 1024px) {
    width: 300px;
    position: absolute;
    flex-direction: column;
    justify-content: flex-start;
    left: ${({ showNavbar }) => (showNavbar === true ? "0" : "-200%")};

    -webkit-box-shadow: 5px 12px 20px -10px #000000;
    box-shadow: 5px 12px 20px -10px #000000;

    top: 0;
    padding: 0 50px 0 20px;
    height: 100vh;
    background-color: var(--primary-bg);

    transition: left 150ms ease-in-out;
  }

  @media (min-width: 1024px) {
    ${Wrapper} {
      display: none;
    }
  }
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  width: fit-content;
  overflow: hidden;

  top: 100%;
  left: 0;
  border-radius: 10px;

  -webkit-box-shadow: 5px 12px 20px -10px #000000;
  box-shadow: 5px 12px 20px -10px #000000;

  a {
    color: var(--secondary-text);
    opacity: 0.75;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    padding: 5px 20px;
    width: 100%;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  @media (max-width: 1024px) {
    margin-top: 5px;
    position: static;
    width: calc(100% + 50px);
    border-radius: 0 0 0 10px;

    animation: ${DropdownAnimationMin} 150ms ease-in-out 0s 1;
  }

  @media (min-width: 1024px) {
    animation: ${DropdownAnimationMax} 150ms ease-in-out 0s 1;
  }
`;

export const NavItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  height: 100%;
  font-size: 18px;

  > a {
    text-decoration: none;
    color: white;
    display: flex;
    flex-direction: column;
    margin: 0;
    &:after {
      content: "";
      height: 1px;
      width: 0%;
      background-color: white;
      transition: width 150ms ease-in-out;
    }
  }

  &:hover {
    > a {
      &:after {
        width: 100%;
      }
    }

    ${Dropdown} {
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: 1024px) {
    height: fit-content;
    padding-left: 0;
    align-items: flex-start;
  }
`;

export const NavbarButton = styled.button`
  margin: 0;
  padding: 0;
  border: 0;
  height: 100%;
  width: 48px;
  background-color: inherit;
  color: white;

  font-size: 48px;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const NavbarExit = styled.div`
  height: fit-content;
  width: fit-content;
  cursor: pointer;
  position: absolute;
  right: 16px;
  top: 40px;
  font-size: 16px;
  line-height: 1;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const PageCover = styled.div`
  display: ${({ showNavbar }) => (showNavbar === true ? "block" : "none")};
  position: absolute;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--primary-bg);
  opacity: 0.75;

  @media (min-width: 1024px) {
    display: none;
  }
`;
