import styled from "@emotion/styled";

export const Spot = styled.div`
  position: absolute;
  z-index: 1;
  height: 100vh;
  width: 100vw;
  background-image: ${(props) => props.bg};
`;
