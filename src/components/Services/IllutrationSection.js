import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BoxContent3 from './public-service/BoxContent3'
import SlideContent from '../public/SlideContent'
import TitleSection from './public-service/TitleSection'

const IllutrationSection = ({ content }) => {
  return (
    <div>
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
    </div>
  )
}

export default IllutrationSection
