<<<<<<< HEAD
import { Box, styled } from '@mui/material'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

const BoxStyled = styled(Box)({
    borderRadius: "30px",
    margin: "10% 5%",
=======
import { Box, Grid, styled } from '@mui/material'
import React from 'react'

const BoxStyled = styled(Box)({
    borderRadius: "30px",
>>>>>>> 8518c29557bf7c637a0ef938cf3493522591c4a2
    aspectRatio: "1/1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
})
<<<<<<< HEAD

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
=======
const ContaiService = styled(Grid)(({ theme }) => ({
    padding: "20vh",
    [theme.breakpoints.down('sm')]: {
        padding: "0",
    },
}))
const TextStyled = styled('p')(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: '3',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
}))


const TransServices = () => {
    return (
        <ContaiService>
            <h2 className='title-content' style={{ textAlign: "center" }}>Transcription Services</h2>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <BoxStyled>
                        <img src='/images/Group39352.png' alt='transcription service' style={{ borderRadius: "30px", width: "100%" }} />
                    </BoxStyled>
                </Grid>
                <Grid item xs={6}>
                    <BoxStyled style={{ backgroundColor: "var(--primary-text)", color: "var(--secondary-text)", padding: "10%" }}>
                        <TextStyled>
                            Audio transcription is the process of converting spoken language into written language. This is what we do best.
                        </TextStyled>
                    </BoxStyled>
                </Grid>
                <Grid item xs={6}>
                    <BoxStyled>
                        <img src='/images/Group39352.png' alt='transcription service' style={{ borderRadius: "30px", width: "100%" }} />
                    </BoxStyled>
                </Grid>
                <Grid item xs={6}>
                    <BoxStyled style={{ backgroundColor: "var(--secondary-text)", color: "var(--primary-text)", padding: "10%" }}>
                        <h5 className='title-description'>Image Transcription</h5>
                    </BoxStyled>
                </Grid>
            </Grid>
        </ContaiService>
>>>>>>> 8518c29557bf7c637a0ef938cf3493522591c4a2
    )
}

export default TransServices