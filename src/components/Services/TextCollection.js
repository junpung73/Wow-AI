import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BoxContent2 from './public-service/BoxContent2'
import SlideContent from '../public/SlideContent'
import TitleSection from './public-service/TitleSection'

const TextCollection = ({ content }) => {
    return (
        <div>
            <TitleSection content={content} />
            <Row>
                <Col xs={8}>
                    <SlideContent content={content} />
                </Col>
                <Col xs={4}>
                    {content.boxst.map((content, index) => (
                        <BoxContent2 key={index} content={content} />
                    ))}
                </Col>
            </Row>
        </div>
    )
}

export default TextCollection