import { PageRequestModel } from './../Models/Requests/PageRequestModel';
import { PersonalInfoAddRequestModel } from "../Models/Requests/PersonalInfo/PersonalInfoAddRequestModel";
import { PersonalInfoUpdateRequestModel } from "../Models/Requests/PersonalInfo/PersonalInfoUpdateRequestModel";
import { PersonalInfoAddResponseModel } from "../Models/Responses/PersonalInfo/PersonalInfoAddResponseModel";
import { PersonalInfoGetListResponseModel } from "../Models/Responses/PersonalInfo/PersonalInfoGetListResponseModel";
import { PersonalInfoGetResponseModel } from "../Models/Responses/PersonalInfo/PersonalInfoGetResponseModel";
import { PersonalInfoUpdateResponseModel } from "../Models/Responses/PersonalInfo/PersonalInfoUpdateResponseModel";
import { Paginate } from "../core/Models/Paginate";
import { BaseService } from "../core/services/baseService";
import { AxiosResponse } from 'axios';
import axiosInstance from '../core/interceptors/axiosInceptor';

const getByUserIdUrl="/getbyuserid"
class PersonalInfoService extends BaseService<Paginate<PersonalInfoGetResponseModel>,PersonalInfoGetResponseModel,PersonalInfoAddRequestModel,PersonalInfoAddResponseModel,PersonalInfoUpdateResponseModel,PersonalInfoUpdateRequestModel,null>{
    constructor() {
		super();
		this.apiUrl = "PersonalInfos";
	}

    GetByUserId(userId:string):Promise<AxiosResponse<PersonalInfoGetResponseModel, any>>{
        return axiosInstance.get(this.apiUrl+getByUserIdUrl,{params:{userId:userId}})
    }
    
}
export default new PersonalInfoService();
