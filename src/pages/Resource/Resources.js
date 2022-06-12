import React from "react";
import {
  Wrapper,
  Column,
  WrapTopic,
  Grid,
  Item,
  LoadMoreButton,
  Container,
} from "./style";
import Header from "../../components/Layouts/Header/Header";
import Footer from "../../components/Layouts/Footer";

const Resources = () => {
  return (
    <Container>
      <Header />
      <Wrapper
        style={{ width: "100%", margin: 0, padding: 0, maxWidth: "100%" }}
      >
        <img
          src="/images/Group39449.png"
          alt="background"
          style={{ height: "100%", width: "100%" }}
        />
      </Wrapper>
      <Wrapper>
        <Column>
          <h1 style={{ color: "var(--secondary-bg)", textAlign: "center" }}>
            Everything you need to know about Crowdsourcing
          </h1>
          <WrapTopic>
            <a href="#">Topic 1</a>
            <a href="#">Topic 2</a>
            <a href="#">Topic 3</a>
            <a href="#">Topic 4</a>
            <a href="#">Topic 5</a>
            <a href="#">Topic 6</a>
            <a href="#">Topic 7</a>
          </WrapTopic>
          <Grid>
            <Item>
              <img src="images/Group73.png"></img>
              <p>10-08-2021</p>
              <h5>
                Surge of this virus is unpredictable in this era. Thoughts?
              </h5>
            </Item>
            <Item href="/detail-blog">
              <img src="images/Group73.png"></img>
              <p>10-08-2021</p>
              <h5>
                Surge of this virus is unpredictable in this era. Thoughts?
              </h5>
            </Item>
            <Item href="/detail-blog">
              <img src="images/Group73.png"></img>
              <p>10-08-2021</p>
              <h5>
                Surge of this virus is unpredictable in this era. Thoughts?
              </h5>
            </Item>
            <Item href="/detail-blog">
              <img src="images/Group73.png"></img>
              <p>10-08-2021</p>
              <h5>
                Surge of this virus is unpredictable in this era. Thoughts?
              </h5>
            </Item>
            <Item href="/detail-blog">
              <img src="images/Group73.png"></img>
              <p>10-08-2021</p>
              <h5>
                Surge of this virus is unpredictable in this era. Thoughts?
              </h5>
            </Item>
            <Item href="/detail-blog">
              <img src="images/Group73.png"></img>
              <p>10-08-2021</p>
              <h5>
                Surge of this virus is unpredictable in this era. Thoughts?
              </h5>
            </Item>
          </Grid>
          <LoadMoreButton>Load More</LoadMoreButton>
        </Column>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Resources;
