import { CourseModel } from '../Models/Responses/Course/CourseModel';
import { PageRequest } from "../Models/Requests/PageRequestModel";
import { AxiosResponse } from "axios";
import { Paginate } from "../core/Models/Paginate";
import axiosInstance from "../core/interceptors/axiosInceptor";
import { BaseService } from "../core/services/baseService";
import { CourseAddRequestModel } from '../Models/Responses/Course/CourseAddRequestModel';
import { CourseAddResponseModel } from '../Models/Responses/Course/CourseAddResponseModel';

const getListByUserIdUrl="/Courses/getlistbyuserid"
class CourseService extends BaseService<Paginate<CourseModel>,CourseModel,CourseAddRequestModel,CourseAddResponseModel,CourseModel,CourseModel>{
    constructor() {
		super();
		this.apiUrl = "Courses";
	}

    GetListByUserId(pageRequest:PageRequest,userId:string):Promise<AxiosResponse<Paginate<CourseModel>, any>>{
        return axiosInstance.get(getListByUserIdUrl,{params:{...pageRequest,userId}})
    }
}
export default new CourseService();