import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1330px;
  width: 90%;
  padding: 100px 12px;

  @media only screen and (max-width: 1441px) {
    max-width: 1200px;
  }

  @media only screen and (max-width: 1301px) {
    max-width: 1100px;
    width: 90%;
    min-width: 320px;
  }

  button {
    outline: none;
  }
`;

export const SubTitle = styled.h1`
  margin-bottom: 40px;
  color: var(--secondary-bg);
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;

  h1 {
    margin-bottom: 50px;
  }

  button {
    color: var(--primary-text);
    background-color: var(--secondary-bg);
    border-radius: 50px;
    border: 0;
    width: 525px;
    height: 55px;

    &:hover {
      color: var(--secondary-text);
      background-color: white;
    }
  }
`;

export const Picture = styled.div`
  width: 50%;
  height: fit-content;
  display: flex;
  justify-content: flex-end;
`;

export const BigImg = styled.div`
  aspect-ratio: 1;
  width: 90%;
  border-radius: 20px;
  position: relative;
  background: url(${({ src }) => (src ? `${src}` : null)});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const SmallImg = styled(BigImg)`
  aspect-ratio: 3/4;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 30%;
  margin-left: -40px;
  margin-bottom: -40px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;

  > img {
    margin: auto 70px;
    width: 125px;
  }
`;

export const JoinButton = styled.button`
  background-color: var(--primary-bg);
  color: white;
  border-radius: 50px;
  border-color: var(--secondary-bg);
  width: 400px;
  height: 40px;
  margin-bottom: 30px;
  margin-top: 20px;

  &:hover {
    background-color: var(--secondary-bg);
  }
`;

export const CardItem = styled(Column)`
  flex: 1 1 33%;
  margin: 0 30px;

  div {
    display: flex;
    height: 100px;
    aspect-ratio: 1;
    margin: 50px auto;
    justify-content: center;
    /* > img {
      margin: 50px auto;
      width: 100px;
    } */
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const Carousel = styled(Row)`
  align-items: center;
  position: relative;

  p {
    margin: 0;
  }

  img {
    width: 48px;
    border-radius: 50%;
  }
`;

export const Card = styled(Column)`
  flex: 1 1 25%;
  border-radius: 30px;
  background-color: var(--secondary-text);
  padding: 50px 30px;
  margin: 20px;
  height: fit-content;
  aspect-ratio: 1;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const NavigateButton = styled.button`
  background-color: var(--secondary-text);
  border-radius: 50%;
  width: fit-content;
  height: fit-content;
  padding: 10px;
  border: 0;
  position: absolute;

  &:first-of-type {
    left: 0;
    margin-left: -80px;
  }

  &:last-of-type {
    right: 0;
    margin-right: -80px;
  }

  div {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    color: white;

    svg {
      aspect-ratio: 1;
      height: 100%;
      width: 100%;
    }
  }
`;

export const Quote = styled(Card)`
  display: flex;
  justify-content: space-between;
  background-color: white;
  color: var(--secondary-text);
  flex: 1 1 33%;

  &:hover {
    background-color: var(--secondary-text);
    color: white;
  }
`;

export const TalentButton = styled.button`
  background-color: var(--secondary-bg);
  color: white;
  border-radius: 60px;
  border: 0;
  width: fit-content;
  padding: 5px 80px;
  margin: 50px auto;

  &:hover {
    background-color: var(--secondary-text);
  }
`;

export const BlogItem = styled(Card)`
  background-color: transparent;
  color: white;
  padding: 0;
  margin: 10px;
  p {
    margin: 8px 0;
    font-size: 12px;
    color: #b8b8b8;
  }

  img {
    border-radius: 10px;
    border: 0;
    margin: 0;
    height: 267px;
    width: 100%;
  }
`;
