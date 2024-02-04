import { SessionAddResponseModel } from './../Models/Responses/Session/SessionAddResponseModel';
import { SessionAddRequestModel } from "../Models/Requests/Session/SessionAddRequestModel";
import { SessionGetListResponseModel } from "../Models/Responses/Session/SessionGetListResponseModel";
import { SessionGetResponseModel } from "../Models/Responses/Session/SessionGetResponseModel";
import { BaseService } from "../core/services/baseService";
import { SessionUpdateRequestModel } from '../Models/Requests/Session/SessionUpdateRequestModel';
import { SessionDeleteResponseModel } from '../Models/Responses/Session/SessionDeleteResponseModel';
import { Paginate } from '../core/Models/Paginate';
import { SessionUpdateResponseModel } from '../Models/Responses/Session/SessionUpdateResponseModel';
import { PageRequestModel } from '../Models/Requests/PageRequestModel';
import { AxiosResponse } from 'axios';
import axiosInstance from '../core/interceptors/axiosInceptor';
import { SessionAssignToInstructorRequestModel } from '../Models/Requests/Session/SessionAssignToInstructorRequestModel';
import { SessionAssignToInstructorResponseModel } from '../Models/Responses/Session/SessionAssignToInstructorResponseModel';

const getListByInstructorIdUrl="/getlistbyinstructorid";
const assignToInstructorUrl="/assigntoinstructor";

class SessionService extends BaseService<Paginate<SessionGetListResponseModel>, SessionGetResponseModel,SessionAddRequestModel,SessionAddResponseModel,SessionUpdateRequestModel,SessionUpdateResponseModel, SessionDeleteResponseModel>
{
    constructor(){
        super();
        this.apiUrl = "Sessions";
    }
    GetListByInstructorId(pageRequest:PageRequestModel, instructorId:string)
    :Promise<AxiosResponse<Paginate<SessionGetListResponseModel>, any>>
    {
        return axiosInstance.get(this.apiUrl+getListByInstructorIdUrl,{params:{...pageRequest,instructorId}})
    }
    AssignToInstructor(SessionAssignToInstructorRequest:SessionAssignToInstructorRequestModel)
    :Promise<AxiosResponse<SessionAssignToInstructorResponseModel,any>>
    {
        return axiosInstance.post(this.apiUrl+assignToInstructorUrl,SessionAssignToInstructorRequest)
    }
}
export default new SessionService();