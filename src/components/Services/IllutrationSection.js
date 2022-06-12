import React, { useState } from "react";
import BoxContent3 from "./public-service/BoxContent3";
import SlideContent from "../public/SlideContent";
import TitleSection from "./public-service/TitleSection";
import { Grid, styled } from "@mui/material";

const BoxContain = styled("div")(({ theme }) => ({
  padding: "5vh 10rem",
  [theme.breakpoints.down("lg")]: {
    padding: "0",
  },
}));

const IllutrationSection = ({ content }) => {
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
        <Grid container spacing={2}>
          <Grid item xs={12} sm={9}>
            <SlideContent content={content} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Grid container spacing={2}>
              {content.boxst.map((content, index) => {
                const isActive = active === index;
                return (
                  <Grid key={index} item xs={6} sm={12}>
                    <BoxContent3
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

export default IllutrationSection;
