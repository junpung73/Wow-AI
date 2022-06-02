import React from 'react'
import { Container } from 'react-bootstrap'

const Title = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
}
const BulletPoint = {
    borderTop: "2px solid var(--secondary-bg)",
    width: "5rem",
}
const DotBulletPoint = {
    backgroundColor: "var(--secondary-bg)",
    aspectRatio: "1/1",
    width: "1rem",
}
const textStyled = {
    marginLeft: "6rem",
}

const feature = {
    width: "20%",
    aspectRatio: "1/1",
}
const titlefeature = {
    position: "relative",
    bottom: "65%",
    width: "100%",
    textAlign: "center",
}
const dashed = {
    borderTop: "2px dashed var(--secondary-bg)",
    width: "15%",
}
const description = {
    width: "25%",
    textAlign: "justify",
}

const AboutDescrip = () => {
    return (
        <Container style={{ margin: "30vh 0", maxWidth: '1330px' }}>
            <p>
                Wow AI is a trusted partner that provides high-quality data for AI training in different
                languages at a large scale. We are experienced professionals with a track record of success
                in numerous types of data collecting. With a crowd of over 100,000 project contributors
                all over the world, we can provide massive, scalable high-quality data across data types.
                We also provide off-the-shelf data and tailor-made data for the success of your AI/ML projects.
                At Wow AI, we have high-quality QA and CQA personnel who maintain strong overall quality
                control of datasets adhering to reliability, performance, and client expectation. Many
                companies have successfully built their AI models with us. So do you!
            </p>
            <div style={{ display: "flex", height: "70vh", margin: "15vh 0" }}>
                <div style={{ borderLeft: "2px solid var(--secondary-bg)", margin: "3vh 0 8vh" }}></div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                        <div style={Title}>
                            <div style={DotBulletPoint}></div>
                            <div style={BulletPoint}></div>
                            <h5 className='title-description'>Mission</h5>
                        </div>
                        <p style={textStyled}>Wow AI focuses on delivering the highest quality of AI training data for a better AI algorithm</p>
                    </div>
                    <div>
                        <div style={Title}>
                            <div style={DotBulletPoint}></div>
                            <div style={BulletPoint}></div>
                            <h5 className='title-description'>Vision</h5>
                        </div>
                        <p style={textStyled}>Become an all-in-one platform for all AI data services at a global scale</p>
                    </div>
                    <div>
                        <div style={Title}>
                            <div style={DotBulletPoint}></div>
                            <div style={BulletPoint}></div>
                            <h5 className='title-description'>Values</h5>
                        </div>
                        <p style={textStyled}>A close-knit and trustworthy collection of global crowds Tech-driven mindsets</p>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: 'center', alignItems: "center" }}>
                <div className='title-description' style={feature}>
                    <img src='images/Group39465.png' alt='feature' style={{ width: "100%" }} />
                    <div style={titlefeature}>Quality</div>
                </div>
                <div style={dashed}></div>
                <div className='title-description' style={feature}>
                    <img src='images/Group39465.png' alt='feature' style={{ width: "100%" }} />
                    <div style={titlefeature}>Scale</div>
                </div>
                <div style={dashed}></div>
                <div className='title-description' style={feature}>
                    <img src='images/Group39465.png' alt='feature' style={{ width: "100%" }} />
                    <div style={titlefeature}>Budget</div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: 'space-between', margin: "0 5%" }}>
                <p style={description}>
                    Thanks to our unique tech, all of our contributors get answers instantly while working on projects; consequently we can deliver the highest quality AI data
                </p>
                <p style={description}>
                    With a crowd of over 100,000+ skilled freelancers locating around the global, we can handle any large- scale projects
                </p>
                <p style={description}>
                    One of our advantages is competitive pricing. You can save a lot of money if you choose us
                </p>
            </div>
        </Container>
    )
}

export default AboutDescrip
