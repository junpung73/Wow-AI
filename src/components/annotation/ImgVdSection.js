import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SlideContent from '../public/SlideContent'
import BoxContent5 from './public_anno/BoxContent5'

const ImgVdSection = ({ content }) => {
    return (
        <div>
            <h2 className='title-content'>{content.title}</h2>
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
        </div>
    )
}

export default ImgVdSection