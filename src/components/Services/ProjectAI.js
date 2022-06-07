<<<<<<< HEAD
import { Box, styled } from '@mui/material'
=======
import { Box, Grid, styled } from '@mui/material'
>>>>>>> 8518c29557bf7c637a0ef938cf3493522591c4a2
import React from 'react'

const BoxStyled = styled(Box)({
    backgroundColor: "var(--secondary-text)",
    borderRadius: "15px",
<<<<<<< HEAD
    width: "22%",
=======
>>>>>>> 8518c29557bf7c637a0ef938cf3493522591c4a2
    aspectRatio: "1/1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
})
<<<<<<< HEAD
const titleStyled = {
    fontSize: "36px",
    fontWeoght: "600",
    marginBottom: "0",
}
=======
const titleStyled = styled('p')(({ theme }) => ({
    fontSize: "var(--medium-text-2)",
    fontWeoght: "bold",
    marginBottom: "0",
    [theme.breakpoints.down('md')]: {
        fontSize: 'var(--normal-text)',
    },
}))
>>>>>>> 8518c29557bf7c637a0ef938cf3493522591c4a2

const ProjectAI = () => {
    return (
        <div style={{ padding: "10vh 0" }}>
            <h2 className='title-content' style={{ textAlign: "center" }}>Jumpstart your AI projects <br /> with excellent-quality data </h2>
<<<<<<< HEAD
            <div style={{ display: "flex", width: "100%", justifyContent: "space-between", margin: "2vh 0" }}>
                <BoxStyled>
                    <div>
                        <p style={titleStyled}>100,000</p> Global <br /> Freelancers
                    </div>
                </BoxStyled>
                <BoxStyled>
                    <div>
                        <p style={titleStyled}>120+</p> Languages
                    </div>
                </BoxStyled>
                <BoxStyled>
                    <div>
                        <p style={titleStyled}>247+</p> Support
                    </div>
                </BoxStyled>
                <BoxStyled>
                    <div>
                        <p style={titleStyled}>100%</p> Customer <br /> Satisfation
                    </div>
                </BoxStyled>
            </div>
=======
            <Grid container spacing={5}>
                <Grid item xs={6} sm={3}>
                    <BoxStyled>
                        <div>
                            <titleStyled>100,000</titleStyled> Global <br /> Freelancers
                        </div>
                    </BoxStyled>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <BoxStyled>
                        <div>
                            <titleStyled>120+</titleStyled> Languages
                        </div>
                    </BoxStyled>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <BoxStyled>
                        <div>
                            <titleStyled>247+</titleStyled> Support
                        </div>
                    </BoxStyled>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <BoxStyled>
                        <div>
                            <titleStyled>100%</titleStyled> Customer <br /> Satisfation
                        </div>
                    </BoxStyled>
                </Grid>
            </Grid>
>>>>>>> 8518c29557bf7c637a0ef938cf3493522591c4a2
        </div>
    )
}

export default ProjectAI