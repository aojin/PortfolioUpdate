import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 0;
  min-width: 280px;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("https://source.unsplash.com/random/2048×2048/?dark-neon");
  background-position: center;
  background-size: cover;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FlexibleItem = styled.div`
  flex: auto;
`;

export const InflexibleItem = styled.div`
  width: 180px;
`;
