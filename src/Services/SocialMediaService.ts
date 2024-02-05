import { PageRequestModel } from "../Models/Requests/PageRequestModel";
import { AxiosResponse } from "axios";
import { Paginate } from "../core/Models/Paginate";
import axiosInstance from '../core/interceptors/axiosInceptor';
import { SocialMediaGetResponseModel } from "../Models/Responses/SocialMedia/SocialMediaGetResponseModel";
import { SocialMediaAddRequestModel } from "../Models/Requests/SocialMedia/SocialMediaAddRequestModel";
import { SocialMediaAddResponseModel } from "../Models/Responses/SocialMedia/SocialMediaAddResponseModel";
import { SocialMediaDeleteResponseModel } from "../Models/Responses/SocialMedia/SocialMediaDeleteResponseModel";
import { SocialMediaUpdateRequestModel } from "../Models/Requests/SocialMedia/SocialMediaUpdateRequestModel";
import { SocialMediaUpdateResponseModel } from "../Models/Responses/SocialMedia/SocialMediaUpdateresponseModel";

const getListByUserIdUrl = "/getlistbyuserid";
const apiUrl = "SocialMedia";

class SocialMediaService {
    getAll(pageRequest: PageRequestModel): Promise<AxiosResponse<Paginate<SocialMediaGetResponseModel>, any>> {
        return axiosInstance.get<Paginate<SocialMediaGetResponseModel>>(apiUrl, { params: { ...pageRequest } });
    }

    add(request: SocialMediaAddRequestModel): Promise<AxiosResponse<SocialMediaAddResponseModel, any>> {
        return axiosInstance.post<SocialMediaAddResponseModel>(apiUrl, request);
    }

    delete(id: string): Promise<AxiosResponse<SocialMediaDeleteResponseModel, any>> {
        return axiosInstance.delete(apiUrl + "/", { params: { id: id } });
    }

    update(request: SocialMediaUpdateRequestModel): Promise<AxiosResponse<SocialMediaUpdateResponseModel, any>> {
        return axiosInstance.put<SocialMediaUpdateResponseModel>(apiUrl + "/", request);
    }

    getListByUserId(pageRequest: PageRequestModel, userId: string): Promise<AxiosResponse<Paginate<SocialMediaGetResponseModel>, any>> {
        return axiosInstance.get(apiUrl + getListByUserIdUrl, { params: { ...pageRequest, userId } });
    }
}

export default new SocialMediaService();
