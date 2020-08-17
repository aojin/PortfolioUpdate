import styled from "@emotion/styled";
import { animated } from "react-spring";

export const AnimatedText = styled(animated.div)`
  font-family: Share Tech Mono;
  width: 100%;
  height: 80px;
  line-height: 80px;
  color: #fffafa;
  font-size: 5em;
  font-weight: 800;
  text-transform: uppercase;
  will-change: transform, opacity;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 3em;
  }

  @media (max-width: 475px) {
    font-size: 1.75em;
  }

  @media (max-width: 350px) {
    font-size: 1.12em;
    height: 60px;
  }
`;
