import React from 'react'
import { Box, styled } from '@mui/material'

const BoxStyled = styled(Box)({
    borderRadius: "30px",
    margin: "4vh 1.5vh",
    aspectRatio: "1/1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10%",
})

const TitleStyled = {
    fontSize: "32px",
    fontWeight: "700",
    padding: "1vh 0",
}

const BoxContent2 = ({ content }) => {
    return (
        <BoxStyled style={{ backgroundColor: `${content.bgcolor}`, color: `${content.color}`}}>
            <h5 style={TitleStyled}>
                {content.title}
            </h5>
            <p>
                {content.description}
            </p>
        </BoxStyled>
    )
}

export default BoxContent2