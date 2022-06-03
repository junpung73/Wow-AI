import React from 'react'
import { Col, Row } from 'react-bootstrap'

const AboutUs = () => {
    return (
        <div id='aboutus' style={{ height: "90vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "10vh 0" }}>
            <Row>
                <Col xs={7}>
                    <iframe
                        width="650"
                        height="400"
                        src="https://www.youtube.com/embed/fLkKFJ_mdD0"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        style={{ borderRadius: "15px", border: "2px solid var(--secondary-bg)", padding: "8px" }}
                    ></iframe>
                </Col>
                <Col xs={5} style={{ color: "var(--primary-text)" }}>
                    <h5 className='title-content'>About Us</h5>
                    <div style={{ textAlign: "justify" }}>
                        Wow AI is
                        <span style={{ fontWeight: "700" }}> a trusted partner </span>
                        that
                        <span style={{ fontWeight: "700" }}> provides high-quality data for AI training </span>
                        in different languages at a large scale. We are experienced professionals with a track record of success in numerous types of data collecting. With a crowd of over 100,000 project contributors all over the world, we can provide massive, scalable high-quality data across data types. We also provide off-the-shelf data and tailor-made data for the success of your AI/ML projects.
                        <br />
                        <br />
                        Many companies have successfully built their AI models with us. So do you!
                    </div>
                </Col>
            </Row>
        </div>

    )
}

export default AboutUs