import React from "react";
import {
  Wrapper,
  Row,
  BigImg,
  Picture,
  Column,
  InputForm,
  SubmitButton,
  FormRow,
  FormCol,
  Container,
} from "./style";
import Header from "../../../components/Layouts/Header/Header";
import Footer from "../../../components/Layouts/Footer";

const Contact = () => {
  return (
    <Container>
      <Header />
      {/* <Dataset /> */}
      <Wrapper>
        <Row>
          <Picture>
            <BigImg src="images/image20.png" width="100%" />
          </Picture>
          <Column>
            <h3>
              Want to build your own{" "}
              <span style={{ color: "var(--secondary-bg)" }}>data set</span>?
            </h3>
            <p>
              Contact us now to learn how we can collect a custom data set for
              your unique AI solution.
            </p>
            <FormRow>
              <FormCol>
                <p>First Name *</p>
                <InputForm></InputForm>
              </FormCol>
              <FormCol>
                <p>Last Name *</p>
                <InputForm></InputForm>
              </FormCol>
            </FormRow>
            <FormRow>
              <FormCol>
                <p>Email *</p>
                <InputForm type="email"></InputForm>
              </FormCol>
            </FormRow>
            <FormRow>
              <FormCol>
                <p>Telephone *</p>
                <InputForm type="tel"></InputForm>
              </FormCol>
              <FormCol>
                <p>Company *</p>
                <InputForm></InputForm>
              </FormCol>
            </FormRow>
            <FormRow>
              <FormCol>
                <p>Comment *</p>
                <InputForm style={{ height: "100px" }}></InputForm>
              </FormCol>
            </FormRow>
            <SubmitButton>Submit</SubmitButton>
          </Column>
        </Row>
      </Wrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          height: "40vh",
        }}
      >
        <h5 className="title-description">
          Contact Details <br />
          Address: 19W 34TH ST STE 1018, NY, USA <br />
          Email: contact@wow-ai.com
        </h5>
      </div>
      <Footer />
    </Container>
  );
};

export default Contact;
