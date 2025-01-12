import axios from "axios";
import {GetToken} from "./auth.service";
import {constants} from "../utils/constants";

axios.defaults.baseURL = constants.BASE_URL;

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error(error);
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  }
);

export const axiosService = axios;

export const api = axios.create({
  timeout: 60 * 1000,
});

api.interceptors.request.use(
  (config:any) => {
    let token = GetToken();
    return {
      ...config,
      headers: {
          Authorization: token === null ? "" : `Bearer ${token}`,
      },
    };
  },
  (exc) => Promise.reject(exc)
);
