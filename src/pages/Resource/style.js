import styled from "styled-components/macro";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const WrapTopic = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px 0;
  margin-bottom: 30px;
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
  margin: 20px auto;
  margin-bottom: 50px;

  &:hover {
    background-color: var(--secondary-bg);
    color: white;
  }
`;
