import { CardMedia, Container, Typography } from '@mui/material'

import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Title = {
  fontSize: "18px",
  fontWeght: "600",
  marginTop: "4vh",
  marginBottom: "1.4rem"
}

const BulletPoint = {
  paddingLeft: "1.4rem",
  listStyleImage: "url('images/Vector85.png')",
}

const Footer = () => {
  return (
    <div style={{ backgroundColor: "var(--primary-bg)", color: "var(--primary-text)" }}
    >
      <hr style={{ color: "white", height: "2px", margin: "0" }} />
      <Container style={{ marginBottom: "5vh", maxWidth: '1330px' }}>
        <Row>
          <Col lg="4" md="12" style={{ paddingRight: "110px" }}>
            <Link to="/">
              <CardMedia
                component="img"
                image='/Frame.png'
                style={{ maxWidth: "60%", padding: "2vh 0 2vh 0" }}
              />
            </Link>
            <Typography style={{ textAlign: "justify" }}>
              A trusted partner that provides high-quality data solutions for AI training at a large scale.
            </Typography>
          </Col>
          <Col lg="2" md="6">
            <Typography style={Title}>Company</Typography>
            <ul style={BulletPoint}>
              <li>
                About us
              </li>
              <li>
                Service
              </li>
              <li>
                Resources
              </li>
              <li>
                Join our crowd pool
              </li>
              <li>
                Privacy
              </li>
              <li>
                Security
              </li>
            </ul>
          </Col>
          <Col lg="2" md="6">
            <Typography style={Title}>Data Collection</Typography>
            <ul style={BulletPoint}>
              <li>
                Audio Collection
              </li>
              <li>
                Image Collection
              </li>
              <li>
                Utterances Collection
              </li>
            </ul>
          </Col>
          <Col lg="2" md="6">
            <Typography style={Title}>Data Annotation</Typography>
            <ul style={BulletPoint}>
              <li>
                Image Annotation
              </li>
              <li>
                Entity Annotation
              </li>
              <li>
                Video Annotation
              </li>
            </ul>
          </Col>
          <Col lg="2" md="6">
            <Typography style={Title}>Data Transcription</Typography>
            <ul style={BulletPoint}>
              <li>
                Image Transcription
              </li>
              <li>
                Audio Transcription
              </li>
              <li>
                Other special services?
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <hr style={{ color: "white", height: "2px", margin: "0" }} />
      <Container>
        <Typography style={{
          textAlign: "center",
          padding: "2vh",
          fontWeight: "400",
          lineHeight: "22px",
          letterSpacing: "0.3rem",
          color: "#B8B8B8",
        }}>
          All rights reserved by WOW-AI
        </Typography>
      </Container>
    </div>
  )
}

export default Footer