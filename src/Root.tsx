import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";

const Homepage = () => <p>Home</p>;
const About = () => <p>About</p>;

const Root: React.FC = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Homepage</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
      </Switch>
    </>
  );
};

export default Root;
