import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Dataset from "../../components/public/Dataset";
import * as bs from "react-icons/bs";
import {
  Wrapper,
  Row,
  SubContainer,
  SubscribeButton,
  ListItem,
  Column,
  Picture,
  BigImg,
  SmallImg,
  ContactUsButton,
  SelectButtonGroup,
  SelectButton,
  SelectButtonRow,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
  TableRow,
  PageSwitch,
} from "./style";

const OffTheShelf = () => {
  const [datasetSelect, setDatasetSelect] = useState("audio");
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div>
      <Wrapper>
        <SubContainer>
          <h2>Off-the-Shelf (OTS) AI Training Datasets</h2>
          <p>
            Index of Ready-made Datasets for Computer Vision and Natural
            Language Processing
          </p>
          <SubscribeButton>Subscribe for Updates</SubscribeButton>
          <Column>
            <Row>
              <ListItem>Instant access</ListItem>
              <ListItem>10000+ Audio Hours</ListItem>
            </Row>
            <Row>
              <ListItem>
                980 000+ Imaging datasets in multiple specialities
              </ListItem>
              <ListItem>Trustworthy sources </ListItem>
            </Row>
            <Row>
              <ListItem>Affordable price</ListItem>
              <ListItem>24/7 Support</ListItem>
            </Row>
          </Column>
        </SubContainer>
        <Picture>
          <BigImg src="images/Data.svg">
            <SmallImg src="images/glassphone.png"></SmallImg>
          </BigImg>
        </Picture>
        <ContactUsButton>
          <p>Plug-in the data you've been missing</p>
          <span>Contact Us</span>
          <bs.BsArrowRight></bs.BsArrowRight>
        </ContactUsButton>
      </Wrapper>
      <Wrapper>
        <Column>
          <h1>Dataset</h1>
          <Row>
            <SelectButtonRow>
              <SelectButtonGroup>
                <SelectButton
                  btName="audio"
                  dataset={datasetSelect}
                  onClick={() => setDatasetSelect("audio")}
                >
                  Audio Dataset
                </SelectButton>
                <SelectButton
                  btName="ocr"
                  dataset={datasetSelect}
                  onClick={() => setDatasetSelect("ocr")}
                >
                  OCR Dataset
                </SelectButton>
                <SelectButton
                  btName="medical"
                  dataset={datasetSelect}
                  onClick={() => setDatasetSelect("medical")}
                >
                  Medical Dataset
                </SelectButton>
              </SelectButtonGroup>
              <SelectButtonGroup>
                <DropdownButton
                  onClick={() => setShowDropdown(() => !showDropdown)}
                >
                  Imaging Data
                  {showDropdown === true ? (
                    <bs.BsChevronUp />
                  ) : (
                    <bs.BsChevronDown />
                  )}
                  <DropdownMenu showDropdown={showDropdown}>
                    <DropdownItem>Imaging Data</DropdownItem>
                    <DropdownItem>Medical Audio Data</DropdownItem>
                    <DropdownItem>Audio Data</DropdownItem>
                  </DropdownMenu>
                </DropdownButton>
              </SelectButtonGroup>
            </SelectButtonRow>
          </Row>
          <Column>
            <TableRow>
              <p>Sr no</p>
              <p>Body part</p>
              <p>Quantity</p>
              <p>Speciality</p>
              <p>Format</p>
            </TableRow>
            <TableRow>
              <p>1</p>
              <p>Sr no</p>
              <p>Sr no</p>
              <p>Sr no</p>
              <p>Sr no</p>
            </TableRow>
            <TableRow>
              <p>2</p>
              <p>Sr no</p>
              <p>Sr no</p>
              <p>Sr no</p>
              <p>Sr no</p>
            </TableRow>
            <TableRow>
              <p>3</p>
              <p>Sr no</p>
              <p>Sr no</p>
              <p>Sr no</p>
              <p>Sr no</p>
            </TableRow>
            <TableRow>
              <p>4</p>
              <p>Sr no</p>
              <p>Sr no</p>
              <p>Sr no</p>
              <p>Sr no</p>
            </TableRow>
            <TableRow>
              <p>5</p>
              <p>Sr no</p>
              <p>Sr no</p>
              <p>Sr no</p>
              <p>Sr no</p>
            </TableRow>
            <TableRow>
              <p>6</p>
              <p>Sr no</p>
              <p>Sr no</p>
              <p>Sr no</p>
              <p>Sr no</p>
            </TableRow>
            <TableRow>
              <p>7</p>
              <p>Sr no</p>
              <p>Sr no</p>
              <p>Sr no</p>
              <p>Sr no</p>
            </TableRow>
            <TableRow>
              <p>8</p>
              <p>Sr no</p>
              <p>Sr no</p>
              <p>Sr no</p>
              <p>Sr no</p>
            </TableRow>
            <TableRow>
              <p>9</p>
              <p>Sr no</p>
              <p>Sr no</p>
              <p>Sr no</p>
              <p>Sr no</p>
            </TableRow>
          </Column>
          <PageSwitch>
            <bs.BsChevronLeft />
            1/9
            <bs.BsChevronRight />
          </PageSwitch>
        </Column>
      </Wrapper>
      <Container>
        <Dataset />
      </Container>
    </div>
  );
};

export default OffTheShelf;