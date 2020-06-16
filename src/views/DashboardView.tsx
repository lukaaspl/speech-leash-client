import Jumbotron from "components/Jumbotron";
import React from "react";
import MainTemplate from "templates/MainTemplate";

const DashboardView = () => (
  <MainTemplate>
    <Jumbotron
      title="Let's start"
      message="Let's start learning, add your first phrase and its translation!"
      actionButtonLabel="New phrase"
    />
    <p>Some CTAs and charts...</p>
  </MainTemplate>
);

export default DashboardView;
