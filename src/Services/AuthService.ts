import { AxiosResponse } from 'axios';
import { LoginRequestModel } from '../Models/Requests/Auth/LoginRequestModel';
import { RegisterRequestModel} from '../Models/Requests/Auth/RegisterRequestModel';
import { TokenModel } from '../Models/Responses/Token/TokenModel';
import axiosInstance from '../core/interceptors/axiosInceptor';

const login = 'Auths/login';
const register = 'Auths/register';

class AuthService {
  login(loginRequest: LoginRequestModel): Promise<AxiosResponse<TokenModel, any>> {
    return axiosInstance.post(login, loginRequest);
  }

  register(
    registerRequest: RegisterRequestModel
  ): Promise<AxiosResponse<TokenModel, any>> {
    return axiosInstance.post(register, registerRequest);
  }
}

export default new AuthService();
