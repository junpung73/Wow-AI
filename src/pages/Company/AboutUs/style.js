import styled from "styled-components/macro";

export const Topic = styled.div`
  height: 45vw;
  background-image: url(images/Group39457.png);
  background-size: cover;
  display: flex;
  justify-content: center;
  color: var(--primary-text);
  align-items: center;
  font-size: 98px;

  @media (max-width: 1100px) {
    font-size: 64px;
  }

  @media (max-width: 769px) {
    font-size: 48px;
  }
`;
