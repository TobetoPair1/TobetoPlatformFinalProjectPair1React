import { SurveyAssignUserRequestModel } from './../Models/Requests/Survey/SurveyAssignUserRequestModel';
import axiosInstance from "../core/interceptors/axiosInceptor";
import { BaseService } from '../core/services/baseService';
import { Paginate } from '../core/Models/Paginate';
import { SurveyGetListResponseModel } from '../Models/Responses/Survey/SurveyGetListResponseModel';
import { SurveyGetResponseModel } from '../Models/Responses/Survey/SurveyGetResponseModel';
import { SurveyAddRequestModel } from '../Models/Requests/Survey/SurveyAddRequestModel';
import { SurveyAddResponseModel } from '../Models/Responses/Survey/SurveyAddResponseModel';
import { SurveyUpdateRequestModel } from '../Models/Requests/Survey/SurveyUpdateRequestModel';
import { SurveyUpdateResponseModel } from '../Models/Responses/Survey/SurveyUpdateResponseModel';
import { SurveyDeleteResponseModel } from '../Models/Responses/Survey/SurveyDeleteResponseModel';
import { PageRequestModel } from '../Models/Requests/PageRequestModel';
import { AxiosResponse } from 'axios';
import { SurveyAssignUserResponseModel } from '../Models/Responses/Survey/SurveyAssignUserResponseModel';

const getListByUserIdUrl="/getlistbyuserid";
const assignUserUrl="/assignuser";

class SurveyService extends BaseService<Paginate<SurveyGetListResponseModel>, SurveyGetResponseModel,SurveyAddRequestModel,SurveyAddResponseModel,SurveyUpdateRequestModel,SurveyUpdateResponseModel, SurveyDeleteResponseModel>
{
    constructor(){
        super();
        this.apiUrl = "Surveys";
    }
    GetListByUserId(pageRequest:PageRequestModel, userId:string)
    :Promise<AxiosResponse<Paginate<SurveyGetListResponseModel>, any>>
    {
        return axiosInstance.get(this.apiUrl+getListByUserIdUrl,{params:{...pageRequest,userId}})
    }
    AssignUser(SurveyAssignUserRequestModel:SurveyAssignUserRequestModel)
    :Promise<AxiosResponse<SurveyAssignUserResponseModel,any>>
    {
        return axiosInstance.post(this.apiUrl+assignUserUrl,SurveyAssignUserRequestModel)
    }
}
export default new SurveyService();