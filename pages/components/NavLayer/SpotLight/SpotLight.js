import React, { useEffect } from "react";
import { Spot } from "./Styles";
import { css, jsx } from "@emotion/core";

const SpotLight = (props) => {
  const {
    detectedEnvironment: {
      isMouseDetected = false,
      isTouchDetected = false,
    } = {},
    elementDimensions: { width = 0, height = 0 } = {},
    isActive = false,
    isPositionOutside = false,
    position: { x = 0, y = 0 } = {},
  } = props;

  const percentagePos = `${Math.round((x / width) * 100)}% ${Math.round(
    (y / height) * 100
  )}%`;

  const background = `
    radial-gradient(
      circle at ${percentagePos},
      transparent 160px,
      rgba(0, 0, 0, 0.92) 240px
    );
  `;

  return <Spot bg={background} />;
};

export default SpotLight;
