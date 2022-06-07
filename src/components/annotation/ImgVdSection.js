<<<<<<< HEAD
import React from 'react'
import { Col, Row } from 'react-bootstrap'
=======
import { Grid } from '@mui/material'
import React from 'react'
>>>>>>> 8518c29557bf7c637a0ef938cf3493522591c4a2
import SlideContent from '../public/SlideContent'
import BoxContent5 from './public_anno/BoxContent5'

const ImgVdSection = ({ content }) => {
    return (
        <div>
            <h2 className='title-content'>{content.title}</h2>
<<<<<<< HEAD
            <Row>
                <Col xs={10}>
                    <SlideContent content={content} />
                </Col>
                <Col xs={2} style={{ paddingTop: "4vh" }}>
                    {content.boxst.map((content, index) => (
                        <BoxContent5 key={index} content={content} />
                    ))}
                </Col>
            </Row>
=======
            <Grid container spacing={2}>
                <Grid item xs={12} md={10}>
                    <SlideContent content={content} />
                </Grid>
                <Grid item xs={12} md={2}>
                    <Grid container spacing={2}>
                        {content.boxst.map((content, index) => (
                            <Grid item xs={6} sm={3} md={12}>
                                <BoxContent5 key={index} content={content} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
>>>>>>> 8518c29557bf7c637a0ef938cf3493522591c4a2
        </div>
    )
}

export default ImgVdSection