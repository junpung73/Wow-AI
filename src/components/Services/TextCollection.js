import React from "react";
import BoxContent2 from "./public-service/BoxContent2";
import SlideContent from "../public/SlideContent";
import TitleSection from "./public-service/TitleSection";
import { Grid, styled } from "@mui/material";

const BoxContain = styled('div')(({ theme }) => ({
  padding: '5vh 30vh',
  [theme.breakpoints.down("lg")]: {
    padding: '0',
  },
}))

const TextCollection = ({ content }) => {
  return (
    <div id={`${content.id}`} style={{ padding: '10vh 0' }}>
      <TitleSection content={content} />
      <BoxContain>
        <Grid container spacing={3} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
      </BoxContain>
    </div>
  );
};

export default TextCollection;
