import React from "react";
import { Column, WrapTopic, Grid, Item, LoadMoreButton } from "./style";
import Header from "../../components/Layouts/Header/Header";
import Footer from "../../components/Layouts/Footer/Footer";
import { Container } from "../../components/Container";

const Resources = () => {
  return (
    <>
      <Header />
      <Container
        style={{
          width: "100%",
          margin: 0,
          padding: 0,
          maxWidth: "100%",
          scrollSnapAlign: "none",
        }}
      >
        <img
          src="/images/Group39449.png"
          alt="background"
          style={{ width: "100%" }}
        />
      </Container>
      <Container style={{ scrollSnapAlign: "start", paddingTop: "100px" }}>
        <Column>
          <h2 style={{ color: "var(--secondary-bg)", textAlign: "center" }}>
            Everything you need to know about Crowdsourcing
          </h2>
          <WrapTopic>
            <a href="#">
              <p>Topic 1</p>
            </a>
            <a href="#">
              <p>Topic 2</p>
            </a>
            <a href="#">
              <p>Topic 3</p>
            </a>
            <a href="#">
              <p>Topic 4</p>
            </a>
            <a href="#">
              <p>Topic 5</p>
            </a>
            <a href="#">
              <p>Topic 6</p>
            </a>
            <a href="#">
              <p>Topic 7</p>
            </a>
          </WrapTopic>
          <Grid>
            <Item>
              <img src="images/Group73.png"></img>
              <h4>10-08-2021</h4>
              <p>Surge of this virus is unpredictable in this era. Thoughts?</p>
            </Item>
            <Item href="/detail-blog">
              <img src="images/Group73.png"></img>
              <h4>10-08-2021</h4>
              <p>Surge of this virus is unpredictable in this era. Thoughts?</p>
            </Item>
            <Item href="/detail-blog">
              <img src="images/Group73.png"></img>
              <h4>10-08-2021</h4>
              <p>Surge of this virus is unpredictable in this era. Thoughts?</p>
            </Item>
            <Item href="/detail-blog">
              <img src="images/Group73.png"></img>
              <h4>10-08-2021</h4>
              <p>Surge of this virus is unpredictable in this era. Thoughts?</p>
            </Item>
            <Item href="/detail-blog">
              <img src="images/Group73.png"></img>
              <h4>10-08-2021</h4>
              <p>Surge of this virus is unpredictable in this era. Thoughts?</p>
            </Item>
            <Item href="/detail-blog">
              <img src="images/Group73.png"></img>
              <h4>10-08-2021</h4>
              <p>Surge of this virus is unpredictable in this era. Thoughts?</p>
            </Item>
          </Grid>
          <LoadMoreButton>
            <h3>Load More</h3>
          </LoadMoreButton>
        </Column>
      </Container>
      <Footer />
    </>
  );
};

export default Resources;
