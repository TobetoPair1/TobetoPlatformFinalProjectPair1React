import { AxiosResponse } from "axios";
import { PageRequestModel } from "../Models/Requests/PageRequestModel";
import { Paginate } from "../core/Models/Paginate";
import axiosInstance from "../core/interceptors/axiosInceptor";
import { ExperienceGetListResponseModel } from "../Models/Responses/Experience/ExperienceGetListResponseModel";
import { ExperienceAddRequestModel } from "../Models/Requests/Experience/ExperienceAddRequestModel";
import { ExperienceAddResponseModel } from "../Models/Responses/Experience/ExperienceAddResponseModel";
import { ExperienceDeleteResponseModel } from "../Models/Responses/Experience/ExperienceDeleteResponseModel";

const getListByUserIdUrl="/getlistbyuserid"
const apiUrl = "Experiences"
class ExperianceService{
    getAll(pageRequest:PageRequestModel): Promise<AxiosResponse<Paginate<ExperienceGetListResponseModel>, any>> {
		return axiosInstance.get<Paginate<ExperienceGetListResponseModel>>(apiUrl,{params:{...pageRequest}});
	}
	add(request: ExperienceAddRequestModel): Promise<AxiosResponse<ExperienceAddResponseModel, any>> {
		return axiosInstance.post<ExperienceAddResponseModel>(apiUrl, request);
	}

	delete(id: string): Promise<AxiosResponse<ExperienceDeleteResponseModel, any>> {
		return axiosInstance.delete(apiUrl + "/",{params:{Id:id}});
	}
    GetListByUserId(pageRequest:PageRequestModel,userId:string):Promise<AxiosResponse<Paginate<ExperienceGetListResponseModel>, any>>{
        return axiosInstance.get(apiUrl+getListByUserIdUrl,{params:{...pageRequest,userId}})
    }
}
export default new ExperianceService();