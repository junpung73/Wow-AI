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
  justify-content: center;
  padding-right: 10px;

  img {
    width: 120px;
    margin-bottom: 20px;
  }

  h3 {
    font-weight: normal;
  }
`;

export const ListCol = styled(Col)`
  white-space: nowrap;
  padding-left: 10px;
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
  text-transform: uppercase;
  display: flex;
  width: 100%;
  justify-content: center;

  h3 {
    font-weight: 200;
  }
`;
