import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
const Icon = {
    color: "var(--secondary-bg)",
    padding: "0.8rem",
}
const VerticalLine = {
    borderLeft: "2px solid var(--secondary-bg)"
}

const Achieverments = () => {
    return (
        <div style={{ padding: "20vh 0" }}>
            <div style={Content}>
                <div>
                    <h2 className='title-description'>1. Audio Transcription</h2>
                    <div style={{ display: "flex" }}>
                        <FontAwesomeIcon icon={faCircleCheck} style={Icon} />
                        <span>14 000 audio hours <br /> in 14 languages</span>
                    </div>
                </div>
                <div>
                    <hr style={Line} />
                </div>
                <div>
                    <h2 className='title-description'>2. Audio Recording</h2>
                    <div style={{ display: "flex" }}>
                        <FontAwesomeIcon icon={faCircleCheck} style={Icon} />
                        <span>12 000 recording audio <br /> hours in 6 languages</span>
                    </div>
                </div>
            </div>
            <div className='content-center' style={Content}>
                <div style={VerticalLine}>

                </div>
                <div>
                    <h2 className='title-content' style={{ padding: "10rem 0" }}>Achieverments</h2>
                </div>
                <div style={VerticalLine}>

                </div>
            </div>
            <div style={Content}>
                <div>
                    <h2 className='title-description'>4. Automotive Video <br /> Annotation</h2>
                    <div style={{ display: "flex" }}>
                        <FontAwesomeIcon icon={faCircleCheck} style={Icon} />
                        <span>10 million frames</span>
                    </div>
                </div>
                <div>
                    <hr style={Line} />
                </div>
                <div>
                    <h2 className='title-description'>3. Audio Annotation</h2>
                    <div style={{ display: "flex" }}>
                        <FontAwesomeIcon icon={faCircleCheck} style={Icon} />
                        <span>12 000 recording audio <br /> hours in 6 languages</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achieverments
