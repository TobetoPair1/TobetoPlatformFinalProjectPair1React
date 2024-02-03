import { AxiosResponse } from "axios";
import { ExamAddRequestModel } from "../Models/Requests/Exam/ExamAddRequestModel";
import { ExamUpdateRequestModel } from "../Models/Requests/Exam/ExamUpdateRequestModel";
import { PageRequestModel } from "../Models/Requests/PageRequestModel";
import { ExamAddResponseModel } from "../Models/Responses/Exam/ExamAddResponseModel";
import { ExamGetListResponseModel } from "../Models/Responses/Exam/ExamGetListResponseModel";
import { ExamGetResponseModel } from "../Models/Responses/Exam/ExamGetResponseModel";
import { ExamUpdateResponseModel } from "../Models/Responses/Exam/ExamUpdateResponseModel";
import { Paginate } from "../core/Models/Paginate";
import { BaseService } from "../core/services/baseService";
import axiosInstance from "../core/interceptors/axiosInceptor";
import { ExamAssignToUserRequestModel } from "../Models/Requests/Exam/ExamAssignToUserRequestModel";
import { ExamAssignToUserResponseModel } from "../Models/Responses/Exam/ExamAssignToUserResponseModel";
import { ExamDeleteResponseModel } from "../Models/Responses/Exam/ExamDeleteResponseModel";

const getListByUserIdUrl="/getlistbyuserid";
const assignToUserUrl="/assigntouser";
class ExamService extends BaseService<Paginate<ExamGetListResponseModel>,ExamGetResponseModel,ExamAddRequestModel,ExamAddResponseModel,ExamUpdateRequestModel,ExamUpdateResponseModel,ExamDeleteResponseModel>{
    constructor() {
		super();
		this.apiUrl = "Exams";
	}

    GetListByUserId(pageRequest:PageRequestModel,userId:string):Promise<AxiosResponse<Paginate<ExamGetListResponseModel>, any>>{
        return axiosInstance.get(this.apiUrl+getListByUserIdUrl,{params:{...pageRequest,userId}})
    }
    AssignToUser(examAssignToUserRequest:ExamAssignToUserRequestModel):Promise<AxiosResponse<ExamAssignToUserResponseModel,any>>{
        return axiosInstance.post(this.apiUrl+assignToUserUrl,examAssignToUserRequest)
    }
}
export default new ExamService();