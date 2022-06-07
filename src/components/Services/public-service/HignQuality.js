<<<<<<< HEAD
import React from 'react'
import { Container } from 'react-bootstrap'

const HignQuality = ({ topic }) => {
  return (
    <div style={{ height: "85vh" }}>
      <Container style={{ width: "1330px", padding: "10vh 0", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "96px", color: "var(--secondary-bg)", fontWeight: "600" }}>
            {topic.title1}
          </h1>
          <h2 style={{ fontSize: "96px", color: "var(--primary-text)", fontWeight: "500", paddingBottom: "30px" }}>
            {topic.title2}
          </h2>
=======
import { styled } from '@mui/material'
import React from 'react'
import { Container } from 'react-bootstrap'

const TopicPink = styled('h1')(({ theme }) => ({
  fontSize: "96px",
  color: "var(--secondary-bg)",
  fontWeight: "bold",
  [theme.breakpoints.down('md')]: {
    fontSize: "var(--large-text)",
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: "var(--medium-text-1)",
  },
}))
const TopicWhite = styled('h1')(({ theme }) => ({
  fontSize: "96px",
  color: "var(--primary-text)",
  fontWeight: "bold",
  paddingBottom: "30px",
  [theme.breakpoints.down('md')]: {
    fontSize: "var(--large-text)",
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: "var(--medium-text-1)",
  },
}))

const HignQuality = ({ topic }) => {
  return (
    <div style={{ height: "85vh" }}>
      <Container style={{ width: "90%", padding: "10vh 0", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
        <div style={{ textAlign: "center" }}>
          <TopicPink>
            {topic.title1}
          </TopicPink>
          <TopicWhite>
            {topic.title2}
          </TopicWhite>
>>>>>>> 8518c29557bf7c637a0ef938cf3493522591c4a2
          <div dangerouslySetInnerHTML={{ __html: `${topic.description}` }}></div>
        </div>
      </Container>
    </div>
  )
}

export default HignQuality
