import styled from "styled-components/macro";
import { LoadingAnimation, LoadingBarAnimation } from "./animation";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  height: 100vh;

  font-size: 48px;

  div {
    position: relative;
    display: flex;
    flex-direction: column;
    animation: ${LoadingAnimation} 3s infinite linear;

    ::after {
      position: absolute;
      background-color: white;
      content: "";
      height: 2px;
      border: 100px;
      animation: ${LoadingBarAnimation} 3s infinite linear;
      bottom: 15%;
    }
  }
`;
