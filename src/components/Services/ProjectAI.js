import { Box, styled } from '@mui/material'
import React from 'react'

const BoxStyled = styled(Box)({
    backgroundColor: "var(--secondary-text)",
    borderRadius: "15px",
    width: "22%",
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
        </div>
    )
}

export default ProjectAI