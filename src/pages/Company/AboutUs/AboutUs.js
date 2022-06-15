import React from "react";

import {
  UpLine,
  Topic,
  DownLine,
  Column,
  InContent,
  Content,
  ContentCol,
  LastInContent,
  Row,
  Circle,
  Img,
  Col,
  Line,
} from "./style";
import Header from "../../../components/Layouts/Header/Header";
import Footer from "../../../components/Layouts/Footer/Footer";
import { Container } from "../../../components/Container";

const AboutUs = () => {
  return (
    <>
      <Header />
      <Topic>wow AI LLC</Topic>
      <Container>
        <p>
          Wow AI is a trusted partner that provides high-quality data for AI
          training in different languages at a large scale. We are experienced
          professionals with a track record of success in numerous types of data
          collecting. With a crowd of over 100,000 project contributors all over
          the world, we can provide massive, scalable high-quality data across
          data types. We also provide off-the-shelf data and tailor-made data
          for the success of your AI/ML projects. At Wow AI, we have
          high-quality QA and CQA personnel who maintain strong overall quality
          control of datasets adhering to reliability, performance, and client
          expectation. Many companies have successfully built their AI models
          with us. So do you!
        </p>
      </Container>
      <Container style={{ justifyContent: "start" }}>
        <Column>
          <UpLine></UpLine>
          <DownLine></DownLine>
        </Column>
        <ContentCol>
          <Content>
            <InContent>
              <h3>Mission</h3>
              <p>
                Wow AI focuses on delivering the highest quality of AI training
                data for a better AI algorithm
              </p>
            </InContent>
          </Content>
          <Content>
            <InContent>
              <h3>Vision</h3>
              <p>
                Become an all-in-one platform for all AI data services at a
                global scale
              </p>
            </InContent>
          </Content>
          <Content>
            <LastInContent>
              <h3>Values</h3>
              <p>
                A close-knit and trustworthy collection of global crowds
                Tech-driven mindsets
              </p>
            </LastInContent>
          </Content>
        </ContentCol>
      </Container>
      <Container style={{ justifyContent: "space-between" }}>
        <Row>
          <Col>
            <Img>
              <Circle>
                <h3>Quality</h3>
              </Circle>
            </Img>
            <p>
              Thanks to our unique tech, all of our contributors get answers
              instantly while working on projects; consequently we can deliver
              the highest quality AI data
            </p>
          </Col>
          <Line />
          <Col>
            <Img>
              <Circle>
                <h3>Scale</h3>
              </Circle>
            </Img>
            <p>
              With a crowd of over 100,000+ skilled freelancers locating around
              the global, we can handle any large- scale projects
            </p>
          </Col>
          <Line />
          <Col>
            <Img>
              <Circle>
                <h3>Budget</h3>
              </Circle>
            </Img>
            <p>
              One of our advantages is competitive pricing. You can save a lot
              of money if you choose us
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default AboutUs;
