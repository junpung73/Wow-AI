import { Box, styled } from '@mui/material'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

const BoxStyled = styled(Box)({
    backgroundColor: "var(--secondary-text)",
    borderRadius: "30px",
    width: "22%",
    aspectRatio: "1/1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
})

const Management = () => {
    return (
        <div style={{ padding: "25vh 0" }}>
            <h2 className='title-content' style={{ display: "flex", justifyContent: "center" }}>Our crowd management</h2>
            <Row>
                <Col sx={6}>
                    <img
                        src='/images/image36.png'
                        alt='management'
                        style={{
                            border: "2px solid var(--secondary-bg)",
                            borderRadius: "15px",
                            padding: "5px",
                            width: "100%"
                        }}
                    />
                </Col>
                <Col sx={6}>
                    <div style={{ textAlign: "justify" }}>
                        The quality of AI data depends on the people who collect and annotate it. We make sure to support every single resource 24/7 so that they can deliver the highest-quality data.
                        <br />
                        <br />
                        We build a close relationship with our global crowd through our unique way of management. Our crowd resources are our valuable assets.
                    </div>
                    <div style={{ display: "flex", width: "100%", justifyContent: "space-between", margin: "2vh 0" }}>
                        <BoxStyled>
                            100,000 Global <br /> Freelancers
                        </BoxStyled>
                        <BoxStyled>
                            120+ <br /> Languages
                        </BoxStyled>
                        <BoxStyled>
                            247+ <br /> Support
                        </BoxStyled>
                        <BoxStyled>
                            100% <br /> Customer <br /> Satisfation
                        </BoxStyled>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <a href='/' className='btn btn-dark'>
                            Contact us now
                        </a>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Management