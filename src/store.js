import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import RepoList from "./pages/searchRepo/repoList";
import { all } from "redux-saga/effects";

const rootSaga = function*() {
  yield all([...RepoList.sagas]);
};
const sagaMiddleware = createSagaMiddleware();
const rootReducer = (state, action) => {
  return combineReducers({
      repoList: RepoList.reducers
  })(state, action);
};
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export { store };
