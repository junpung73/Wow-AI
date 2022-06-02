import { Box, styled } from '@mui/material'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

const BoxStyled = styled(Box)({
    borderRadius: "30px",
    margin: "10% 5%",
    aspectRatio: "1/1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
})

const TransServices = () => {
    return (
        <div style={{ padding: "10vh 0" }}>
            <h2 className='title-content' style={{ textAlign: "center" }}>Transcription Services</h2>
            <Row style={{ padding: "0 10rem" }}>
                <Col>
                    <BoxStyled>
                        <img src='/images/Group39352.png' alt='transcription service' style={{ borderRadius: "30px", width: "100%" }} />
                    </BoxStyled>
                    <BoxStyled>
                        <img src='/images/Group39352.png' alt='transcription service' style={{ borderRadius: "30px", width: "100%" }} />
                    </BoxStyled>
                </Col>
                <Col>
                    <BoxStyled style={{ backgroundColor: "var(--primary-text)", color: "var(--secondary-text)", padding: "10%" }}>
                        <p>
                            Audio transcription is the process of converting spoken language into written language. This is what we do best.
                        </p>
                    </BoxStyled>
                    <BoxStyled style={{ backgroundColor: "var(--secondary-text)", color: "var(--primary-text)", padding: "10%" }}>
                        <h5 className='title-description'>Image Transcription</h5>
                    </BoxStyled>
                </Col>
            </Row>
        </div>
    )
}

export default TransServices