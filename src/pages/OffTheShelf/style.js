import styled from "styled-components/macro";

export const Wrapper = styled.div`
  max-width: 1330px;
  width: 90%;
  padding: 100px 12px;
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
    width: 90%;
    min-width: 320px;
  }

  button {
    outline: none;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;

  ul {
    list-style-type: none;
  }

  li {
    line-height: 2;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const SelectButtonGroup = styled(Row)`
  width: fit-content;
  gap: 20px;
`;

export const SelectButtonRow = styled(Row)`
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const TableRow = styled(Row)`
  border: 2px solid white;
  border-bottom: 0;

  p {
    flex: 1 1 20%;
    text-align: center;
    margin: 5px 0;

    &:nth-of-type(2) {
      color: var(--secondary-bg);
    }
  }

  &:last-of-type {
    border-radius: 0 0 10px 10px;
    border-bottom: 2px solid white;
  }

  &:first-of-type {
    border: 2px solid white;
    border-radius: 10px 10px 0 0;
    margin-bottom: 20px;

    p {
      color: white;
    }
  }
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

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  font-size: 20px;
  color: white;
  width: 50%;
  margin-left: 36px;
  margin-top: 14px;

  &:before {
    position: absolute;
    content: "";
    background: url("images/Check.svg") no-repeat;
    background-size: contain;
    background-position: center;
    aspect-ratio: 1;
    height: 18px;
    margin-left: -24px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Picture = styled.div`
  width: 50%;
  height: fit-content;
  display: flex;
  justify-content: flex-end;
`;

export const BigImg = styled.div`
  aspect-ratio: 7/12;
  position: relative;
  width: 60%;
  border-radius: 20px;
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
  width: 60%;
  margin-left: -20%;
  bottom: 20%;
  border: 5px solid var(--primary-bg);
`;

export const ContactUsButton = styled.button`
  background-color: #1e1e1e;
  padding: 10px 0;
  width: 60%;
  position: absolute;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  border: 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  bottom: -5%;
  margin: auto;

  p {
    margin: 0;
  }

  span,
  svg {
    color: var(--secondary-bg);
  }
`;

export const SelectButton = styled.button`
  width: 150px;
  background-color: var(--primary-bg);
  border: ${({ btName, dataset }) =>
    btName === dataset
      ? "2px solid var(--secondary-bg)"
      : "2px solid rgba(255, 255, 255, 25%)"};
  border-radius: 50px;
  color: ${({ btName, dataset }) =>
    btName === dataset ? "white" : "rgba(255, 255, 255, 25%)"};

  &:hover {
    color: white;
    border-color: white;
  }
`;

export const DropdownButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1px 10px;
  width: 198px;
  border-radius: 50px;
  color: white;
  border: 2px solid white;
  background-color: transparent;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: calc(100% + 20px);
  left: 0;
  padding: 10px 0;
  width: 100%;
  background-color: var(--primary-bg);
  border-radius: 10px;
  transform: ${({ showDropdown }) =>
    showDropdown === true ? "scaleY(1)" : "scaleY(0)"};

  transform-origin: center top;
  transition: transform 150ms ease-in-out;
  box-shadow: 5px 5px 12px -4px rgba(0, 0, 0, 1);
  -webkit-box-shadow: 5px 5px 12px -4px rgba(0, 0, 0, 1);
  -moz-box-shadow: 5px 10px 12px -4px rgba(0, 0, 0, 1);
`;

export const DropdownItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 5px;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    color: var(--secondary-bg);
  }
`;

export const PageSwitch = styled.span`
  margin-top: 20px;
  color: rgba(255, 255, 255, 25%);
  text-align: center;

  svg {
    cursor: pointer;
    margin: 0 20px;
    &:hover {
      color: white;
    }
  }
`;