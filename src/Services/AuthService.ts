import { AxiosResponse } from 'axios';
import { LoginRequestModel } from '../Models/Requests/Auth/LoginRequestModel';
import { RegisterRequestModel } from '../Models/Requests/Auth/RegisterRequestModel';
import { TokenModel } from '../Models/Responses/Token/TokenModel';
import axiosInstance from '../core/interceptors/axiosInceptor';
import { ChangePasswordModel } from '../Models/Requests/Auth/ChangePasswordRequestModel';

const login = 'Auths/login';
const register = 'Auths/register';
const changepassword = 'Auths/changepassword';

class AuthService {
  login(loginRequest: LoginRequestModel): Promise<AxiosResponse<TokenModel, any>> {
    return axiosInstance.post(login, loginRequest);
  }

  register(
    registerRequest: RegisterRequestModel
  ): Promise<AxiosResponse<TokenModel, any>> {
    return axiosInstance.post(register, registerRequest);
  }
  changePassword(
    changePasswordRequest: ChangePasswordModel): Promise<AxiosResponse<boolean, any>> {
    return axiosInstance.post(changepassword, changePasswordRequest);
  }
}

export default new AuthService();
