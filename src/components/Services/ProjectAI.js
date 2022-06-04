import { Box, Grid, styled } from '@mui/material'
import React from 'react'

const BoxStyled = styled(Box)({
    backgroundColor: "var(--secondary-text)",
    borderRadius: "15px",
    aspectRatio: "1/1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
})
const titleStyled = {
    fontSize: "36px",
    fontWeoght: "600",
    marginBottom: "0",
}

const ProjectAI = () => {
    return (
        <div style={{ padding: "10vh 0" }}>
            <h2 className='title-content' style={{ textAlign: "center" }}>Jumpstart your AI projects <br /> with excellent-quality data </h2>
            <Grid container spacing={5}>
                <Grid item xs={3}>
                    <BoxStyled>
                        <div>
                            <p style={titleStyled}>100,000</p> Global <br /> Freelancers
                        </div>
                    </BoxStyled>
                </Grid>
                <Grid item xs={3}>
                    <BoxStyled>
                        <div>
                            <p style={titleStyled}>120+</p> Languages
                        </div>
                    </BoxStyled>
                </Grid>
                <Grid item xs={3}>
                    <BoxStyled>
                        <div>
                            <p style={titleStyled}>247+</p> Support
                        </div>
                    </BoxStyled>
                </Grid>
                <Grid item xs={3}>
                    <BoxStyled>
                        <div>
                            <p style={titleStyled}>100%</p> Customer <br /> Satisfation
                        </div>
                    </BoxStyled>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProjectAI