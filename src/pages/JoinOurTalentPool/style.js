import { flexbox } from "@mui/system";
import styled from "styled-components/macro";
import { SwiperSlide } from "swiper/react";

export const SubTitle = styled.h1`
  color: var(--secondary-bg);

  @media (max-width: 700px) {
    font-size: 25px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;

  h1 {
    margin-bottom: 50px;
    font-size: 104px;

    @media (max-width: 1100px) {
      font-size: 70px;
    }

    @media (max-width: 1024px) {
      font-size: 60px;
    }
    @media (max-width: 700px) {
      font-size: 50px;
    }
  }

  button {
    color: var(--primary-text);
    background-color: var(--secondary-bg);
    border-radius: 50px;
    border: 0;
    width: fit-content;
    padding: 0 180px;
    height: 55px;
    white-space: nowrap;

    &:hover {
      color: var(--secondary-text);
      background-color: white;
    }

    @media (max-width: 1100px) {
      padding: 0 130px;
    }

    @media (max-width: 1024px) {
      padding: 0 80px;
    }

    @media (max-width: 700px) {
      padding: 0 70px;
      width: 100%;
    }
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const Picture = styled.div`
  width: 50%;
  height: fit-content;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 700px) {
    display: none;
  }
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
  position: relative;
  > img {
    margin: auto 70px;
    width: 125px;
  }

  @media (max-width: 769px) {
    width: 100%;
  }
`;

export const JoinButton = styled.button`
  background-color: var(--primary-bg);
  color: white;
  border: 2px solid;
  border-radius: 50px;
  border-color: var(--secondary-bg);
  width: 400px;
  height: 40px;
  margin-bottom: 30px;
  margin-top: 20px;

  &:hover {
    background-color: var(--secondary-bg);
  }

  @media (max-width: 769px) {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
`;

export const CardItem = styled(Column)`
  flex: 1 1 33%;
  margin: 0 30px;
  /* height: 100%; */

  div {
    display: flex;
    height: 100px;
    aspect-ratio: 1;
    margin: 50px auto;
    justify-content: center;
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
  @media (max-width: 700px) {
    margin: 0;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: relative;
  align-items: center;

  ${Column} {
    height: 100%;
  }
`;
export const View = styled(Row)`
  overflow: hidden;
`;

export const ConRow = styled(Row)`
  @media (max-width: 769px) {
    margin-top: 20px;
    &:first-of-type {
      border-bottom: 1px solid white;
    }
    flex-direction: column-reverse;
    img {
      margin: auto;
    }
  }
`;

export const ConCol = styled(Column)`
  &:first-of-type {
    border: solid white;
    border-width: 0 1px 1px 0;
    padding: 50px;
    width: fit-content;

    @media (max-width: 1024px) {
      padding: 20px;
    }

    @media (max-width: 769px) {
      /* border-width: 0; */
      padding: 0;
      border: 0;
    }
  }

  &:last-of-type {
    border: solid white;
    border-width: 0 0 1px 1px;
    padding: 50px;
    @media (max-width: 1024px) {
      padding: 20px;
    }
    @media (max-width: 769px) {
      padding: 0;
      /* border-width: 0; */
      border: 0;
    }
  }
  @media (max-width: 1024px) {
    padding: 0px;
  }

  @media (max-width: 769px) {
    border-width: 0;
    border: 0;
  }
`;

export const Carousel = styled(Row)`
  align-items: center;
  position: relative;
  width: 100%;

  transform: translateX(
    ${({ translate }) => {
      return translate ? `${translate}%` : "0";
    }}
  );
  transition: transform 150ms ease-in-out;

  p {
    margin: 0;
  }

  img {
    width: 48px;
    border-radius: 50%;
  }
  @media (max-width: 769px) {
    gap: 0;
  }
`;

export const Card = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  position: relative;
  color: white;

  > img {
    margin: auto 70px;
    width: 125px;
  }

  :hover {
    color: white;
  }

  @media (max-width: 769px) {
    width: 100%;
  }
  flex: 1 1 25%;
  border-radius: 30px;
  background-color: var(--secondary-text);
  padding: 50px 30px;
  height: fit-content;
  aspect-ratio: 1;

  /* &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  } */

  @media (max-width: 1301px) {
    padding: 30px 20px;
  }

  @media (max-width: 1024px) {
    aspect-ratio: 2;
  }

  @media (max-width: 769px) {
    aspect-ratio: 3;
  }

  @media (max-width: 700px) {
    margin: 10px 0;
    width: 100%;
    aspect-ratio: 2;
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
  z-index: 1;

  &:first-of-type {
    left: 0;
    margin-left: -80px;
    @media (max-width: 769px) {
      margin-left: -30px;
    }
  }

  &:last-of-type {
    right: 0;
    margin-right: -80px;
    @media (max-width: 769px) {
      margin-right: -30px;
    }
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
  justify-content: space-between;
  background-color: white;
  color: var(--secondary-text);
  aspect-ratio: 1;

  @media (max-width: 769px) {
    aspect-ratio: 2;
    flex: 1 0 100%;
    width: 100%;
  }

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
  display: flex;
  aspect-ratio: 1;
  background-color: transparent;
  color: white;
  padding: 0;
  border-radius: 10px;
  flex: 1 0 33%;
  p {
    margin: 8px 0;
    font-size: 12px;
    color: #b8b8b8;
    padding: 0 5px;
  }
  h6 {
    padding: 0 5px;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }

  img {
    border-radius: 10px;
    border: 0;
    margin: 0;
    /* height: 267px; */
    width: 100%;
  }
  &:hover {
    background-color: #1a1a1a;
    color: white;
  }

  @media (max-width: 769px) {
    aspect-ratio: 1.2;
    flex: 1 0 100%;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 769px) {
    grid-template-columns: 1fr;
  }
`;

export const AskRow = styled(Row)`
  gap: 50px;

  @media (max-width: 769px) {
    flex-direction: column-reverse;
    gap: 10px;
  }
`;

export const AskCol = styled(Column)`
  width: 150%;
  @media (max-width: 769px) {
    width: 100%;
  }
`;

export const PadDiv = styled.div`
  padding: 0 5px;
  flex: 1 0 calc(100% / 3);

  @media (max-width: 769px) {
    aspect-ratio: 2;
    flex: 1 0 100%;
  }
`;

export const PadDivBlog = styled(PadDiv)`
  @media (max-width: 769px) {
    aspect-ratio: 1.2;
  }
`;

export const StyledNavButton = styled.button`
  position: absolute;
  top: calc(50% - 1.5rem);
  z-index: 1;
  background: var(--secondary-text);
  border: none;
  padding: 0;
  width: 3rem;
  height: 3rem;
  font-size: 24px;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: purple;
  }

  &:first-of-type {
    left: 0;
    border-radius: 0 50% 50% 0;
  }

  &:last-of-type {
    right: 0;
    border-radius: 50% 0 0 50%;
  }

  &[disabled] {
    opacity: 0.8;
    cursor: default;
  }
`;
export const StyledSlider = styled.div`
  display: flex;
  align-items: center;
  max-width: 100;

  .swipe-slide {
    padding: 0 2.5rem;
  }
`;
