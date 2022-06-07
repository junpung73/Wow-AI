<<<<<<< HEAD
import React from 'react'
import { Col, Row } from 'react-bootstrap'
=======
import { Grid } from '@mui/material'
import React from 'react'
>>>>>>> 8518c29557bf7c637a0ef938cf3493522591c4a2
import SlideContent from '../public/SlideContent'
import BoxContent4 from './public_anno/BoxContent4'

const TextAudioSection = ({ content }) => {
    return (
        <div>
            <h2 className='title-content'>{content.title}</h2>
<<<<<<< HEAD
            <Row>
                <Col xs={9}>
                    <SlideContent content={content} />
                </Col>
                <Col xs={3} style={{ paddingTop: "4vh" }}>
                    {content.boxst.map((content, index) => (
                        <BoxContent4 key={index} content={content} />
                    ))}
                </Col>
            </Row>
=======
            <Grid container spacing={2}>
                <Grid item xs={12} minWidth={10}>
                    <SlideContent content={content} />
                </Grid>
                <Grid item xs={12} minWidth={2}>
                    <Grid container spacing={2}>
                        {content.boxst.map((content, index) => (
                            <Grid item xs={6} sm={3} md={12}>
                                <BoxContent4 key={index} content={content} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
>>>>>>> 8518c29557bf7c637a0ef938cf3493522591c4a2
        </div>
    )
}

<<<<<<< HEAD
export default TextAudioSection
=======
export default TextAudioSection
>>>>>>> 8518c29557bf7c637a0ef938cf3493522591c4a2
