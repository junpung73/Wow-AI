import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SlideContent from '../public/SlideContent'
import TitleSection from './public-service/TitleSection'
import BoxContent2 from './public-service/BoxContent2'

const SpeechCollection = ({ content }) => {
    return (
        <div style={{ margin: "10vh 0" }}>
            <TitleSection content={content} />
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
        </div>
    )
}

export default SpeechCollection