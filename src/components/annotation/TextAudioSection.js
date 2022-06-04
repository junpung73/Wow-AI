import { Grid } from '@mui/material'
import React from 'react'
import SlideContent from '../public/SlideContent'
import BoxContent4 from './public_anno/BoxContent4'

const TextAudioSection = ({ content }) => {
    return (
        <div>
            <h2 className='title-content'>{content.title}</h2>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <SlideContent content={content} />
                </Grid>
                <Grid item xs={2}>
                    <Grid container spacing={2}>
                        {content.boxst.map((content, index) => (
                            <Grid item xs={12}>
                                <BoxContent4 key={index} content={content} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default TextAudioSection
