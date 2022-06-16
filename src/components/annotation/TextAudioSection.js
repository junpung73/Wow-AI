import { useState } from "react";
import { Grid, styled } from "@mui/material";
import React from "react";
import BoxContent4 from "./public_anno/BoxContent4";
import Slider from "react-slick";

const BoxContain = styled("div")(({ theme }) => ({
  padding: "0 10rem",
  [theme.breakpoints.down("lg")]: {
    padding: "0",
  },
}));

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const TextAudioSection = ({ content }) => {
  const [active, setActive] = useState(null);

  const handleClickShowBox = (index) => {
    setActive(index);
  };
  return (
    <div
      className="section-scroll"
      style={{ padding: "10vh 0" }}
      id={`${content.id}`}
    >
      <h1
        className="title-content"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {content.title}
      </h1>
      <BoxContain>
        <Grid container spacing={2}>
          <Grid item xs={12} md={10}>
            <div style={{ paddingBottom: "40px" }}>
              <Slider
                {...settings}
                style={{
                  width: "100%",
                  border: "2px solid var(--secondary-bg)",
                  borderRadius: "30px",
                  padding: "1vh",
                }}
              >
                <>
                  <img
                    src={content.img1}
                    class="img-slide-content d-block w-100"
                    alt="slide1"
                    style={{ aspectRatio: "24/19", objectFit: 'contain' }}
                  />
                </>
                <>
                  <img
                    src={content.img2}
                    class="img-slide-content d-block w-100"
                    alt="slide1"
                    style={{ aspectRatio: "24/19", objectFit: 'contain' }}
                  />
                </>
                <>
                  <img
                    src={content.img3}
                    class="img-slide-content d-block w-100"
                    alt="slide1"
                    style={{ aspectRatio: "24/19", objectFit: 'contain' }}
                  />
                </>
              </Slider>
            </div>
          </Grid>
          <Grid item xs={12} md={2}>
            <Grid container spacing={2}>
              {content.boxst.map((content, index) => {
                const isActive = active === index;
                return (
                  <Grid key={index} item xs={6} sm={3} md={12}>
                    <BoxContent4
                      index={index}
                      isActive={isActive}
                      handleClickShowBox={handleClickShowBox}
                      content={content}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </BoxContain>
    </div>
  );
};

export default TextAudioSection;
