import * as constants from "./constants";
const initial = {
  data: [],
  failure: false,
  message: "",
  loading: false,
  total_count: 0,
};
function repoListReducer(state = initial, action) {
  switch (action.type) {
    case constants.SET:
      return { ...state, ...action.payload };
    case constants.SET_TOTAL_COUNT:
      return { ...state, ...action.payload };
    case constants.FAILURE:
      return { ...state, ...action.payload };
    case constants.LOADING:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
export default repoListReducer;
