import axios, { AxiosResponse } from "axios"
import { UserModel } from "../Models/Responses/UserModel"
import { LoginModel } from "../Models/Requests/LoginModel"
import { RegisterModel } from "../Models/Requests/RegisterModel"

const loginUrL = 'http://localhost:38106/api/Auth/login';
const registerUrl = 'http://localhost:38106/api/Auth/register'; 

class AuthService {
    login(loginRequest:LoginModel):Promise<AxiosResponse<UserModel,any>> {
        return axios.post(loginUrL,loginRequest);
    }

    register(registerRequest:RegisterModel):Promise<AxiosResponse<UserModel,any>> {
        return axios.post(registerUrl,registerRequest);
    }
}

export default new AuthService();