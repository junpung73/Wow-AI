import React from 'react'
import { Box, styled } from '@mui/material'

const BoxStyled = styled(Box)({
    borderRadius: "30px",
    margin: "0 2.2rem 1vh",
    aspectRatio: "1/1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2%",
    backgroundColor: "var(--secondary-text)",
    color: "var(--primary-text)",
})

const TitleStyled = {
    fontSize: "32px",
    fontWeight: "700",
    padding: "1vh",
}

const BoxContent4 = ({ content }) => {
    return (
        <BoxStyled >
            <h5 style={TitleStyled}>
                {content.title}
            </h5>
            {/* <p>
                {content.description}
            </p> */}
        </BoxStyled>
    )
}

export default BoxContent4
