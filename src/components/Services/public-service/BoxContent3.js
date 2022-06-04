import React from 'react'
import { Box, styled } from '@mui/material'

const BoxStyled = styled(Box)({
    borderRadius: "30px",
    aspectRatio: "1/1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2%",
})

const TitleStyled = {
    fontSize: "32px",
    fontWeight: "700",
    padding: "1vh 0",
}

const BoxContent3 = ({ content }) => {
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

export default BoxContent3
