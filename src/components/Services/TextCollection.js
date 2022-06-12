import React, { useState } from "react";
import BoxContent2 from "./public-service/BoxContent2";
import SlideContent from "../public/SlideContent";
import TitleSection from "./public-service/TitleSection";
import { Grid, styled } from "@mui/material";

const BoxContain = styled("div")(({ theme }) => ({
  padding: "5vh 10rem",
  [theme.breakpoints.down("lg")]: {
    padding: "0",
  },
}));

const TextCollection = ({ content }) => {
  const [active, setActive] = useState(null);

  const handleClickShowBox = (index) => {
    setActive(index);
  };
  return (
    <div
      id={`${content.id}`}
      style={{ padding: "10vh 0" }}
      className="section-scroll"
    >
      <TitleSection content={content} />
      <BoxContain>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            <SlideContent content={content} />
          </Grid>
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
        </Grid>
      </BoxContain>
    </div>
  );
};

export default TextCollection;
