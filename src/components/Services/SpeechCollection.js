import React from 'react'
<<<<<<< HEAD
import { Col, Row } from 'react-bootstrap'
import SlideContent from '../public/SlideContent'
import TitleSection from './public-service/TitleSection'
import BoxContent2 from './public-service/BoxContent2'
=======
import SlideContent from '../public/SlideContent'
import TitleSection from './public-service/TitleSection'
import BoxContent2 from './public-service/BoxContent2'
import { Grid } from '@mui/material'
>>>>>>> 8518c29557bf7c637a0ef938cf3493522591c4a2

const SpeechCollection = ({ content }) => {
    return (
        <div style={{ margin: "10vh 0" }}>
            <TitleSection content={content} />
<<<<<<< HEAD
            <Row>
                <Col xs={4}>
                    {content.boxst.map((content, index) => (
                        <BoxContent2 key={index} content={content} />
                    ))}
                </Col>
                <Col xs={8}>
                    <SlideContent content={content} />
                </Col>
            </Row>
=======
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Grid container spacing={3}>
                        {content.boxst.map((content, index) => (
                            <Grid item xs={6} sm={12}>
                                <BoxContent2 key={index} content={content} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <SlideContent content={content} />
                </Grid>
            </Grid>
>>>>>>> 8518c29557bf7c637a0ef938cf3493522591c4a2
        </div>
    )
}

export default SpeechCollection