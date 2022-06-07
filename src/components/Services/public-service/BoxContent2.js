import React from 'react'
import { Box, styled } from '@mui/material'

const BoxStyled = styled(Box)({
    borderRadius: "30px",
<<<<<<< HEAD
    margin: "4vh 1.5vh",
=======
>>>>>>> 8518c29557bf7c637a0ef938cf3493522591c4a2
    aspectRatio: "1/1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10%",
})

<<<<<<< HEAD
const TitleStyled = {
    fontSize: "32px",
    fontWeight: "700",
    padding: "1vh 0",
}
=======
const TitleStyled = styled('h5')(({ theme }) => ({
    fontSize: "var(--medium-text-3)",
    fontWeight: "bold",
    padding: "1vh 0",
    [theme.breakpoints.down('sm')]: {
        fontSize: "var(--normal-text)",
        padding: "0",
    },
}))
const Descrip = styled('p')(({ theme }) => ({
    fontSize: "var(--normal-text)",
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    },
}))
>>>>>>> 8518c29557bf7c637a0ef938cf3493522591c4a2

const BoxContent2 = ({ content }) => {
    return (
        <BoxStyled style={{ backgroundColor: `${content.bgcolor}`, color: `${content.color}`}}>
<<<<<<< HEAD
            <h5 style={TitleStyled}>
                {content.title}
            </h5>
            <p>
                {content.description}
            </p>
=======
            <TitleStyled>
                {content.title}
            </TitleStyled>
            <Descrip>
                {content.description}
            </Descrip>
>>>>>>> 8518c29557bf7c637a0ef938cf3493522591c4a2
        </BoxStyled>
    )
}

export default BoxContent2