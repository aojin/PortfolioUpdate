import styled from "@emotion/styled";

export const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 2rem;
`;

export const Tagline = styled.div`
  margin-top: 0px;
  padding-top: 50px;
  text-align: center;
  letter-spacing: 0.3em;
  font-weight: 700;
  padding-bottom: 35px;
  font-size: 20px;
  text-transform: uppercase;
  color: #fafafa;
  font-family: Share Tech Mono;
`;

export const Cards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  @media (max-width: 786px) {
    justify-content: center;
    min-width: 312px;
  }
`;

export const CardWrapper = styled.li`
  display: flex;
  padding: 0.5rem;

  @media (max-width: 786px) {
    min-width: 312px;
  }
  @media (min-width: 30rem) {
    width: 50%;
  }
  @media (min-width: 56rem) {
    width: 33.3333%;
  }
  @media (min-width: 75rem) {
    width: 25%;
  }
`;

export const Card = styled.div`
  background-color: white;
  color: #999999;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const CardContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
`;

export const BadgeRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;
export const Badge = styled.img`
  height: 30px;
  padding-right: 12px;
`;

export const CardImage = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  filter: contrast(70%);
  //filter: saturate(180%);
  overflow: hidden;
  position: relative;
  transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
  &:hover {
    filter: contrast(100%);
  }
  &::before {
    content: "";
    display: block;
    padding-top: 56.25%; // 16:9 aspect ratio
  }
  @media (min-width: 40rem) {
    &::before {
      padding-top: 66.6%; // 3:2 aspect ratio
    }
  }
`;

export const CardTitle = styled.div`
  color: #696969;
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const CardText = styled.p`
  flex: 1 1 auto;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
`;
