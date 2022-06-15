import React from 'react'

const TitleSection = ({ content }) => {
    return (
        <div>
            <h1 className='title-content'>{content.title}</h1>
            <p>{content.description}</p>
        </div>
    )
}

export default TitleSection
