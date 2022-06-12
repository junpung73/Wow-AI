import styled from "styled-components/macro";

export const Wrapper = styled.div`
  max-width: 1330px;
  width: 100%;
  padding: 50px 15px;
  padding-bottom: 0;
  margin: auto;
  display: flex;
  position: relative;
  justify-content: center;
  scroll-snap-align: start;

  @media only screen and (max-width: 1441px) {
    max-width: 1200px;
  }

  @media only screen and (max-width: 1301px) {
    max-width: 1100px;
  }

  button {
    outline: none;
  }

  &:first-of-type {
    margin-top: 50px;
  }

  &:last-of-type {
    margin-bottom: 100px;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const WrapTopic = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 50px 0;
  gap: 20px;
  white-space: nowrap;

  a {
    opacity: 0.6;
    color: white;
    text-decoration: none;

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 700px) {
    font-size: 12px;
    gap: 0;
    justify-content: space-between;
  }
`;

export const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;

  @media (max-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Item = styled.a`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  gap: 10px;
  padding-bottom: 20px;
  border-radius: 20px;

  &:hover {
    background-color: #1a1a1a;
  }
  img {
    width: 100%;
    border-radius: 20px;
  }
  p {
    margin: 0;
    font-size: 16px;
    color: #888888;
    padding: 0 10px;

    @media (max-width: 528px) {
      font-size: 8px;
    }
  }
  h5 {
    color: white;
    padding: 0 10px;
    @media (max-width: 528px) {
      font-size: 14px;
    }
  }
`;

export const LoadMoreButton = styled.button`
  background-color: var(--primary-bg);
  border-radius: 40px;
  border: 2px solid var(--secondary-bg);
  color: var(--secondary-bg);
  width: fit-content;
  padding: 5px 50px;
  margin: 50px auto;

  &:hover {
    background-color: var(--secondary-bg);
    color: white;
  }
`;
