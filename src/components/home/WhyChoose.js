import { styled } from '@mui/material'
import React from 'react'


const TitleTable = styled('td')(({ theme }) => ({
    padding: "3vh 0",
    [theme.breakpoints.down('sm')]: {
        padding: "1vh"
    },
}))
const TextTable = styled('td')(({ theme }) => ({
    padding: "5vh",
    [theme.breakpoints.down('sm')]: {
        // overflow: 'hidden',
        // textOverflow: 'ellipsis',
        // display: '-webkit-box',
        // WebkitBoxOrient: 'vertical',
        // WebkitLineClamp: '4',
        padding: "1vh"
    },
}))

const WhyChoose = () => {
    return (
        <div style={{ padding: "10vh 0" }}>
            <h2 className='title-content'>Why choose Wow AI</h2>
            <table style={{ borderCollapse: "collapse" }}>
                <tr>
                    <TitleTable className='title-description td-home-left'>1. Get the best quality</TitleTable>
                    <TextTable className='td-home-right'>We support contributors 24/7 both by humans and AI bots to make sure that quality is controlled timely.</TextTable>
                </tr>
                <tr>
                    <TitleTable className='title-description td-home-left'>2. Secure data at any level</TitleTable>
                    <TextTable className='td-home-right'>We strictly follow global compliance security regulations such as ISO27001, SOC2 Type II, GDPR, etc</TextTable>
                </tr>
                <tr>
                    <TitleTable className='title-description td-home-left'>3. Turnaround time with scalable solution</TitleTable>
                    <TextTable className='td-home-right'>We offer data collection & annotation service with a stellar workforce to collect text, speech, audio, video, and image in a limited timeframe. This comes along with a scalable solution to handle data in bulk, ensuring quality outputs.</TextTable>
                </tr>
                <tr>
                    <TitleTable className='title-description td-home-left'>4. Affordable price</TitleTable>
                    <TextTable className='td-home-right'>We commit to providing high-quality service with affordable pricing as we believe a long-term good partnership can create more impacts, greater sustainability, and increased value to all.</TextTable>
                </tr>
                <tr>
                    <TitleTable className='title-description td-home-left'>5. Additional 24/7 support</TitleTable>
                    <TextTable className='td-home-right'>Our project management team is highly supportive. We can provide additional services to get your project across the finish line. Let's discuss!</TextTable>
                </tr>
                <tr>
                    <TitleTable className='title-description td-home-left-last'>6. Global presence</TitleTable>
                    <TextTable>We are trusted by clients from different countries like the United States, United Kingdom, Latin America, Australia, Japan, and the rest of Asian countries.</TextTable>
                </tr>
            </table>
        </div>
    )
}

export default WhyChoose
