import { useState } from "react";
import { Grid, styled } from "@mui/material";
import React from "react";
import SlideContent from "../public/SlideContent";
import BoxContent5 from "./public_anno/BoxContent5";

const BoxContain = styled("div")(({ theme }) => ({
  padding: "0 10vh",
  [theme.breakpoints.down("xl")]: {
    padding: "0",
  },
}));

const ImgVdSection = ({ content }) => {
  const [active, setActive] = useState(null);

  const handleClickShowBox = (index) => {
    console.log(index);
    setActive(index);
  };
  return (
    <div
      className="section-scroll"
      style={{ padding: "10vh 0" }}
      id={`${content.id}`}
    >
      <h2
        className="title-content"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {content.title}
      </h2>
      <BoxContain>
        <Grid container spacing={2}>
          <Grid item xs={12} md={10}>
            <SlideContent content={content} />
          </Grid>
          <Grid item xs={12} md={2}>
            <Grid container spacing={2}>
              {content.boxst.map((content, index) => {
                const isActive = active === index;
                console.log(isActive);
                return (
                  <Grid key={index} item xs={6} sm={3} md={12}>
                    <BoxContent5
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

export default ImgVdSection;
