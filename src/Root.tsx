import React from "react";
import { Route, Switch } from "react-router-dom";

const Homepage = () => <p>Home</p>;
const About = () => <p>About</p>;

const Root: React.FC = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
      </Switch>
    </>
  );
};

export default Root;
