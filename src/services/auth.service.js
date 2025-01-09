import { POST } from "./api.service.wrapper";

export const LoginService = async (data) => {
    const response = await POST(apiUrl.login, data);
    SetToken(response.data.access_token.token);
    return response;
  };
  

export const GetToken = () => {
    return localStorage.getItem(storageKey);
  };

  export const SetToken = (token) => {
    if (token) localStorage.setItem(storageKey, token);
    else localStorage.removeItem(storageKey);
  };