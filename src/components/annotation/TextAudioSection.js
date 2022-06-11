import { useState } from 'react';
import { Grid, styled } from "@mui/material";
import React from "react";
import SlideContent from "../public/SlideContent";
import BoxContent4 from "./public_anno/BoxContent4";

const BoxContain = styled("div")(({ theme }) => ({
  padding: '0 15vh',
  [theme.breakpoints.down("lg")]: {
    padding: '0',
  },
}));

const TextAudioSection = ({ content }) => {
  const [active, setActive] = useState(null);

  const handleClickShowBox = (index) => {
    setActive(index);
  };
  return (
    <div style={{ padding: '10vh 0' }} id={`${content.id}`}>
      <h2 className="title-content">{content.title}</h2>
      <BoxContain>
        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            <SlideContent content={content} />
          </Grid>
          <Grid item xs={12} md={3}>
            <Grid container spacing={2}>
              {content.boxst.map((content, index) => {
                const isActive = active === index;
                return (
                  <Grid key={index} item xs={6} sm={3} md={12}>
                    <BoxContent4 index={index} isActive={isActive} handleClickShowBox={handleClickShowBox} content={content} />
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
        </Grid>
      </BoxContain>
    </div>
  );
};

export default TextAudioSection;
