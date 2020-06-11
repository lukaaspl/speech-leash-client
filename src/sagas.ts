import { takeEvery } from "redux-saga/effects";

function* log() {
  yield console.log("action");
}

function* saga() {
  yield takeEvery("", log);
}

export default saga;
