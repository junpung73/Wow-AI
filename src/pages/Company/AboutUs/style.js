import styled from "styled-components/macro";

export const Topic = styled.div`
  height: 45vw;
  background-image: url("images/1.webp");
  background-size: cover;
  display: flex;
  justify-content: center;
  color: var(--primary-text);
  align-items: center;
  font-size: var(--large-text);
  text-transform: uppercase;
`;

export const UpLine = styled.div`
  height: 200px;
  width: 100px;
  border-width: 1px 0px 0px 1px;
  border-style: solid;
  border-color: var(--secondary-bg);
  position: relative;

  &:before {
    content: "";
    width: 14px;
    height: 14px;
    position: absolute;
    top: -7px;
    left: -7px;
    background-color: var(--secondary-bg);
  }
`;

export const DownLine = styled(UpLine)`
  border-bottom: 1px solid var(--secondary-bg);
  &:after {
    content: "";
    width: 14px;
    height: 14px;
    position: absolute;
    bottom: -7px;
    left: -7px;
    background-color: var(--secondary-bg);
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: start;
  justify-content: space-between;
`;
export const ContentCol = styled(Column)`
  width: 100%;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
`;

export const InContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  position: absolute;
  top: -13px;
`;

export const LastInContent = styled(InContent)`
  bottom: -10px;
`;

export const Img = styled.div`
  width: 100%;
  padding: 30px;
  aspect-ratio: 1;

  @media (max-width: 769px) {
    max-width: 300px;
    margin: auto;
  }
`;

export const Col = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

export const Circle = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid white;
  justify-content: center;
  align-items: center;
  position: relative;
  h3 {
    width: fit-content;
    color: var(--secondary-bg);
  }

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid white;
    left: -10px;
  }
  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 45%;
    border: 1px solid white;
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  max-width: 150px;
  border: 1px dashed var(--secondary-bg);
  margin-top: 13%;

  @media (max-width: 769px) {
    border: 0;
  }
`;
