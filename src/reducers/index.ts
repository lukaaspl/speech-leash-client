import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import phrasesReducer from "./phrases";

const createRootReducer = (history: History) =>
  combineReducers({
    phrases: phrasesReducer,
    router: connectRouter(history),
  });

export default createRootReducer;
