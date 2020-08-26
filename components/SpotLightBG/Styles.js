import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 0;
  min-width: 280px;

  filter: ${(props) => (props.isMobile ? "grayscale(100%)" : "none")};

  background-image: url("https://source.unsplash.com/random/2048×2048/?neon-signs");
  background-position: center;
  background-size: cover;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px;
  grid-template-rows: 1fr 250px;
`;

export const CenteredFlexColumn = styled.div`
  z-index: 1;
  padding: 0 0.5rem;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
