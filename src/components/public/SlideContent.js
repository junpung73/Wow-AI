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
    <div style={{paddingBottom: '40px'}}>
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
    </div>
  );
};

export default SlideContent;
