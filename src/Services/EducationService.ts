import { AxiosResponse } from "axios";
import { EducationAddRequestModel } from "../Models/Requests/Education/EducationAddRequestModel";
import { PageRequestModel } from "../Models/Requests/PageRequestModel";
import { EducationAddResponseModel } from "../Models/Responses/Education/EducationAddResponseModel";
import { EducationGetListResponseModel } from "../Models/Responses/Education/EducationGetListResponseModel";
import { Paginate } from "../core/Models/Paginate";
import axiosInstance from "../core/interceptors/axiosInceptor";
import { EducationDeleteResponseModel } from "../Models/Responses/Education/EducationDeleteResponseModel";

const getListByUserIdUrl="/getlistbyuserid"
const apiUrl = "Educations"
class EducationService{
    getAll(pageRequest:PageRequestModel): Promise<AxiosResponse<Paginate<EducationGetListResponseModel>, any>> {
		return axiosInstance.get<Paginate<EducationGetListResponseModel>>(apiUrl,{params:{...pageRequest}});
	}
	add(request: EducationAddRequestModel): Promise<AxiosResponse<EducationAddResponseModel, any>> {
		return axiosInstance.post<EducationAddResponseModel>(apiUrl, request);
	}

	delete(id: string): Promise<AxiosResponse<EducationDeleteResponseModel, any>> {
		return axiosInstance.delete(apiUrl + "/",{params:{Id:id}});
	}
    GetListByUserId(pageRequest:PageRequestModel,userId:string):Promise<AxiosResponse<Paginate<EducationGetListResponseModel>, any>>{
        return axiosInstance.get(apiUrl+getListByUserIdUrl,{params:{...pageRequest,userId}})
    }
}
export default new EducationService();