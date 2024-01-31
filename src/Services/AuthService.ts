import { AxiosResponse } from 'axios';
import { LoginModel } from '../Models/Requests/Auth/LoginModel';
import { RegisterModel } from '../Models/Requests/Auth/RegisterModel';
import { TokenModel } from '../Models/Responses/Token/TokenModel';
import axiosInstance from '../core/interceptors/axiosInceptor';

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
