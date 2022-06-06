import { styled } from '@mui/material'
import React from 'react'
import 'react-slideshow-image/dist/styles.css'

const titleSlide = {
    fontWeight: "bold",
    fontSize: "var(--medium-text-3)",
}
const LinkStyled = styled('a')({
    color: "var(--primary-text)",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "var(--medium-text-3)",
    borderBottom: "2px solid var(--primary-text)",
    "&:hover": {
        color: "var(--primary-text)",
    }
})
const Topic = styled('h5')(({ theme }) => ({
    fontSize: "var(--medium-text-1)",
    fontWeight: "bold",
    paddingBottom: "30px",
    [theme.breakpoints.down('md')]: {
        fontSize: 'var(--medium-text-2)',
    },
}));

const SlideHome = () => {
    return (
        <div className="slide-container">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators" style={{ "&:active": { backgroundColor: "var(--secondary-bg)" } }}>
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
                        width: "90%",
                        margin: "auto",
                    }}>
                        <Topic>
                            A trusted partner that provides high-quality data <br /> solutions for AI training at a large scale.
                        </Topic>
                        <a className='btn btn-light' href='/contact'>Contact Us</a>

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
                        width: "90%",
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