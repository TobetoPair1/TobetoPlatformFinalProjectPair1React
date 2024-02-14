import { AxiosResponse } from "axios";
import axiosInstance from "../core/interceptors/axiosInceptor";
import { Paginate } from "../core/Models/Paginate";
import { PageRequestModel } from "../Models/Requests/PageRequestModel";
import { CertificateAddRequestModel } from "../Models/Requests/Certificate/CertificateAddRequestModel";
import { CertificateGetResponseModel } from "../Models/Responses/Certificate/CertificateGetResponseModel";
import { CertificateAddResponseModel } from "../Models/Responses/Certificate/CertificateAddResponseModel";
import { CertificateDeleteResponseModel } from "../Models/Responses/Certificate/CertificateDeleteResponseModel";
import { CertificateGetListResponseModel } from "../Models/Responses/Certificate/CertificateGetListResponseModel";

const getListByUserIdUrl = "/getlistbyuserid";
const apiUrl = "Certificates";

class CertificateService {
    getAll(pageRequest: PageRequestModel): Promise<AxiosResponse<Paginate<CertificateGetListResponseModel>, any>> {
        return axiosInstance.get<Paginate<CertificateGetListResponseModel>>(apiUrl, { params: { ...pageRequest } });
    }

    add(request: CertificateAddRequestModel): Promise<AxiosResponse<CertificateAddResponseModel, any>> {
        return axiosInstance.post<CertificateAddResponseModel>(apiUrl, request);
    }

    delete(id: string): Promise<AxiosResponse<CertificateDeleteResponseModel, any>> {
        return axiosInstance.delete(apiUrl + "/", { params: { Id: id } });
    }

    getListByUserId(pageRequest: PageRequestModel, userId: string): Promise<AxiosResponse<Paginate<CertificateGetListResponseModel>, any>> {
        return axiosInstance.get(apiUrl + getListByUserIdUrl, { params: { ...pageRequest, userId } });
    }
}

export default new CertificateService();
