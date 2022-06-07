<<<<<<< HEAD
import { CardMedia, Container, Typography } from '@mui/material'

import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Title = {
  fontSize: "18px",
  fontWeght: "600",
=======
import { CardMedia, Container, Grid, styled, Typography } from '@mui/material'
import React from 'react' 
import { Link } from 'react-router-dom'

const Title = {
  fontSize: "var(--normal-text)",
  fontWeght: "bold",
>>>>>>> 8518c29557bf7c637a0ef938cf3493522591c4a2
  marginTop: "4vh",
  marginBottom: "1.4rem"
}

const BulletPoint = {
  paddingLeft: "1.4rem",
  listStyleImage: "url('images/Vector85.png')",
}

<<<<<<< HEAD
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
=======
const InfoPage = styled(Grid)(({ theme }) => ({
  display: 'block',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}))
const CardMediaStyled = styled(CardMedia)(({ theme }) => ({
  maxWidth: "40%",
  padding: "2vh 0",
  [theme.breakpoints.down('md')]: {
    maxWidth: "20%",
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: "40%",
  },
}))

const Footer = () => {
  return (
    <div style={{ backgroundColor: "var(--primary-bg)", color: "var(--primary-text)" }}>
      <hr style={{ color: "white", height: "2px", margin: "0" }} />
      <Container style={{ marginBottom: "5vh", maxWidth: '90%' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4}>
            <Link to="/">
              <CardMediaStyled
                component="img"
                image='/Frame.png'
>>>>>>> 8518c29557bf7c637a0ef938cf3493522591c4a2
              />
            </Link>
            <Typography style={{ textAlign: "justify" }}>
              A trusted partner that provides high-quality data solutions for AI training at a large scale.
            </Typography>
<<<<<<< HEAD
          </Col>
          <Col lg="2" md="6">
=======
          </Grid>
          <InfoPage item xs={3} md={2}>
>>>>>>> 8518c29557bf7c637a0ef938cf3493522591c4a2
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
<<<<<<< HEAD
              <li>
                Privacy
              </li>
              <li>
                Security
              </li>
            </ul>
          </Col>
          <Col lg="2" md="6">
=======
            </ul>
          </InfoPage>
          <InfoPage item xs={3} md={2}>
>>>>>>> 8518c29557bf7c637a0ef938cf3493522591c4a2
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
<<<<<<< HEAD
          </Col>
          <Col lg="2" md="6">
=======
          </InfoPage>
          <InfoPage item xs={3} md={2}>
>>>>>>> 8518c29557bf7c637a0ef938cf3493522591c4a2
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
<<<<<<< HEAD
          </Col>
          <Col lg="2" md="6">
=======
          </InfoPage>
          <InfoPage item xs={3} md={2}>
>>>>>>> 8518c29557bf7c637a0ef938cf3493522591c4a2
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
<<<<<<< HEAD
          </Col>
        </Row>
=======
          </InfoPage>
        </Grid>
>>>>>>> 8518c29557bf7c637a0ef938cf3493522591c4a2
      </Container>
      <hr style={{ color: "white", height: "2px", margin: "0" }} />
      <Container>
        <Typography style={{
          textAlign: "center",
          padding: "2vh",
<<<<<<< HEAD
          fontWeight: "400",
=======
          fontWeight: "lighter",
>>>>>>> 8518c29557bf7c637a0ef938cf3493522591c4a2
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