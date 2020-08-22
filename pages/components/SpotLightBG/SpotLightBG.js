import React from "react";
import ReactCursorPosition from "react-cursor-position";
import SpotLight from "./SpotLight/SpotLight";
import SpringHero from "../SpringHero/SpringHero";
import BounceDownArrow from "../../components/BounceDownArrow/BounceDownArrow";

import { Container, Grid, CenteredFlexColumn } from "./Styles";

const SpotLightBG = ({ isMobile }) => {
  return (
    <ReactCursorPosition>
      {isMobile ? <div></div> : <SpotLight id="spotlight"></SpotLight>}

      <Container isMobile={isMobile} id="bgImageContainer">
        <Grid>
          <CenteredFlexColumn>
            <SpringHero />
          </CenteredFlexColumn>
        </Grid>
      </Container>
    </ReactCursorPosition>
  );
};

export default SpotLightBG;
