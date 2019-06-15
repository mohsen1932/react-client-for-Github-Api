import axios from "axios";
import * as config from "../config";

axios.defaults.baseURL = config.API_BASE_URL;
axios.defaults.headers.common["Accept"] =
  "application/vnd.github.mercy-preview+json";
export const searchRepo = params =>
  axios
    .get(
      `/search/repositories?q=${params.topics}&per_page=${config.PER_PAGE}&&page=${params.page}`
    )
    .then(res => res)
    .catch(error => {
      throw error;
    });
