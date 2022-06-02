import React from 'react'
import { Box } from '@mui/material'

const SlideContent = ({ content }) => {
    return (
        <div style={{width: "100%", padding: "4vh 2vh 0 2vh"}}>
            <Box style={{
                width: "100%",
                border: "2px solid var(--secondary-bg)",
                borderRadius: "30px",
                padding: "1vh"
            }}>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={content.img1} class="img-slide-content d-block w-100" alt="DocumentDatasetCollection1" />
                        </div>
                        <div class="carousel-item">
                            <img src={content.img2} class="img-slide-content d-block w-100" alt="AcousticDataCollection1" />
                        </div>
                        <div class="carousel-item">
                            <img src={content.img3} class="img-slide-content d-block w-100" alt="FacialDatasetCollection1" />
                        </div>
                    </div>
                </div>
            </Box>
            <div class="carousel-indicators btn-slide-section">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
        </div>
    )
}

export default SlideContent