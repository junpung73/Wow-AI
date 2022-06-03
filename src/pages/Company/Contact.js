import React from 'react'
import Dataset from '../../components/public/Dataset'

const Contact = () => {
  return (
    <div>
      <Dataset />
      <div style={{ display: "flex", justifyContent: "center", textAlign: "center", height: "40vh" }}>
        <h5 className='title-description'>
          Contact Details <br />
          Address: 19W 34TH ST STE 1018, NY, USA <br />
          Email: contact@wow-ai.com
        </h5>
      </div>
    </div>
  )
}

export default Contact