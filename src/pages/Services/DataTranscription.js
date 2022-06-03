import React from 'react'
import { Container } from 'react-bootstrap'
import Dataset from '../../components/public/Dataset'
import Download from '../../components/Services/Download'
import HignQuality from '../../components/Services/public-service/HignQuality'
import TransServices from '../../components/Services/TransServices'
import topicservices from '../../__mock__/topicservices'

const DataTranscription = () => {
  return (
    <div>
      <HignQuality topic={topicservices[0]} />
      <Container style={{maxWidth: '1330px'}}>
        <div className='arrowdown'>
          <img src='/images/scrollarrow.png' alt='scroll' />
        </div>
        <TransServices />
        <Download />
        <Dataset />
      </Container>
    </div>
  )
}

export default DataTranscription