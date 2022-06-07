import { Box, Grid, Link, styled } from '@mui/material'
import React from 'react'

const BoxStyled = styled(Box)({
    border: "2px solid var(--secondary-bg)",
    borderRadius: "15px",
    padding: "10px",
    aspectRatio: "1/1",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    margin: '1rem',
})

const BoxContent = {
    paddingLeft: "20px",
}

const LinkStyled = styled(Link)(({ theme }) => ({
    fontSize: "var(--medium-text-3)",
    fontWeight: "bold",
    color: "var(--secondary-bg)",
    textDecoration: "none",
    alignSelf: "flex-end",
    marginBottom: "1vh",
    cursor: "pointer",
    "&:hover": {
        color: "var(--secondary-bg)",
    },
    [theme.breakpoints.down('md')]: {
        fontSize: 'var(--normal-text)',
    },
}))


const Services = () => {
    return (
        <div style={{ padding: "10vh 0" }}>
            <div className='title-content' style={{ textAlign: "center" }}>
                Services
            </div>
            <Grid container spacing={2}>
                <Grid item lg={6} xs={12}>
                    <BoxStyled>
                        <img
                            src='/images/Rectangle112.png'
                            alt='Services'
                            style={{
                                width: "99%",
                                borderRadius: "15px",
                            }}
                        />
                    </BoxStyled>
                </Grid>
                <Grid item lg={3} xs={6}>
                    <BoxStyled style={BoxContent}>
                        <h2 className='title-description'>+ Data collection</h2>
                        <ul>
                            <li>Text data collection</li>
                            <li>Image data collection</li>
                            <li>Speech data collection</li>
                            <li>Audio data collection</li>
                        </ul>
                        <LinkStyled>
                            Discover now &nbsp;
                            <img src='/images/Vector9.png' alt='...' />
                        </LinkStyled>
                    </BoxStyled>
                    <BoxStyled style={BoxContent}>
                        <h2 className='title-description'>+ Transcription</h2>
                        <ul>
                            <li>Image Transcription</li>
                            <li>Audio Transcription</li>
                            <li>Tailor-made solution</li>
                        </ul>
                        <LinkStyled>
                            Learn more &nbsp;
                            <img src='/images/Vector9.png' alt='...' />
                        </LinkStyled>
                    </BoxStyled>
                </Grid>
                <Grid item lg={3} xs={6}>
                    <BoxStyled style={BoxContent}>
                        <h2 className='title-description'>+ Data annotation</h2>
                        <ul>
                            <li>Text data annotation</li>
                            <li>Image data annotation</li>
                            <li>Speech data annotation</li>
                            <li>Audio data annotation</li>
                        </ul>
                        <div style={{ display: "flex" }}>
                            <LinkStyled>
                                Free <br /> Consultation &nbsp;
                            </LinkStyled>
                            <img src='/images/Vector9.png' alt='...' style={{ marginTop: "20px", height: "20px" }} />
                        </div>
                    </BoxStyled>
                    <BoxStyled style={BoxContent}>
                        <h2 className='title-description'>+ Tailor-made solution ?</h2>
                            <br/>
                            <br/>
                            <br/>
                        <LinkStyled>
                            Share with us &nbsp;
                            <img src='/images/Vector9.png' alt='...' />
                        </LinkStyled>
                    </BoxStyled>
                </Grid>
            </Grid>
        </div>
    )
}

export default Services