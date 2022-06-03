import React from 'react'
import Topic from './Topic'

const TopicList = () => {
    return (
        <div id='resources' style={{ margin: '20vh auto' }}>
            <h2 className='title-content' style={{ textAlign: 'center' }}>Everything you need to <br />know about Crowdsourcing</h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a href='#resources' className='btn-pagination'>Topic 1</a>
                <a href='#resources' className='btn-pagination'>Topic 2</a>
                <a href='#resources' className='btn-pagination'>Topic 3</a>
                <a href='#resources' className='btn-pagination'>Topic 4</a>
                <a href='#resources' className='btn-pagination'>Topic 5</a>
                <a href='#resources' className='btn-pagination'>Topic 6</a>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <Topic />
                <Topic />
                <Topic />
                <Topic />
                <Topic />
                <Topic />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '10vh 0' }}>
                <a href='#resources' className='btn btn-dark'>Load more</a>
            </div>
        </div>
    )
}

export default TopicList