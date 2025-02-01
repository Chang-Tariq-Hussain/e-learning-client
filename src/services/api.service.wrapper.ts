import {constants} from "../utils/constants";
import {api, axiosService} from "./api.service.ts";
import {store} from "../redux/store.ts"; // Import your Redux store
import {reset} from "../redux/features/authSlice"; // Import your reset action from the userSlice

export const POST = async (url:string, data = null, config?:any) => {
  var res = await api.post(constants.BASE_URL + url, data, config);
  return res?.data;
};
export const PATCH = async (url:string, data = null, config?:any) => {
  var res = await api.patch(constants.BASE_URL + url, data, config);
  return res?.data;
};

export const Post_Without_Token = (url:string, data = null) => {
  return axiosService.post(constants.BASE_URL + url, data);
};

export const handleLogout = () => {
  localStorage.removeItem(constants.LOCAL_STORAGE_TOKEN);
  store.dispatch(reset());
//   Additional logout logic if needed, like redirecting to the login page
};

export const GET = async (url:string, params = null) => {
  try {
    var res = await api.get(constants.BASE_URL + url, {
      params,
    });
    return res?.data;
  }
  catch (error:any) {
    if(error.response?.status === 401){
      handleLogout()
    }
    console.log(error)
  }

};

export const PUT = async (url:string, id:number, data = null, config?:any) => {
  var res = await api.put(constants.BASE_URL + url + "/" + id, data, config);
  return res?.data;
};

export const DELETE = async (url:string, id:number, params:any) => {
  var res = await api.delete(constants.BASE_URL + url + "/" + id, params);
  return res?.data;
};
