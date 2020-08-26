import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";

import { Wrapper, Image } from "./Styles";

const ExperienceRow = ({ organization, title, years, location, imageSrc }) => {
  return (
    <Wrapper>
      <Grid container>
        <Grid item sm={2}>
          <Image src={imageSrc} />
        </Grid>
        <Grid container sm={4} alignItems="center">
          <Grid item sm={12}>
            {organization}
          </Grid>
          <Grid item sm={12}>
            {title}
          </Grid>
        </Grid>
        <Grid container item sm={6} justify="flex-end">
          Date
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default ExperienceRow;
