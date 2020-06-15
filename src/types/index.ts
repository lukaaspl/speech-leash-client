import { RouteProps } from "react-router-dom";
import { RouteName } from "consts";

// actions
export interface PlainAction {
  type: string;
}

export interface Action<T> extends PlainAction {
  payload: T;
}

// routes
export interface AppRoute extends RouteProps {
  name: RouteName;
  path: string;
}

// phrases
export interface Phrase {
  id: string;
  phrase: string;
  translation: string;
  createdAt: number;
}

// order
type SortOrder = "ASC" | "DESC";

interface SortOptions<T> {
  order: SortOrder;
  sortBy: keyof T;
}

// store collections
export interface PhrasesStoreState {
  phrases: Phrase[];
  sort: SortOptions<Phrase>;
}
