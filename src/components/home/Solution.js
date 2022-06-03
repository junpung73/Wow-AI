import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SlideContent from '../public/SlideContent'
import solutions from '../../__mock__/solutions'


console.log(solutions);

const Solution = () => {
  return (
    <div id='solutions' style={{ padding: "10vh 0" }}>
        <h2 className='title-content' style={{ display: "flex", justifyContent: "center" }}>AI solutions for your industry</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a href='#solutions' className='btn btn-control'>Healthcare</a>
          <a href='#solutions' className='btn btn-control'>Retail</a>
          <a href='#solutions' className='btn btn-control'>Automobile</a>
          <a href='#solutions' className='btn btn-control'>Banking</a>
          <a href='#solutions' className='btn btn-control'>Manufacturing</a>
        </div>
        <Row>
          <Col xs={7}>
            <SlideContent content={solutions[0]} />
          </Col>
          <Col xs={5}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <div style={{
                backgroundColor: 'var(--secondary-bg)',
                height: '22rem',
                aspectRatio: '1/1',
                borderRadius: '30px',
                paddingLeft: '4rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}>
                <h5 className='title-description'>Free Consultation</h5>
              </div>
              <div style={{
                position: 'absolute',
                marginBottom: '8rem',
                marginLeft: '8rem',
                height: '22rem',
                backgroundColor: 'var(--secondary-text)',
                aspectRatio: '1/1',
                borderRadius: '30px',
                padding: '0 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'left',
              }}>
                <h5 className='title-description'>Retail</h5>
                <p>
                  From enhanced customer service to <br />
                  better sales forecasts, AI is <br />
                  transforming retail by creating <br />
                  a truly customer-centric experience. <br />
                  Use high-quality speech, NLP, and QoE <br />
                  data to power your AI.
                </p>
              </div>
            </div>
          </Col>
        </Row>
    </div>
  )
}

export default Solution