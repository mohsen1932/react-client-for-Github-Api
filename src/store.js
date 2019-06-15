import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import SearchRepo from "./pages/searchRepo/searchRepo";
import { all } from "redux-saga/effects";

const rootSaga = function*() {
  yield all([...SearchRepo.sagas]);
};
const sagaMiddleware = createSagaMiddleware();
const rootReducer = (state, action) => {
  return combineReducers({
      searchRepo: SearchRepo.reducers
  })(state, action);
};
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export { store };
