import React from "react";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};


const SlideContent = ({ content }) => {
  return (
    <div style={{ width: "100%" }}>
      <Slider {...settings} style={{
          width: "100%",
          border: "2px solid var(--secondary-bg)",
          borderRadius: "30px",
          padding: "1vh",
        }}>
        <div>
          <img src={content.img1} class="img-slide-content d-block w-100" alt="slide1" />
        </div>
        <div>
          <img src={content.img2} class="img-slide-content d-block w-100" alt="slide1" />
        </div>
        <div>
          <img src={content.img3} class="img-slide-content d-block w-100" alt="slide1" />
        </div>
      </Slider>
      {/* <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner" style={{
          width: "100%",
          border: "2px solid var(--secondary-bg)",
          borderRadius: "30px",
          padding: "1vh",
        }}>
          <div class="carousel-item active">
            <img src={content.img1} class="img-slide-content d-block w-100" alt="slide1" />
          </div>
          <div class="carousel-item">
            <img src={content.img2} class="img-slide-content d-block w-100" alt="slide2" />
          </div>
          <div class="carousel-item">
            <img src={content.img3} class="img-slide-content d-block w-100" alt="slide3" />
          </div>
        </div>
        <div class="carousel-indicators btn-slide-section">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
      </div> */}
    </div>
  );
};

export default SlideContent;
