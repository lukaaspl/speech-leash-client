import Breadcrumbs from "components/Breadcrumbs";
import Navbar from "components/Navbar";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px 30px;
`;

interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Breadcrumbs />
      <Wrapper>{children}</Wrapper>
    </div>
  );
};

export default MainTemplate;
