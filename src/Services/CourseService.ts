import { CourseGetListResponseModel} from '../Models/Responses/Course/CourseGetListResponseModel';
import { PageRequestModel } from "../Models/Requests/PageRequestModel";
import { AxiosResponse } from "axios";
import { Paginate } from "../core/Models/Paginate";
import axiosInstance from "../core/interceptors/axiosInceptor";
import { BaseService } from "../core/services/baseService";
import { CourseAddRequestModel } from '../Models/Requests/Course/CourseAddRequestModel';
import { CourseAddResponseModel } from '../Models/Responses/Course/CourseAddResponseModel';
import { CourseUpdateRequestModel } from '../Models/Requests/Course/CourseUpdateRequestModel';
import { CourseUpdateResponseModel } from '../Models/Responses/Course/CourseUpdateResponseModel';
import { CourseGetResponseModel } from '../Models/Responses/Course/CourseGetResponseModel';

const getListByUserIdUrl="/getlistbyuserid"
class CourseService extends BaseService<Paginate<CourseGetListResponseModel>,CourseGetResponseModel,CourseAddRequestModel,CourseAddResponseModel,CourseUpdateRequestModel,CourseUpdateResponseModel,null>{
    constructor() {
		super();
		this.apiUrl = "Courses";
	}

    GetListByUserId(pageRequest:PageRequestModel,userId:string):Promise<AxiosResponse<Paginate<CourseGetListResponseModel>, any>>{
        return axiosInstance.get(this.apiUrl+getListByUserIdUrl,{params:{...pageRequest,userId}})
    }
    
}
export default new CourseService();