import { Box, Grid, styled } from '@mui/material'
import React from 'react'

const BoxStyled = styled(Box)({
    borderRadius: "30px",
    aspectRatio: "1/1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
})

const TransServices = () => {
    return (
        <div style={{ padding: "20vh" }}>
            <h2 className='title-content' style={{ textAlign: "center" }}>Transcription Services</h2>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <BoxStyled>
                        <img src='/images/Group39352.png' alt='transcription service' style={{ borderRadius: "30px", width: "100%" }} />
                    </BoxStyled>
                </Grid>
                <Grid item xs={6}>
                    <BoxStyled style={{ backgroundColor: "var(--primary-text)", color: "var(--secondary-text)", padding: "10%" }}>
                        <p>
                            Audio transcription is the process of converting spoken language into written language. This is what we do best.
                        </p>
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
        </div>
    )
}

export default TransServices