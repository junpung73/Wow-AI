import { Grid } from "@mui/material";
import React from "react";
import SlideContent from "../public/SlideContent";
import BoxContent5 from "./public_anno/BoxContent5";

const ImgVdSection = ({ content }) => {
  return (
    <div>
      <h2 className="title-content">{content.title}</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} md={10}>
          <SlideContent content={content} />
        </Grid>
        <Grid item xs={12} md={2}>
          <Grid container spacing={2}>
            {content.boxst.map((content, index) => (
              <Grid item xs={6} sm={3} md={12}>
                <BoxContent5 key={index} content={content} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ImgVdSection;
