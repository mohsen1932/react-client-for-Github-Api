import { takeEvery } from "redux-saga/effects";

export function* searchRepo(action) {

}
export function* searchRepoSaga() {
    yield takeEvery("ACTION_NAME", searchRepo);
}
export default [searchRepoSaga()];