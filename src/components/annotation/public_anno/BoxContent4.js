import React from 'react'
import { Box, styled } from '@mui/material'

const BoxStyled = styled(Box)({
    borderRadius: "30px",
<<<<<<< HEAD
    margin: "0 2.2rem 1vh",
=======
>>>>>>> 8518c29557bf7c637a0ef938cf3493522591c4a2
    aspectRatio: "1/1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2%",
    backgroundColor: "var(--secondary-text)",
    color: "var(--primary-text)",
})

<<<<<<< HEAD
const TitleStyled = {
    fontSize: "32px",
    fontWeight: "700",
    padding: "1vh",
}
=======
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
>>>>>>> 8518c29557bf7c637a0ef938cf3493522591c4a2

const BoxContent4 = ({ content }) => {
    return (
        <BoxStyled >
<<<<<<< HEAD
            <h5 style={TitleStyled}>
                {content.title}
            </h5>
=======
            <TitleStyled>
                {content.title}
            </TitleStyled>
>>>>>>> 8518c29557bf7c637a0ef938cf3493522591c4a2
            {/* <p>
                {content.description}
            </p> */}
        </BoxStyled>
    )
}

export default BoxContent4
