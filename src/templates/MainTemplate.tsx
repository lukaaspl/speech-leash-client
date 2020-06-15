import Breadcrumbs from "components/Breadcrumbs";
import Navbar from "components/Navbar";
import React from "react";

interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Breadcrumbs />
      {children}
    </div>
  );
};

export default MainTemplate;
