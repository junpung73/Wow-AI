import React from "react";
import BoxContent2 from "./public-service/BoxContent2";
import SlideContent from "../public/SlideContent";
import TitleSection from "./public-service/TitleSection";
import { Grid } from "@mui/material";

const TextCollection = ({ content }) => {
  return (
    <div id={`${content.id}`} style={{padding: '10vh 0'}}>
      <TitleSection content={content} />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <SlideContent content={content} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid container spacing={3}>
            {content.boxst.map((content, index) => (
              <Grid item xs={6} sm={12}>
                <BoxContent2 key={index} content={content} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default TextCollection;
