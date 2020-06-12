import { AppRoute } from "types";
import DashboardView from "views/DashboardView";
import NewPhraseView from "views/NewPhraseView";
import PhraseListView from "views/PhraseListView";
import PhraseView from "views/PhraseView";
import { RouteName } from "consts";

const routes: AppRoute[] = [
  {
    name: RouteName.Root,
    path: "/",
    exact: true,
    component: DashboardView,
  },
  {
    name: RouteName.Phrases,
    path: "/phrases",
    exact: true,
    component: PhraseListView,
  },
  {
    name: RouteName.Phrase,
    path: "/phrases/:phraseId/:phraseName?",
    exact: true,
    component: PhraseView,
  },
  {
    name: RouteName.NewPhrase,
    path: "/new-phrase",
    exact: true,
    component: NewPhraseView,
  },
];

export default routes;
