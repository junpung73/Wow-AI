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
    <div style={{ paddingBottom: '40px' }}>
      <Slider {...settings} style={{
        width: "100%",
        border: "2px solid var(--secondary-bg)",
        borderRadius: "30px",
        padding: "1vh",
      }}>
        <>
          {content.img1 && (
            <img src={content.img1} class="img-slide-content d-block w-100" alt="slide1" />
          )}
          {content.video1 && (
            <video
              class="d-block w-100"
              width="100%"
              style={{borderRadius: '30px', aspectRatio: '1/1'}}
              autoPlay
              muted
              loop
            >
              <source src={content.video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </>
        <>
          {content.img2 && (
            <img src={content.img2} class="img-slide-content d-block w-100" alt="slide1" />
          )}
          {content.video2 && (
            <video
              class="d-block w-100"
              width="100%"
              style={{borderRadius: '30px', aspectRatio: '1/1'}}
              autoPlay
              muted
              loop
            >
              <source src={content.video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </>
        <>
          {content.img3 && (
            <img src={content.img3} class="img-slide-content d-block w-100" alt="slide1" />
          )}
          {content.video3 && (
            <video
              class="d-block w-100"
              width="100%"
              style={{borderRadius: '30px', aspectRatio: '1/1'}}
              autoPlay
              muted
              loop
            >
              <source src={content.video3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </>
      </Slider>
    </div>
  );
};

export default SlideContent;
