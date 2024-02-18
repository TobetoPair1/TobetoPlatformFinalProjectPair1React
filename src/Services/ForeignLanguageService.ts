import { ForeignLanguageAddResponseModel } from './../Models/Responses/ForeignLanguage/ForeignLanguageAddResponseModel';
import { AxiosResponse } from "axios";
import { PageRequestModel } from "../Models/Requests/PageRequestModel";
import { Paginate } from "../core/Models/Paginate";
import axiosInstance from "../core/interceptors/axiosInterceptor";
import { ForeignLanguageAddRequestModel } from '../Models/Requests/ForeignLanguage/ForeignLanguageAddRequestModel';
import { ForeignLanguageGetListResponseModel } from '../Models/Responses/ForeignLanguage/ForeignLanguageGetListResponseModel';

const getListByUserIdUrl="/getlistbyuserid"
const apiUrl = "ForeignLanguages"
class ForeignLanguageService{
    getAll(pageRequest:PageRequestModel): Promise<AxiosResponse<Paginate<ForeignLanguageGetListResponseModel>, any>> {
		return axiosInstance.get<Paginate<ForeignLanguageGetListResponseModel>>(apiUrl,{params:{...pageRequest}});
	}
	add(request: ForeignLanguageAddRequestModel): Promise<AxiosResponse<ForeignLanguageAddResponseModel, any>> {
		return axiosInstance.post<ForeignLanguageAddResponseModel>(apiUrl, request);
	}
    GetListByUserId(pageRequest:PageRequestModel,userId:string):Promise<AxiosResponse<Paginate<ForeignLanguageGetListResponseModel>, any>>{
        return axiosInstance.get(apiUrl+getListByUserIdUrl,{params:{...pageRequest,userId}})
    }
}
export default new ForeignLanguageService();
