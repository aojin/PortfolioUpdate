import React, { Fragment } from "react";

import SectionDivider from "../Dividers/SectionDivider";
import { SubSectionTitle, SubSectionWrapper } from "./Styles";

const SubSectionHeader = ({ title }) => {
  return (
    <SubSectionWrapper container justify="center">
      <SubSectionTitle justify="start" container>
        <h4>{title}</h4>
      </SubSectionTitle>
      <SectionDivider />
    </SubSectionWrapper>
  );
};

export default SubSectionHeader;
