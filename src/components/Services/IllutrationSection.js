import React from 'react'
<<<<<<< HEAD
import { Col, Row } from 'react-bootstrap'
import BoxContent3 from './public-service/BoxContent3'
import SlideContent from '../public/SlideContent'
import TitleSection from './public-service/TitleSection'
=======
import BoxContent3 from './public-service/BoxContent3'
import SlideContent from '../public/SlideContent'
import TitleSection from './public-service/TitleSection'
import { Grid } from '@mui/material'
>>>>>>> 8518c29557bf7c637a0ef938cf3493522591c4a2

const IllutrationSection = ({ content }) => {
  return (
    <div>
<<<<<<< HEAD
        <TitleSection content={content} />
        <Row>
          <Col xs={9}>
            <SlideContent content={content} />
          </Col>
          <Col xs={3}>
            {content.boxst.map((content, index) => (
              <BoxContent3 key={index} content={content} />
            ))}
          </Col>
        </Row>
=======
      <TitleSection content={content} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={9}>
          <SlideContent content={content} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Grid container spacing={2}>
            {content.boxst.map((content, index) => (
              <Grid item xs={6} sm={12}>
                <BoxContent3 key={index} content={content} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
>>>>>>> 8518c29557bf7c637a0ef938cf3493522591c4a2
    </div>
  )
}

export default IllutrationSection
