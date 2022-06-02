import React from 'react'
import { Container } from 'react-bootstrap'
import TopicList from '../components/resources/TopicList'

const Resources = () => {
  return (
    <div>
      <img src='/images/Group39449.png' alt='background' style={{ height: '85%', width: '100%' }} />
      <Container style={{ maxWidth: '1330px' }}>
        <TopicList />
      </Container>
    </div>
  )
}

export default Resources