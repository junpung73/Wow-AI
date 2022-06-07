<<<<<<< HEAD
=======
import { Grid } from '@mui/material'
>>>>>>> 8518c29557bf7c637a0ef938cf3493522591c4a2
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
<<<<<<< HEAD
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <Topic />
                <Topic />
                <Topic />
                <Topic />
                <Topic />
                <Topic />
            </div>
=======
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Topic />
                </Grid>
                <Grid item xs={6}>
                    <Topic />
                </Grid>
                <Grid item xs={6}>
                    <Topic />
                </Grid>
                <Grid item xs={6}>
                    <Topic />
                </Grid>
                <Grid item xs={6}>
                    <Topic />
                </Grid>
                <Grid item xs={6}>
                    <Topic />
                </Grid>
            </Grid>
>>>>>>> 8518c29557bf7c637a0ef938cf3493522591c4a2
            <div style={{ display: 'flex', justifyContent: 'center', padding: '10vh 0' }}>
                <a href='#resources' className='btn btn-dark'>Load more</a>
            </div>
        </div>
    )
}

export default TopicList