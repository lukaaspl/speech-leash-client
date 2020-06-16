import React from "react";
import styled from "styled-components";

const Heading = styled.h2.attrs({ className: "display-4" })`
  margin-bottom: 10px;
`;

interface SectionHeadingProps {
  children: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => (
  <Heading>{children}</Heading>
);

export default SectionHeading;
