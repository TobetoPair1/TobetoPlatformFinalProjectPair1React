import { AxiosResponse } from "axios";
import { InstructorGetResponseModel } from "../Models/Responses/Instructor/InstructorGetResponseModel";
import axiosInstance from "../core/interceptors/axiosInceptor";
import { InstructorUpdateRequestModel } from "../Models/Requests/Instructor/InstructorUpdateRequestModel";
import { InstructorUpdateResponseModel } from "../Models/Responses/Instructor/InstructorUpdateResponseModel";
import { PageRequestModel } from "../Models/Requests/PageRequestModel";
import { Paginate } from "../core/Models/Paginate";
import { InstructorGetListResponseModel } from "../Models/Responses/Instructor/InstructorGetListResponseModel";

const apiUrl="Instructors"
class InstructorService{
    getAll(pageRequest:PageRequestModel): Promise<AxiosResponse<Paginate<InstructorGetListResponseModel>, any>> {
		return axiosInstance.get<Paginate<InstructorGetListResponseModel>>(apiUrl+"/GetAll",{params:{...pageRequest}});
	}

	getById(id: string): Promise<AxiosResponse<InstructorGetResponseModel, any>> {
		return axiosInstance.get<InstructorGetResponseModel>(apiUrl + "/Get",{params:{Id:id}});
	}

	update(request: InstructorUpdateRequestModel,): Promise<AxiosResponse<InstructorUpdateResponseModel, any>> {
		return axiosInstance.put<InstructorUpdateResponseModel>(apiUrl, request);
	}
}
export default new InstructorService();