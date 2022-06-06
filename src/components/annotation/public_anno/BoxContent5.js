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
    backgroundColor: "var(--secondary-text)",
    color: "var(--primary-text)",
})

const TitleStyled = styled('h5')(({ theme }) => ({
    fontSize: "var(--medium-text-3)",
    fontWeight: "bold",
    padding: "1vh 0",
    [theme.breakpoints.down('md')]: {
        fontSize: "var(--normal-text)",
        fontWeight: "normal",
        padding: "0",
    },
}))

const BoxContent5 = ({ content }) => {
    return (
        <BoxStyled >
            <TitleStyled>
                {content.title}
            </TitleStyled>
            {/* <p>
                {content.description}
            </p> */}
        </BoxStyled>
    )
}

export default BoxContent5
