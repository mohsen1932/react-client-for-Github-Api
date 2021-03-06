import { put, takeEvery, call, select } from "redux-saga/effects";
import * as actions from "./actions";
import * as constants from "./constants";
import * as service from "../../../utils/services";
import get from "lodash/get";
import TotalResultLimit from "../../../utils/helpers/totalResultLimit";

export const getRepoList = state => state.repoList.data;
export function* getData(action) {
  if (action.payload.page === 1) yield put(actions.set([]));
  try {
    yield put(actions.loading(true));
    const response = yield call(service.searchRepo, action.payload);
    yield put(actions.setTotalCount(get(response.data, "total_count", 0)));
    const getWholeItems = yield select(getRepoList);
    const finalData = yield [...getWholeItems, ...response.data.items];
    const more_items_in_collection = TotalResultLimit(action.payload.page);
    const next_page = Number(action.payload.page) + 1;
    yield put(actions.setMoreItemsInCollection(more_items_in_collection));
    yield put(actions.setNextPage(Number(next_page)));
    yield put(actions.set(finalData));
  } catch (error) {
    yield put(actions.failure(true, error.data.message));
  } finally {
    yield put(actions.loading(false));
  }
}
export function* getDataSaga() {
  yield takeEvery(constants.GET, getData);
}
export default [getDataSaga()];
