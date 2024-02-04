import { AxiosResponse } from "axios";
import { PageRequestModel } from "../Models/Requests/PageRequestModel";
import { Paginate } from "../core/Models/Paginate";
import { SkillGetListResponseModel } from "../Models/Responses/Skill/SkillGetListResponseModel";
import axiosInstance from "../core/interceptors/axiosInceptor";
import { SkillGetResponseModel } from "../Models/Responses/Skill/SkillGetResponseModel";
import { SkillUpdateRequestModel } from "../Models/Requests/Skill/SkillUpdateRequestModel";
import { SkillUpdateResponseModel } from "../Models/Responses/Skill/SkillUpdateResponseModel";

const apiUrl="Skills"
class SkillService{
    getAll(pageRequest:PageRequestModel): Promise<AxiosResponse<Paginate<SkillGetListResponseModel>, any>> {
		return axiosInstance.get<Paginate<SkillGetListResponseModel>>(apiUrl+"/GetAll",{params:{...pageRequest}});
	}

	getById(id: string): Promise<AxiosResponse<SkillGetResponseModel, any>> {
		return axiosInstance.get<SkillGetResponseModel>(apiUrl + "/Get",{params:{Id:id}});
	}

	update(request: SkillUpdateRequestModel,): Promise<AxiosResponse<SkillUpdateResponseModel, any>> {
		return axiosInstance.put<SkillUpdateResponseModel>(apiUrl, request);
	}
}
export default new SkillService();