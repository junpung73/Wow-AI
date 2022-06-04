import React from 'react'
import SlideContent from '../public/SlideContent'
import TitleSection from './public-service/TitleSection'
import BoxContent2 from './public-service/BoxContent2'
import { Grid } from '@mui/material'

const SpeechCollection = ({ content }) => {
    return (
        <div style={{ margin: "10vh 0" }}>
            <TitleSection content={content} />
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Grid container spacing={3}>
                        {content.boxst.map((content, index) => (
                            <Grid item xs={12}>
                                <BoxContent2 key={index} content={content} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <SlideContent content={content} />
                </Grid>
            </Grid>
        </div>
    )
}

export default SpeechCollection