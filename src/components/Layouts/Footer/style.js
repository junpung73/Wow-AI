import styled from "styled-components";
import { Container } from "../../Container";

export const Wrapper = styled.div`
  width: 100%;
  border-top: 2px solid gray;
`;

export const FooterContainer = styled(Container)`
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 30px 15px;
  display: flex;
  justify-content: space-between;
  scroll-snap-align: none;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;
export const LogoCol = styled(Col)`
  justify-content: start;
  padding-right: 10px;

  img {
    width: 150px;
    margin-bottom: 20px;
  }

  h3 {
    font-weight: normal;
  }
  span {
    white-space: nowrap;
  }
`;

export const ListCol = styled(Col)`
  white-space: nowrap;
  padding-left: 10px;
  width: fit-content;
  h3 {
    padding: 10px 0;
  }

  a {
    padding-left: 20px;
    text-decoration: none;
    color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    width: fit-content;

    :before {
      position: absolute;
      top: 50%;
      left: 0;
      content: "";
      height: 1px;
      width: 15px;
      border: 1px solid var(--secondary-bg);
    }

    :after {
      content: "";
      height: 1px;
      width: 0%;
      background-color: white;
      transition: width 150ms ease-in-out;
    }

    &:hover {
      :after {
        width: 100%;
      }
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Reserved = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  h3 {
    color: #b8b8b8;
    font-weight: 200;
    letter-spacing: 5px;
    white-space: nowrap;

    @media (max-width: 769px) {
      letter-spacing: 2px;
    }
  }
`;

export const SocialRow = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: start;
  margin-top: 20px;
`;

export const Social = styled.a`
  aspect-ratio: 1;
  background-color: white;
  width: 30px;
  height: 30px;
  padding: 7px;
  border-radius: 50%;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  cursor: pointer;

  svg {
    color: var(--primary-bg);
    font-size: 16px;
  }

  &:hover {
    svg {
      color: var(--secondary-bg);
    }
  }
`;
