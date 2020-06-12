import { phrases, RouteName } from "consts";
import { kebabCase } from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import MainTemplate from "templates/MainTemplate";
import { getRoutePath } from "utils/routing";

const PhraseListView = () => {
  return (
    <MainTemplate>
      <h1>Phrase List</h1>
      <ul>
        {phrases.map(({ id, phrase, translation, createdAt }) => {
          const phraseLinkPath = getRoutePath(RouteName.Phrase, {
            phraseId: id,
            phraseName: kebabCase(phrase),
          });

          return (
            <li key={id}>
              ang: {phrase}, pl: {translation}
              <br />
              <Link to={phraseLinkPath}>See more</Link>
            </li>
          );
        })}
      </ul>
    </MainTemplate>
  );
};

export default PhraseListView;
