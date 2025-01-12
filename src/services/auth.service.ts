import { apiUrl, constants } from "../utils/constants";
import { POST } from "./api.service.wrapper";

export const LoginService = async (data:any) => {
    const response = await POST(apiUrl.login, data);
    SetToken(response.token);
    return response;
  };
  
export const SignupService = async (data: any) => {
  const response = await POST(apiUrl.signup, data);
  SetToken(response.token);
  return response;
}
export const GetToken = () => {
  return localStorage.getItem(constants.LOCAL_STORAGE_TOKEN);
};

export const SetToken = (token:string) => {
  if (token) localStorage.setItem(constants.LOCAL_STORAGE_TOKEN, token);
  else localStorage.removeItem(constants.LOCAL_STORAGE_TOKEN);
};