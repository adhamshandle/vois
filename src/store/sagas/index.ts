import {all} from "typed-redux-saga";
import genericSaga from "./generic";

export default function* rootSaga() {
  yield all([
    genericSaga(),
  ]);
}