import { AxiosResponse } from "axios";
import { PageRequestModel } from "../Models/Requests/PageRequestModel";
import { Paginate } from "../core/Models/Paginate";
import axiosInstance from "../core/interceptors/axiosInceptor";
import { ExperianceDeleteResponseModel } from "../Models/Responses/Experiance/ExperianceDeleteResponseModel";
import { ExperianceAddResponseModel } from "../Models/Responses/Experiance/ExperianceAddResponseModel";
import { ExperianceAddRequestModel } from "../Models/Requests/Experiance/ExperianceAddRequestModel";
import { ExperianceGetListResponseModel } from "../Models/Responses/Experiance/ExperianceGetListResponseModel";

const getListByUserIdUrl="/getlistbyuserid"
const apiUrl = "Experiences"
class ExperianceService{
    getAll(pageRequest:PageRequestModel): Promise<AxiosResponse<Paginate<ExperianceGetListResponseModel>, any>> {
		return axiosInstance.get<Paginate<ExperianceGetListResponseModel>>(apiUrl,{params:{...pageRequest}});
	}
	add(request: ExperianceAddRequestModel): Promise<AxiosResponse<ExperianceAddResponseModel, any>> {
		return axiosInstance.post<ExperianceAddResponseModel>(apiUrl, request);
	}

	delete(id: string): Promise<AxiosResponse<ExperianceDeleteResponseModel, any>> {
		return axiosInstance.delete(apiUrl + "/",{params:{Id:id}});
	}
    GetListByUserId(pageRequest:PageRequestModel,userId:string):Promise<AxiosResponse<Paginate<ExperianceGetListResponseModel>, any>>{
        return axiosInstance.get(apiUrl+getListByUserIdUrl,{params:{...pageRequest,userId}})
    }
}
export default new ExperianceService();