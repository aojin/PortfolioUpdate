import React, { useEffect, useState } from "react";
import { Spot } from "./Styles";
import { css, jsx } from "@emotion/core";

const SpotLight = (props) => {
  const {
    elementDimensions: { width = 0, height = 0 } = {},
    position: { x = 0, y = 0 } = {},
  } = props;

  const percentagePos = `${Math.round((x / width) * 100)}% ${Math.round(
    (y / height) * 100
  )}%`;

  const background = `
    radial-gradient(
      circle at ${percentagePos},
      transparent 160px,
      rgba(0, 0, 0, 0.9) 200px
    );
  `;

  return <Spot bg={background} />;
};

export default SpotLight;
