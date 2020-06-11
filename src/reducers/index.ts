import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";

const appReducer = () => {
  return {
    x: "d",
  };
};

const wordsReducer = () => {
  return {
    hello: "world",
  };
};

const createRootReducer = (history: History) =>
  combineReducers({
    app: appReducer,
    words: wordsReducer,
    router: connectRouter(history),
  });

export default createRootReducer;
