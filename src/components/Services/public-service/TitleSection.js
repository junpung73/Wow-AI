import React from 'react'

const TitleSection = ({ content }) => {
    return (
        <div>
            <h2 className='title-content'>{content.title}</h2>
            <p>{content.description}</p>
        </div>
    )
}

export default TitleSection
