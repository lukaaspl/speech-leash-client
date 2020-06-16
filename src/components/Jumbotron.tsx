import React from "react";
import Button from "react-bootstrap/Button";
import RbJumbotron from "react-bootstrap/Jumbotron";

interface JumbotronProps {
  title: string;
  message: string;
  actionButtonLabel: string;
}

const Jumbotron: React.FC<JumbotronProps> = ({
  title,
  message,
  actionButtonLabel,
}) => (
  <RbJumbotron>
    <h1>{title}</h1>
    <p>{message}</p>
    <p>
      <Button variant="primary">{actionButtonLabel}</Button>
    </p>
  </RbJumbotron>
);

export default Jumbotron;
