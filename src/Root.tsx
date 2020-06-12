import AppRoutes from "components/AppRoutes";
import React from "react";

const Root: React.FC = () => {
  return <AppRoutes />;
};

export default Root;

interface MainTemplateProps {
  children: JSX.Element | JSX.Element[];
}
