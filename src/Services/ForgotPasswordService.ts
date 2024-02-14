import { ForgotPasswordAddRequestModel } from './../Models/Requests/ForgotPassword/ForgotPasswordAddRequestModel';
import { AxiosResponse } from "axios";
import axiosInstance from "../core/interceptors/axiosInceptor";
import { ForgotPasswordAddResponseModel } from '../Models/Responses/ForgotPassword/ForgotPasswordAddResponseModel';
import { ForgotPasswordGetResponseModel } from '../Models/Responses/ForgotPassword/ForgotPasswordGetResponseModel';

const getListByUserIdUrl = "/getbyuserid";
const apiUrl = "ForgotPassword";

class ForgotPasswordService {
    add(request: ForgotPasswordAddRequestModel): Promise<AxiosResponse<ForgotPasswordAddResponseModel, any>> {
        return axiosInstance.post<ForgotPasswordAddResponseModel>(apiUrl+"/add", request);
    }
    getByUserId(userId: string,code:string): Promise<AxiosResponse<ForgotPasswordGetResponseModel, any>> {
        return axiosInstance.get(apiUrl + getListByUserIdUrl, { params: {userid:userId,code:code} });
    }
}

export default new ForgotPasswordService();
