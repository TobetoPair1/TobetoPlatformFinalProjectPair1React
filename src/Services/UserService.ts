import { PageRequestModel } from './../Models/Requests/PageRequestModel';
import { AxiosResponse } from "axios";
import { Paginate } from "../core/Models/Paginate";
import axiosInstance from "../core/interceptors/axiosInceptor";
import { UserGetListResponseModel} from '../Models/Responses/User/UserGetListResponseModel';
import { UserUpdateRequestModel } from '../Models/Requests/User/UserUpdateRequestModel';
import { UserUpdateResponseModel } from '../Models/Responses/User/UserUpdateResponseModel';
import { UserDeleteRequestModel } from '../Models/Requests/User/UserDeleteRequestModel';
import { UserGetResponseModel } from '../Models/Responses/User/UserGetResponseModel';

const apiUrl="Users"
class UserService{
    getAll(pageRequest:PageRequestModel): Promise<AxiosResponse<Paginate<UserGetListResponseModel>, any>> {
		return axiosInstance.get<Paginate<UserGetListResponseModel>>(apiUrl+"/GetAll",{params:{...pageRequest}});
	}

	getById(id: string): Promise<AxiosResponse<UserGetResponseModel, any>> {
		return axiosInstance.get<UserGetResponseModel>(apiUrl + "/Get",{params:{Id:id}});
	}

	update(request: UserUpdateRequestModel,): Promise<AxiosResponse<UserUpdateResponseModel, any>> {
		return axiosInstance.put<UserUpdateResponseModel>(apiUrl, request);
	}

	delete(deleteRequest: UserDeleteRequestModel) {
		return axiosInstance.delete(apiUrl,{data:{deleteRequest}});
	}
    getByMail(email: string): Promise<AxiosResponse<UserGetResponseModel, any>> {
		return axiosInstance.get<UserGetResponseModel>(apiUrl + "/GetByMail",{params:{mail:email}});
	}
    activate(email: string): Promise<AxiosResponse<boolean, any>> {
		return axiosInstance.get<boolean>(apiUrl + "/Activate",{params:{email:email}});
	}
}
export default new UserService();