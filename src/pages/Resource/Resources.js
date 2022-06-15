import React from "react";
import { Column, WrapTopic, Grid, Item, LoadMoreButton } from "./style";
import Header from "../../components/Layouts/Header/Header";
import Footer from "../../components/Layouts/Footer";
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
          <LoadMoreButton>Load More</LoadMoreButton>
        </Column>
      </Container>
      <Footer />
    </>
  );
};

export default Resources;
