import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styled } from '@mui/material'
import React from 'react'

const Content = {
    display: "flex",
    justifyContent: "space-between",
}
const Line = {
    width: "35vw",
    color: "var(--secondary-bg)",
    height: "2px",
    marginTop: "3rem",
    opacity: "1",
}
const Icon = ({ theme }) => ({
    color: "var(--secondary-bg)",
    padding: "0.8rem",
    [theme.breakpoints.down('md')]: {
        color: "var(--secondary-bg)",
        padding: "0",
    },
})
const TitleStyled = styled('h2')(({ theme }) => ({
    padding: "10rem 0",
    [theme.breakpoints.down('sm')]: {
        padding: "3rem 0",
    },
}))

const DescripStyled = styled('div')(({ theme }) => ({
    display: 'block',
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    },
}))

const VerticalLine = {
    borderLeft: "2px solid var(--secondary-bg)"
}

const Contain = styled('div')(({ theme }) => ({
    padding: '10vh',
    [theme.breakpoints.down('md')]: {
        padding: '0',
    },
}))

const Achieverments = () => {
    return (
        <Contain id='achieverments'>
            <div style={Content}>
                <div>
                    <h2 className='title-description'>1. Audio Transcription</h2>
                    <DescripStyled>
                        <FontAwesomeIcon icon={faCircleCheck} style={Icon} />
                        <span>14 000 audio hours <br /> in 14 languages</span>
                    </DescripStyled>
                </div>
                <div>
                    <hr style={Line} />
                </div>
                <div>
                    <h2 className='title-description'>2. Audio Recording</h2>
                    <DescripStyled>
                        <FontAwesomeIcon icon={faCircleCheck} style={Icon} />
                        <span>12 000 recording audio <br /> hours in 6 languages</span>
                    </DescripStyled>
                </div>
            </div>
            <div className='content-center' style={Content}>
                <div style={VerticalLine}>

                </div>
                <div>
                    <TitleStyled className='title-content'>Achieverments</TitleStyled>
                </div>
                <div style={VerticalLine}>

                </div>
            </div>
            <div style={Content}>
                <div>
                    <h2 className='title-description'>4. Automotive Video <br /> Annotation</h2>
                    <DescripStyled>
                        <FontAwesomeIcon icon={faCircleCheck} style={Icon} />
                        <span>10 million frames</span>
                    </DescripStyled>
                </div>
                <div>
                    <hr style={Line} />
                </div>
                <div>
                    <h2 className='title-description'>3. Audio Annotation</h2>
                    <DescripStyled>
                        <FontAwesomeIcon icon={faCircleCheck} style={Icon} />
                        <span>12 000 recording audio <br /> hours in 6 languages</span>
                    </DescripStyled>
                </div>
            </div>
        </Contain>
    )
}

export default Achieverments
