import React from 'react'

const textTable = {
    padding: "5vh",
}
const titleTable = {
    padding: "3vh 0",
}

const WhyChoose = () => {
    return (
        <div style={{ padding: "10vh 0" }}>
            <h2 className='title-content'>Why choose Wow AI</h2>
            <table style={{ borderCollapse: "collapse" }}>
                <tr>
                    <td className='title-description td-home-left' style={titleTable}>1. Get the best quality</td>
                    <td className='td-home-right' style={textTable}>We support contributors 24/7 both by humans and AI bots to make sure that quality is controlled timely.</td>
                </tr>
                <tr>
                    <td className='title-description td-home-left' style={titleTable}>2. Secure data at any level</td>
                    <td className='td-home-right' style={textTable}>We strictly follow global compliance security regulations such as ISO27001, SOC2 Type II, GDPR, etc</td>
                </tr>
                <tr>
                    <td className='title-description td-home-left' style={titleTable}>3. Turnaround time with scalable solution</td>
                    <td className='td-home-right' style={textTable}>We offer data collection & annotation service with a stellar workforce to collect text, speech, audio, video, and image in a limited timeframe. This comes along with a scalable solution to handle data in bulk, ensuring quality outputs.</td>
                </tr>
                <tr>
                    <td className='title-description td-home-left' style={titleTable}>4. Affordable price</td>
                    <td className='td-home-right' style={textTable}>We commit to providing high-quality service with affordable pricing as we believe a long-term good partnership can create more impacts, greater sustainability, and increased value to all.</td>
                </tr>
                <tr>
                    <td className='title-description td-home-left' style={titleTable}>5. Additional 24/7 support</td>
                    <td className='td-home-right' style={textTable}>Our project management team is highly supportive. We can provide additional services to get your project across the finish line. Let's discuss!</td>
                </tr>
                <tr>
                    <td className='title-description td-home-left-last' style={titleTable}>6. Global presence</td>
                    <td style={textTable}>We are trusted by clients from different countries like the United States, United Kingdom, Latin America, Australia, Japan, and the rest of Asian countries.</td>
                </tr>
            </table>
        </div>
    )
}

export default WhyChoose
