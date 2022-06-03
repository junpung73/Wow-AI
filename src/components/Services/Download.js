import { Box, styled } from '@mui/material'
import React from 'react'

const BoxStyled = styled(Box)({
    border: "2px solid var(--secondary-bg)",
    borderRadius: "30px",
    width: "100%",

})
const VerticalLine = {
    borderLeft: "2px solid var(--secondary-bg)",
    margin: "2vh 0",
}
const RowStyled = {
    display: "flex",
    justifyContent: "space-around",
    borderBottom: "2px solid var(--secondary-bg)",
    margin: "0 2vh",
    padding: "5vh 0"
}

const Download = () => {
    return (
        <div style={{ margin: "20vh 0" }}>
            <div style={{ marginBottom: "5vh" }}>
                <img src='/images/Cloud-Download.png' alt='Cloud-Download' style={{ marginTop: "-30px" }} />
                <span className='title-content'> Download Our Sample Datasets</span>
            </div>
            <BoxStyled>
                <div style={RowStyled}>
                    <h5 className='title-description'>Medical dataset</h5>
                    <div style={VerticalLine}></div>
                    <h5 className='title-description'>OCR dataset</h5>
                    <div style={VerticalLine}></div>
                    <h5 className='title-description'>Audio dataset</h5>
                </div>
                <div style={RowStyled}>
                    <div>
                        <img src='/images/Group882.png' alt='Download' />
                        <span> Imaging data </span>
                    </div>
                    <div>
                        <img src='/images/Group882.png' alt='Download' />
                        <span> Imaging data </span>
                    </div>
                    <div>
                        <img src='/images/Group882.png' alt='Download' />
                        <span> Audio data </span>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "space-around",
                    padding: "5vh 0",
                }}>
                    <div>
                        <img src='/images/Group882.png' alt='Download' />
                        <span> Audio data </span>
                    </div>
                    <div>&emsp; &emsp; &emsp;</div>
                    <div>
                        <img src='/images/Group882.png' alt='Download' />
                        <span> Medical Audio data </span>
                    </div>
                </div>
            </BoxStyled>
        </div>
    )
}

export default Download