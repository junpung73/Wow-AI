import React from 'react'
import { Container } from 'react-bootstrap'
import TrainingData from '../components/Off-the-shelf/TrainingData'
import Dataset from '../components/public/Dataset'

const OffTheShelf = () => {
  return (
    <div>
      <Container>
        <TrainingData/>
        <Dataset/>
      </Container>
    </div>
  )
}

export default OffTheShelf