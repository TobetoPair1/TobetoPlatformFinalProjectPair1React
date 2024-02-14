import { SkillGetListResponseModel } from './../Models/Responses/Skill/SkillGetListResponseModel';
import { SkillAddRequestModel } from './../Models/Requests/Skill/SkillAddRequestModel';
import { AxiosResponse } from "axios";
import { Paginate } from "../core/Models/Paginate";
import axiosInstance from "../core/interceptors/axiosInceptor";
import { SkillGetResponseModel } from "../Models/Responses/Skill/SkillGetResponseModel";
import { SkillUpdateResponseModel } from "../Models/Responses/Skill/SkillUpdateResponseModel";
import { BaseService } from "../core/services/baseService";
import { SkillAddResponseModel } from "../Models/Responses/Skill/SkillAddResponseModel";
import { SkillUpdateRequestModel } from "../Models/Requests/Skill/SkillUpdateRequestModel";
import { PageRequestModel } from '../Models/Requests/PageRequestModel';

const getListByUserIdUrl="/getlistbyuserid"
 class SkillService extends BaseService<Paginate<SkillGetResponseModel>,SkillGetResponseModel,SkillAddResponseModel,SkillAddRequestModel,SkillUpdateResponseModel,SkillUpdateRequestModel,null>{
    constructor() {
		super();
		this.apiUrl = "Skills";
	}

    GetListByUserId(pageRequest:PageRequestModel, userId:string):Promise<AxiosResponse<Paginate<SkillGetListResponseModel>, any>>{
        return axiosInstance.get(this.apiUrl+getListByUserIdUrl,{params:{...pageRequest, userId:userId}})
    }
    
}
export default new SkillService();