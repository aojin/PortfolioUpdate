import React from "react";
import ReactCursorPosition from "react-cursor-position";
import SpotLight from "./SpotLight/SpotLight";
import Nav from "./TreeViewNav/TreeViewNav";
import BounceDownArrow from "../../components/BounceDownArrow/BounceDownArrow";

import {
  Container,
  FlexContainer,
  FlexibleItem,
  InflexibleItem,
} from "./Styles";

const NavLayer = (props) => {
  return (
    <ReactCursorPosition>
      <Nav />
      <SpotLight />

      <Container>
        <FlexContainer>
          <FlexibleItem>{props.children}</FlexibleItem>
          <InflexibleItem></InflexibleItem>
        </FlexContainer>
        <BounceDownArrow />
      </Container>
    </ReactCursorPosition>
  );
};

export default NavLayer;
