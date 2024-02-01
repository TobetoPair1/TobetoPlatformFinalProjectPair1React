import { CourseModel } from '../Models/Responses/Course/CourseModel';
import { PageRequestModel } from "../Models/Requests/PageRequestModel";
import { AxiosResponse } from "axios";
import { Paginate } from "../core/Models/Paginate";
import axiosInstance from "../core/interceptors/axiosInceptor";
import { BaseService } from "../core/services/baseService";
import { CourseAddRequestModel } from '../Models/Requests/Course/CourseAddRequestModel';
import { CourseAddResponseModel } from '../Models/Responses/Course/CourseAddResponseModel';
import { CourseUpdateRequestModel } from '../Models/Requests/Course/CourseUpdateRequestModel';
import { CourseUpdateResponseModel } from '../Models/Responses/Course/CourseUpdateResponseModel';

const getListByUserIdUrl="/getlistbyuserid"
class CourseService extends BaseService<Paginate<CourseModel>,CourseModel,CourseAddRequestModel,CourseAddResponseModel,CourseUpdateRequestModel,CourseUpdateResponseModel>{
    constructor() {
		super();
		this.apiUrl = "Courses";
	}

    GetListByUserId(pageRequest:PageRequestModel,userId:string):Promise<AxiosResponse<Paginate<CourseModel>, any>>{
        return axiosInstance.get(this.apiUrl+getListByUserIdUrl,{params:{...pageRequest,userId}})
    }
}
export default new CourseService();