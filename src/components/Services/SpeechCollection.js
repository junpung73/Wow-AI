import React, { useState } from "react";
import SlideContent from "../public/SlideContent";
import TitleSection from "./public-service/TitleSection";
import BoxContent2 from "./public-service/BoxContent2";
import { Grid, styled } from "@mui/material";

const BoxContain = styled("div")(({ theme }) => ({
  padding: "5vh 10rem",
  [theme.breakpoints.down("lg")]: {
    padding: "0",
  },
}));

const SpeechCollection = ({ content }) => {
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
      <TitleSection content={content} />
      <BoxContain>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Grid container spacing={3}>
              {content.boxst.map((content, index) => {
                const isActive = active === index;
                return (
                  <Grid item key={index} xs={6} sm={12}>
                    <BoxContent2
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
          <Grid item xs={12} sm={8}>
            <SlideContent content={content} />
          </Grid>
        </Grid>
      </BoxContain>
    </div>
  );
};

export default SpeechCollection;
