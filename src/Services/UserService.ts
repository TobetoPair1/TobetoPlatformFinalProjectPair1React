import { PageRequestModel } from './../Models/Requests/PageRequestModel';
import { AxiosResponse } from "axios";
import { Paginate } from "../core/Models/Paginate";
import axiosInstance from "../core/interceptors/axiosInceptor";
import { UserModel } from '../Models/Responses/User/UserModel';
import { UserUpdateRequestModel } from '../Models/Requests/User/UserUpdateRequestModel';
import { UserUpdateResponseModel } from '../Models/Responses/User/UserUpdateResponseModel';
import { UserDeleteRequestModel } from '../Models/Requests/User/UserDeleteRequestModel';

const apiUrl="Users"
class CourseService{
    getAll(pageRequest:PageRequestModel): Promise<AxiosResponse<Paginate<UserModel>, any>> {
		return axiosInstance.get<Paginate<UserModel>>(apiUrl+"/GetAll",{params:{...pageRequest}});
	}

	getById(id: string): Promise<AxiosResponse<UserModel, any>> {
		return axiosInstance.get<UserModel>(apiUrl + "/Get",{params:{Id:id}});
	}

	update(request: UserUpdateRequestModel,): Promise<AxiosResponse<UserUpdateResponseModel, any>> {
		return axiosInstance.put<UserUpdateResponseModel>(apiUrl, request);
	}

	delete(deleteRequest: UserDeleteRequestModel) {
		return axiosInstance.delete(apiUrl,{data:{deleteRequest}});
	}
    getByMail(email: string): Promise<AxiosResponse<UserModel, any>> {
		return axiosInstance.get<UserModel>(apiUrl + "/GetByMail",{params:{mail:email}});
	}
    activate(email: string): Promise<AxiosResponse<boolean, any>> {
		return axiosInstance.get<boolean>(apiUrl + "/Activate",{params:{email:email}});
	}
}
export default new CourseService();