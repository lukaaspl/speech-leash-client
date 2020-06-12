import Navbar from "components/Navbar";
import React from "react";
import Breadcrumbs from "components/Breadcrumbs";
import { useRouteMatch } from "react-router-dom";

interface MainTemplateProps {
  children: React.ReactNode;
}

const sampleBC = [
  { name: "Home", path: "/" },
  { name: "Phrase List", path: "/phrases" },
  { name: "Phrase", path: "/phrases/1" },
];

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  const match = useRouteMatch();
  console.log(match);

  return (
    <div>
      <Navbar />
      <Breadcrumbs breadcrumbs={sampleBC} />
      {children}
    </div>
  );
};

export default MainTemplate;
