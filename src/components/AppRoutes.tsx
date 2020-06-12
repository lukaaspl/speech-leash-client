import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "routes";

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default AppRoutes;
