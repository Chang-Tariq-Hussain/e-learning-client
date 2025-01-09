import {constants} from "../utils/constants";
import {api, axiosService} from "./api.service";
import {store} from "../redux/store"; // Import your Redux store
import {reset} from "../redux/slice/authSlice"; // Import your reset action from the userSlice

export const POST = async (url, data = null, config = null) => {
  var res = await api.post(constants.BASE_URL + url, data, config);
  return res?.data;
};
export const PATCH = async (url, data = null, config = null) => {
  var res = await api.patch(constants.BASE_URL + url, data, config);
  return res?.data;
};

export const Post_Without_Token = (url, data = null) => {
  return axiosService.post(constants.BASE_URL + url, data);
};

const handleLogout = () => {
  localStorage.removeItem('AUTH_ACCESS_TOKEN');
  store.dispatch(reset());
//   Additional logout logic if needed, like redirecting to the login page
};

export const GET = async (url, params = null) => {
  try {
    var res = await api.get(constants.BASE_URL + url, {
      params,
    });
    return res?.data;
  }
  catch (error) {
    if(error.response?.status === 401){
      handleLogout()
    }
    console.log(error)
  }

};

export const PUT = async (url, id, data = null, config = null) => {
  var res = await api.put(constants.BASE_URL + url + "/" + id, data, config);
  return res?.data;
};

export const DELETE = async (url, id, params) => {
  var res = await api.delete(constants.BASE_URL + url + "/" + id, params);
  return res?.data;
};
