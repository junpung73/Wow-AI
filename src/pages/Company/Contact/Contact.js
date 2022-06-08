import React from "react";
import {
  Wrapper,
  Row,
  BigImg,
  Picture,
  Column,
  InputForm,
  SubmitButton,
} from "./style";

const Contact = () => {
  return (
    <div>
      {/* <Dataset /> */}
      <Wrapper>
        <Row>
          <Picture>
            <BigImg src="images/image20.png" width="100%" />
          </Picture>
          <Column style={{ padding: "30px 50px", paddingRight: "0" }}>
            <h3>
              Want to build your own{" "}
              <span style={{ color: "var(--secondary-bg)" }}>data set</span>?
            </h3>
            <p>
              Contact us now to learn how we can collect a custom data set for
              your unique AI solution.
            </p>
            <Row style={{ gap: "20px", margin: "10px 0" }}>
              <Column>
                <p>First Name *</p>
                <InputForm></InputForm>
              </Column>
              <Column>
                <p>Last Name *</p>
                <InputForm></InputForm>
              </Column>
            </Row>
            <Row style={{ margin: "10px 0" }}>
              <Column>
                <p>Email *</p>
                <InputForm type="email"></InputForm>
              </Column>
            </Row>
            <Row style={{ gap: "20px", margin: "10px 0" }}>
              <Column>
                <p>Telephone *</p>
                <InputForm type="tel"></InputForm>
              </Column>
              <Column>
                <p>Company *</p>
                <InputForm></InputForm>
              </Column>
            </Row>
            <Row style={{ gap: "20px", margin: "10px 0" }}>
              <Column>
                <p>Comment *</p>
                <InputForm style={{ height: "100px" }}></InputForm>
              </Column>
            </Row>
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
    </div>
  );
};

export default Contact;
