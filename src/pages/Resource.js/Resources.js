import React from "react";
import { Container } from "react-bootstrap";
import TopicList from "../../components/resources/TopicList";
import {
  Wrapper,
  Column,
  WrapTopic,
  Grid,
  Item,
  LoadMoreButton,
} from "./style";

const Resources = () => {
  return (
    <div>
      <img
        src="/images/Group39449.png"
        alt="background"
        style={{ height: "85%", width: "100%" }}
      />
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
    </div>
  );
};

export default Resources;
