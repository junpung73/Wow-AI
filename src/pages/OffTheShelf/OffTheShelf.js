import React, { useState } from "react";
import * as bs from "react-icons/bs";
import {
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
import Header from "../../components/Layouts/Header/Header";
import Footer from "../../components/Layouts/Footer/Footer";
import { Container } from "../../components/Container";
import BuildDataset from "../../components/public/BuildDataset";

const OffTheShelf = () => {
  const [datasetSelect, setDatasetSelect] = useState("audio");
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <Header />
      <Container>
        <SubContainer>
          <h1>Off-the-Shelf (OTS) AI Training Datasets</h1>
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
          <span>
            <p>Contact Us</p>
          </span>
          <bs.BsArrowRight></bs.BsArrowRight>
        </ContactUsButton>
      </Container>
      <Container style={{ marginTop: "100px" }}>
        <Column>
          <h2 style={{ marginBottom: "15px" }}>Dataset</h2>
          <Row>
            <SelectButtonRow>
              <SelectButtonGroup>
                <SelectButton
                  btName="audio"
                  dataset={datasetSelect}
                  onClick={() => setDatasetSelect("audio")}
                >
                  <p>Audio Dataset</p>
                </SelectButton>
                <SelectButton
                  btName="ocr"
                  dataset={datasetSelect}
                  onClick={() => setDatasetSelect("ocr")}
                >
                  <p>OCR Dataset</p>
                </SelectButton>
                <SelectButton
                  btName="medical"
                  dataset={datasetSelect}
                  onClick={() => setDatasetSelect("medical")}
                >
                  <p>Medical Dataset</p>
                </SelectButton>
              </SelectButtonGroup>
              <SelectButtonGroup>
                <DropdownButton
                  onClick={() => setShowDropdown(() => !showDropdown)}
                >
                  <p>Imaging Data</p>
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
              <p>BRAIN</p>
              <p>3618</p>
              <p>MRI</p>
              <p>Dicom</p>
            </TableRow>
            <TableRow>
              <p>2</p>
              <p>SKULL</p>
              <p>9</p>
              <p>MRI</p>
              <p>Dicom</p>
            </TableRow>
            <TableRow>
              <p>3</p>
              <p>HEAD</p>
              <p>53144</p>
              <p>MRI</p>
              <p>Dicom</p>
            </TableRow>
            <TableRow>
              <p>4</p>
              <p>NECK</p>
              <p>25</p>
              <p>MRI</p>
              <p>Dicom</p>
            </TableRow>
            <TableRow>
              <p>5</p>
              <p>CHEST</p>
              <p>29</p>
              <p>MRI</p>
              <p>Dicom</p>
            </TableRow>
            <TableRow>
              <p>6</p>
              <p>ABDOMEN</p>
              <p>316</p>
              <p>MRI</p>
              <p>Dicom</p>
            </TableRow>
            <TableRow>
              <p>7</p>
              <p>CSPINE</p>
              <p>726</p>
              <p>MRI</p>
              <p>Dicom</p>
            </TableRow>
            <TableRow>
              <p>8</p>
              <p>TSPINE</p>
              <p>9</p>
              <p>MRI</p>
              <p>Dicom</p>
            </TableRow>
            <TableRow>
              <p>9</p>
              <p>LSPINE</p>
              <p>7287</p>
              <p>MRI</p>
              <p>Dicom</p>
            </TableRow>
          </Column>
          <PageSwitch>
            <bs.BsChevronLeft />
            <span>
              <h4>1/9</h4>
            </span>
            <bs.BsChevronRight />
          </PageSwitch>
        </Column>
      </Container>
      <Container>
        <BuildDataset />
      </Container>
      <Footer />
    </>
  );
};

export default OffTheShelf;
