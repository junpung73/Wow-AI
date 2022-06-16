import { styled } from "@mui/material";
import React from "react";
import "react-slideshow-image/dist/styles.css";

// const titleSlide = {
//   fontWeight: "bold",
//   fontSize: "var(--medium-text-3)",
// };
const LinkStyled = styled("a")({
  color: "var(--primary-text)",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "var(--medium-text-3)",
  borderBottom: "2px solid var(--primary-text)",
  "&:hover": {
    color: "var(--primary-text)",
  },
});
const Topic = styled("h1")(({ theme }) => ({
  fontSize: "var(--medium-text-1)",
  fontWeight: "bold",
  paddingBottom: "30px",
  [theme.breakpoints.down("md")]: {
    fontSize: "var(--medium-text-2)",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "26px",
  },
}));
const ScrollDown = styled("div")(({ theme }) => ({
  position: "absolute",
  bottom: "3vh",
  display: "flex",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const SlideHome = () => {
  return (
    <div className="slide-container section-scroll">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div
          class="carousel-indicators"
          style={{ "&:active": { backgroundColor: "var(--secondary-bg)" } }}
        >
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="btn-slide-home active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            class="btn-slide-home"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            class="btn-slide-home"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <video
              class="slide-image d-block w-100"
              width="100%"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/ProfessionalProject.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
          <div class="carousel-item">
            <video
              class="slide-image d-block w-100"
              width="100%"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/BetterData2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
          <div class="carousel-item">
            <video
              class="slide-image d-block w-100"
              width="100%"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/ATrustedPartner.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "30vh",
            display: "flex",
            width: "100%",
          }}
        >
          <div className="contain">
            <Topic>A global provider of high-quality AI training data</Topic>
            <a className="btn btn-light" href="/contact">
              Contact Us
            </a>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        <ScrollDown>
          <div
            className="contain"
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "auto",
            }}
          >
            <LinkStyled href="#aboutus">Scroll Down</LinkStyled>
          </div>
        </ScrollDown>
      </div>
    </div>
  );
};

export default SlideHome;
