import React from "react";
import BoxContent3 from "./public-service/BoxContent3";
import SlideContent from "../public/SlideContent";
import TitleSection from "./public-service/TitleSection";
import { Grid } from "@mui/material";

const IllutrationSection = ({ content }) => {
  return (
    <div style={{padding: '10vh 0'}} id='image-collection'>
      <TitleSection content={content} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={9}>
          <SlideContent content={content} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Grid container spacing={2}>
            {content.boxst.map((content, index) => (
              <Grid item xs={6} sm={12}>
                <BoxContent3 key={index} content={content} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default IllutrationSection;
