import axios, { AxiosResponse } from 'axios';
import { UserModel } from '../Models/Responses/UserModel';
import { LoginModel } from '../Models/Requests/LoginModel';
import { RegisterModel } from '../Models/Requests/RegisterModel';
import axiosInstance from '../utilities/interceptors/axiosInterceptors';

const login = 'Auth/login';
const register = 'Auth/register';

class AuthService {
  login(loginRequest: LoginModel): Promise<AxiosResponse<UserModel, any>> {
    return axiosInstance.post(login, loginRequest);
  }

  register(
    registerRequest: RegisterModel
  ): Promise<AxiosResponse<UserModel, any>> {
    return axiosInstance.post(register, registerRequest);
  }
}

export default new AuthService();
