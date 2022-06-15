import styled from "styled-components/macro";

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;

  p {
    font-size: var(--medium-text-3);
  }

  h2 {
    font-size: var(--medium-text-1);
  }

  ul {
    list-style-type: none;
  }

  li {
    line-height: 2;
  }

  @media (max-width: 769px) {
    width: 100%;
    h2 {
      font-size: var(--medium-text-2);
    }
  } ;
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
  justify-content: space-between;
  @media (max-width: 769px) {
    gap: 10px;
    width: 100%;
    &:last-of-type {
      justify-content: flex-start;
    }
  }
`;

export const SelectButtonRow = styled(Row)`
  justify-content: space-between;
  margin-bottom: 30px;

  @media (max-width: 769px) {
    flex-direction: column;
    gap: 20px;
    white-space: nowrap;
  }
`;

export const TableRow = styled(Row)`
  border: 2px solid white;
  border-bottom: 0;
  height: 48px;

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

  @media (max-width: 568px) {
    font-size: 12px;
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
  font-size: var(--medium-text-3);

  @media (max-width: 769px) {
    margin: 20px auto;
  }

  &:hover {
    background-color: var(--secondary-bg);
    color: white;
  }
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  font-size: var(--normal-text);
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

  /* @media (max-width: 1100px) {
    font-size: 14px;
  } */
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
  padding: 10px 50px;
  width: fit-content;
  position: absolute;
  color: white;
  font-size: var(--medium-text-3);
  border-radius: 10px;
  border: 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  bottom: -5%;
  margin: auto;
  white-space: nowrap;
  p {
    margin: 0;
  }

  span,
  svg {
    color: var(--secondary-bg);
  }

  @media (max-width: 1100px) {
    bottom: -15%;
  }

  @media (max-width: 769px) {
    font-size: var(--normal-text);
    padding: 10px 0;
    width: 100%;
    max-width: fit-content;
  } ;
`;

export const SelectButton = styled.button`
  width: fit-content;
  font-size: var(--normal-text);
  padding: 0 30px;
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
  @media (max-width: 769px) {
    padding: 0 5px;
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
  font-size: var(--normal-text);

  @media (max-width: 769px) {
    width: 128px;
    padding: 1px 5px;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: calc(100% + 20px);
  left: 0;
  padding: 10px 0;
  width: fit-content;
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
