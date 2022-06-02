import React from 'react'
import AboutDescrip from '../../components/AboutDescrip'

const topicAbout = {
  height: "85vh",
  backgroundImage: "url(images/Group39457.png)",
  display: "flex",
  justifyContent: "center",
  color: "var(--primary-text)",
  alignItems: "center",
  fontSize: "98px",
}

const AboutUs = () => {
  return (
    <div>
        <div style={topicAbout}>wow AI LLC</div>
        <AboutDescrip/>
    </div>
  )
}

export default AboutUs