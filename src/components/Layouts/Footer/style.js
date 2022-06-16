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
    width: 170px;
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
  }
`;

export const SocialRow = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 30px;
  margin-top: 20px;
`;

export const Social = styled.div`
  aspect-ratio: 1;
  background-color: white;
  width: fit-content;
  padding: 15px;
  border-radius: 50%;

  svg {
    color: var(--primary-bg);
    width: 100%;
    font-size: 30px;
  }
`;
