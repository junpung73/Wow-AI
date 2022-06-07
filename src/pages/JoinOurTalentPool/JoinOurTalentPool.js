// import { style } from "@mui/system";
import React from "react";
import * as io from "react-icons/io";
import {
  Container,
  Picture,
  Title,
  BigImg,
  SmallImg,
  Column,
  Row,
  CardItem,
  SubTitle,
  Card,
  Quote,
  NavigateButton,
  JoinButton,
  Carousel,
  TalentButton,
  BlogItem,
} from "./style";

const JoinOurTalentPool = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* Join our talent pool */}
      <Container>
        <Title>
          <h1 style={{ fontSize: "104px" }}>JOIN OUR TALENT POOL</h1>
          <button>SIGN UP NOW</button>
        </Title>
        <Picture>
          <BigImg src="images/meeting.png" alt="img">
            <SmallImg src="images/glassphone.png" alt="img" />
          </BigImg>
        </Picture>
      </Container>

      {/* Contributor */}
      <Container>
        <Column>
          <Row>
            <Column
              style={{
                border: "solid white",
                borderWidth: "0 1px 1px 0",
                padding: "50px",
              }}
            >
              <h3>Become our project contributors</h3>
              <h5 style={{ fontSize: "18px" }}>
                Wow AI is a trusted and professional partner that provides
                high-quality data at a large scale to clients to help improve
                their AI/ML systems. We welcome all people from all walks of
                life to join these projects. You can work remotely anytime and
                anywhere.
              </h5>
              <JoinButton>Join our crowdsourcing projects now!</JoinButton>
            </Column>
            <Column style={{ border: "solid white", borderWidth: "0 0 1px 0" }}>
              <img src="images/contributor1.svg"></img>
            </Column>
          </Row>
          <Row>
            <Column
              style={{
                border: "solid white",
                borderWidth: "0 1px 0 0",
                padding: "50px",
              }}
            >
              <h3>Why become our project contributors?</h3>
              <h5>
                Wow AI provides you with opportunities in supporting our clients
                in collecting, enhancing, and upgrading their data input for AI
                models. We welcome workers across the globe regardless of their
                backgrounds and experience.
              </h5>
            </Column>
            <Column>
              <img src="images/contributor2.svg"></img>
            </Column>
          </Row>
        </Column>
      </Container>

      {/* Examples Task */}
      <Container>
        <Column>
          <SubTitle>A Few Examples of Tasks You can do</SubTitle>
          <p>
            Here are some common tasks you are expected to do as our project
            contributors. Please make sure to update your profile on our site
            frequently so that we can invite you join a suitable projects based
            on your information.
          </p>
          <Row style={{ flex: "1" }}>
            <CardItem>
              <img src="images/logo1.svg" />
              <h3>+ Data collection</h3>
              <p>
                Data collection projects involve the gathering of different
                types of data including text, audio, and speech in order to
                improve the quality of customer service.
              </p>
              <p>
                For example, Text data is collected to help develop technology
                that can understand human language in text form, meanwhile,
                speech/audio can be used for training and improving
                conversational AI and chatbots.
              </p>
            </CardItem>
            <CardItem>
              <img src="images/logo2.svg"></img>
              <h3>+ Data annotation</h3>
              <p>
                You are expected to identify raw data (images, text files,
                videos, etc.) and add one or more meaningful and informative
                labels to provide context so that a machine learning model can
                learn from it. Examples are, labels might indicate whether a
                photo contains a bird or car, which words were uttered in an
                audio recording, or if an x-ray contains a tumor.
              </p>
            </CardItem>
            <CardItem>
              <img src="images/logo3.svg"></img>

              <h3>+ Transcription Data</h3>
              <p>
                Transcribers will listen to audio files and write down what they
                hear following the provided guidelines and conventions. The job
                entails listening to an audio recording and convert it to text{" "}
              </p>
            </CardItem>
          </Row>
        </Column>
      </Container>

      {/* How it works */}
      <Container>
        <Column>
          <SubTitle style={{ textAlign: "center" }}>How it works</SubTitle>
          <Row>
            <Card>
              <h3>Step 1</h3>
              <p>
                First, register at connect.wow-ai.com, update your personal
                information and your payment method and sign the frame contract.
              </p>
            </Card>
            <Card>
              <h3>Step 2</h3>
              <p>
                Check your email frequently to keep updated with new suitable
                projects sent to your email!
              </p>
            </Card>
            <Card>
              <h3>Step 3</h3>
              <p>
                Apply to the projects that you receive invitations (if you are
                interested in)
              </p>
            </Card>
            <Card>
              <h3>Step 4</h3>
              <p>
                The project team will verify your profile and process the next
                steps.
              </p>
            </Card>
          </Row>
        </Column>
      </Container>

      {/* Frequently asked questions */}
      <Container>
        <Column>
          <SubTitle>Frequently Asked Questions</SubTitle>
          <img
            style={{ width: "100%", margin: "30px 0" }}
            src="images/video.png"
          ></img>
          <h4>1. What is Wow AI?</h4>
          <p>
            Wow AI is a trusted and professional partner that provides
            high-quality data at a large scale to clients to improve their AI/ML
            systems. Wow AI manages projects for clients, recruits project
            contributors from all around the world, breaks down complex projects
            into small tasks (collection, annotation, translation,
            transcription, classifying, labeling, etc.) and allocates them to
            suitable project contributors. Workers complete tasks from home to
            get paid, includes Wow AI processes and combines all the data
            collected into a meaningful and qualified result, and sends it back
            to the client. Our clients include leading companies in technology,
            automotive, eCommerce, banking, healthcare and several other
            industries as well.
          </p>
          <h4>2. How do I sign up for Wow AI project contributor account?</h4>
          <p>
            3 simple steps:{" "}
            <ul>
              <li>Visit connect.wow-ai.com</li>{" "}
              <li>Fill in your required personal information and contact</li>{" "}
              <li>
                Check your email and confirm the registration request Now, you
                are good to go!
              </li>
            </ul>
          </p>
          <h4>3. How do I get paid?</h4>
          <p>
            Each project will have a different payment circle. Usually, in
            long-term projects, you will receive an invoice for all of your
            completed tasks within 7 working days of the next month. You will
            have 2-3 days to confirm the invoice. Then once it is confirmed, the
            payment will be made within 30 working days. (The due date of each
            invoice is stated on our invoicing in system). Payment will be made
            automatically to your wallet on our system. Then, payments are
            automatically transferred by our system to your designated chosen
            accounts. You can use your bank or Payoneer account. Please take
            note. That there is a minimum balance of 25 USD for bank accounts
            and 10 USD for payoneer accounts for you to withdraw. And if your
            wallet’s balance is lower than 10 USD, it can’t be sent to your
            Payoneer account. In that case, you will have to wait until the
            balance on your wallet is higher than the above limits.
          </p>
        </Column>
      </Container>

      {/* What do our project contributor say */}
      <Container>
        <Column>
          <SubTitle>What do our project contributors say?</SubTitle>
          <Carousel>
            <NavigateButton>
              <div>
                <io.IoIosArrowBack></io.IoIosArrowBack>
              </div>
            </NavigateButton>
            <Quote>
              <p>
                “This is a very independent job that is super flexible. You
                choose your own hours and take on multiple projects.”
              </p>
              <Carousel>
                <img src="images/avatar.svg"></img>
                <p>Wow AI, Image Collector</p>
              </Carousel>
            </Quote>
            <Quote>
              <p>
                “This is a very independent job that is super flexible. You
                choose your own hours and take on multiple projects.”
              </p>
              <Carousel>
                <img src="images/avatar.svg"></img>
                <p>Wow AI, Image Collector</p>
              </Carousel>
            </Quote>
            <Quote>
              <p>
                “This is a very independent job that is super flexible. You
                choose your own hours and take on multiple projects.”
              </p>
              <Carousel>
                <img src="images/avatar.svg"></img>
                <p>Wow AI, Image Collector</p>
              </Carousel>
            </Quote>
            <NavigateButton>
              <div>
                <io.IoIosArrowForward></io.IoIosArrowForward>
              </div>
            </NavigateButton>
          </Carousel>
          <TalentButton>Join our talent</TalentButton>
        </Column>
      </Container>

      {/* Blogs */}
      <Container>
        <Column>
          <SubTitle>Blogs</SubTitle>
          <Carousel>
            <NavigateButton>
              <div>
                <io.IoIosArrowBack></io.IoIosArrowBack>
              </div>
            </NavigateButton>
            <BlogItem>
              <img src="images/blogimg.svg"></img>
              <p>10-08-2021</p>
              <h6>
                Surge of this virus is unpredictable in this era. Thoughts?
              </h6>
            </BlogItem>
            <BlogItem>
              <img src="images/blogimg.svg"></img>
              <p>10-08-2021</p>
              <h6>
                Surge of this virus is unpredictable in this era. Thoughts?
              </h6>
            </BlogItem>
            <BlogItem>
              <img src="images/blogimg.svg"></img>
              <p>10-08-2021</p>
              <h6>
                Surge of this virus is unpredictable in this era. Thoughts?
              </h6>
            </BlogItem>
            <NavigateButton>
              <div>
                <io.IoIosArrowForward></io.IoIosArrowForward>
              </div>
            </NavigateButton>
          </Carousel>
        </Column>
      </Container>
    </div>
  );
};

export default JoinOurTalentPool;
