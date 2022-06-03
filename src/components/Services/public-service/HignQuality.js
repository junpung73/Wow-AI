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
          <div dangerouslySetInnerHTML={{ __html: `${topic.description}` }}></div>
        </div>
      </Container>
    </div>
  )
}

export default HignQuality
