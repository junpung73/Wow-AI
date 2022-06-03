import { styled } from '@mui/material'
import React from 'react'
import 'react-slideshow-image/dist/styles.css'

const titleSlide = {
    fontWeight: "600",
    fontSize: "1.5rem",
}
const LinkStyled = styled('a')({
    color: "var(--primary-text)",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "1.5rem",
    borderBottom: "2px solid var(--primary-text)",
    "&:hover": {
        color: "var(--primary-text)",
    }
})

const SlideHome = () => {
    return (
        <div className="slide-container">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators" style={{"&:active": {backgroundColor: "var(--secondary-bg)"}}}>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="btn-slide-home active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class="btn-slide-home" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" class="btn-slide-home" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="images/slidehome/slide_1.jpg" class="slide-image d-block w-100" alt="Slide 1" />
                        <div class="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="images/slidehome/slide_2.jpg" class="slide-image d-block w-100" alt="Slide 2" />
                        <div class="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="images/slidehome/slide_3.jpg" class="slide-image d-block w-100" alt="Slide 3" />
                        <div class="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                </div>
                <div style={{
                    position: "absolute",
                    top: "30vh",
                    display: "flex",
                    width: "100%"
                }}>
                    <div style={{
                        width: "1330px",
                        margin: "auto",
                    }}>
                        <h5 style={{
                            fontSize: "40px",
                            fontWeight: "600",
                            paddingBottom: "30px"
                        }}>
                            A trusted partner that provides high-quality data <br /> solutions for AI training at a large scale.
                        </h5>
                        <a className='btn btn-light' href='/'>Contact Us</a>

                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                <div style={{
                    position: "absolute",
                    bottom: "3vh",
                    display: "flex",
                    width: "100%"
                }}>
                    <div style={{
                        width: "1330px",
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "auto",
                    }}>
                        <LinkStyled href='#aboutus' >Scroll Down</LinkStyled>
                        <h5 style={titleSlide}>02 &ensp; | &ensp; 01</h5>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SlideHome