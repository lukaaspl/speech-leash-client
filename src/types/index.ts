import { RouteProps } from "react-router-dom";
import { RouteName } from "consts";

export interface AppRoute extends RouteProps {
  name: RouteName;
  path: string;
}

export interface Phrase {
  id: string;
  phrase: string;
  translation: string;
  createdAt: number;
}
