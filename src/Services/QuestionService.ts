import { QuestionAssignToExamRequestModel } from './../Models/Requests/Question/QuestionAssignToExamRequestModel';
import { QuestionAddResponseModel } from './../Models/Responses/Question/QuestionAddResponseModel';
import { QuestionAddRequestModel } from "../Models/Requests/Question/QuestionAddRequestModel";
import { QuestionGetListResponseModel } from "../Models/Responses/Question/QuestionGetListResponseModel";
import { QuestionGetResponseModel } from "../Models/Responses/Question/QuestionGetResponseModel";
import { Paginate } from "../core/Models/Paginate";
import { BaseService } from "../core/services/baseService";
import { QuestionUpdateRequestModel } from '../Models/Requests/Question/QuestionUpdateRequestModet';
import { QuestionUpdateResponseModel } from '../Models/Responses/Question/QuestionUpdateResponseModel';
import { QuestionDeleteResponseModel } from '../Models/Responses/Question/QuestionDeleteResponseModel';
import { PageRequestModel } from '../Models/Requests/PageRequestModel';
import { AxiosResponse } from 'axios';
import axiosInstance from '../core/interceptors/axiosInterceptor';
import { QuestionAssignToExamResponseModel } from '../Models/Responses/Question/QuestionAssignToExamResponseModel';

const getListByExamIdUrl="/getlistbyexamid";
const assignToExamUrl="/assigntoexam";

class QuestionService extends
BaseService<Paginate<QuestionGetListResponseModel>,QuestionGetResponseModel,QuestionAddRequestModel,QuestionAddResponseModel,QuestionUpdateRequestModel,QuestionUpdateResponseModel,QuestionDeleteResponseModel>
{
    constructor(){
        super();
        this.apiUrl = "Questions";
    }
    GetListByExamId(pageRequest:PageRequestModel, examId:string)
    :Promise<AxiosResponse<Paginate<QuestionGetListResponseModel>, any>>
    {
        return axiosInstance.get(this.apiUrl+getListByExamIdUrl,{params:{...pageRequest,examId}})
    }
    AssignToExam(questionAssignToExamRequest:QuestionAssignToExamRequestModel)
    :Promise<AxiosResponse<QuestionAssignToExamResponseModel,any>>
    {
        return axiosInstance.post(this.apiUrl+assignToExamUrl,questionAssignToExamRequest)
    }
}
export default new QuestionService();