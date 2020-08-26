import styled from "@emotion/styled";
import { animated } from "react-spring";

export const Wrapper = styled.div``;

export const AnimatedText = styled(animated.div)`
  font-family: Share Tech Mono;
  background: rgba(0, 0, 0, 0.65);
  margin-top: 6px;
  padding: 0 12px;
  z-index: 100;
  width: 100%;
  height: 80px;
  line-height: normal;
  color: white;
  font-size: 5em;
  font-weight: 800;
  text-transform: uppercase;
  will-change: transform, opacity;
  overflow: hidden;
  @media (max-width: 768px) {
    height: 50px;
    font-size: 3em;
  }

  @media (max-width: 475px) {
    height: 40px;
    font-size: 2em;
  }
`;
