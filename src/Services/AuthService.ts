import axios, { AxiosResponse } from 'axios';
import { UserModel } from '../Models/Responses/UserModel';
import { LoginModel } from '../Models/Requests/LoginModel';
import { RegisterModel } from '../Models/Requests/RegisterModel';
import axiosInstance from '../utilities/interceptors/axiosInterceptors';
import { TokenModel } from '../Models/Responses/TokenModel';

const login = 'Auths/login';
const register = 'Auths/register';

class AuthService {
  login(loginRequest: LoginModel): Promise<AxiosResponse<TokenModel, any>> {
    return axiosInstance.post(login, loginRequest);
  }

  register(
    registerRequest: RegisterModel
  ): Promise<AxiosResponse<TokenModel, any>> {
    return axiosInstance.post(register, registerRequest);
  }
}

export default new AuthService();
