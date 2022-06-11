import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1330px;
  padding: 50px 15px;
  padding-bottom: 0;
  margin: auto;
  display: flex;
  position: relative;
  justify-content: center;

  @media only screen and (max-width: 1441px) {
    max-width: 1200px;
  }

  @media only screen and (max-width: 1301px) {
    max-width: 1100px;
  }
  @media only screen and (max-width: 1201px) {
    max-width: 1100px;
  }
  @media only screen and (max-width: 1112px) {
    max-width: 1024px;
  }
  @media only screen and (max-width: 1100px) {
    max-width: 980px;
  }
  @media only screen and (max-width: 1024px) {
    max-width: 900px;
  }
  @media only screen and (max-width: 769px) {
    max-width: 650px;
  }
  @media only screen and (max-width: 700px) {
    max-width: 600px;
  }

  button {
    outline: none;
  }

  &:last-of-type {
    margin-bottom: 100px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const FormRow = styled(Row)`
  gap: 20px;
  margin: 10px 0;
`;

export const Picture = styled.div`
  width: 50%;
  height: fit-content;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 769px) {
    display: none;
  } ;
`;

export const BigImg = styled.div`
  aspect-ratio: 7/12;
  position: relative;
  width: ${({ width }) => (width ? `${width}` : "60%")};
  border-radius: 20px;
  background: url(${({ src }) => (src ? `${src}` : null)});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 50px;
  @media (max-width: 1301px) {
    width: 70%;
  }

  @media (max-width: 1100px) {
    width: 70%;
  }
  @media (max-width: 1024px) {
    width: 50%;
  }
  @media (max-width: 769px) {
    width: 100%;
    padding-left: 0;
  }
`;
export const FormCol = styled(Column)`
  padding-left: 0;
  width: 100%;
`;

export const InputForm = styled.input`
  border: 1px solid white;
  background-color: var(--primary-bg);
  border-radius: 10px;
  width: 100%;
  height: 56px;
  padding: 10px 20px;
  color: white;
`;

export const SubscribeButton = styled.button`
  background-color: var(--primary-bg);
  border-radius: 40px;
  border: 2px solid var(--secondary-bg);
  color: var(--secondary-bg);
  width: fit-content;
  padding: 5px 50px;
  margin: 20px 0;

  &:hover {
    background-color: var(--secondary-bg);
    color: white;
  }
`;

export const SubmitButton = styled(SubscribeButton)`
  margin: 20px auto;
  margin-bottom: 0;
`;
