import {AxiosResponse} from "axios";
import axiosInstance from "../interceptors/axiosInceptor";
import { PageRequestModel } from "../../Models/Requests/PageRequestModel";

export class BaseService<
	GetAllType,
	GetByIdType,
	AddRequestType,
	AddResponseType,
	UpdateRequestType,
	UpdateResponseType,
	DeleteResponseType,
> {
	public apiUrl: string;

	constructor() {
		this.apiUrl = "";
	}

	getAll(pageRequest:PageRequestModel): Promise<AxiosResponse<GetAllType, any>> {
		return axiosInstance.get<GetAllType>(this.apiUrl+"/getall",{params:{...pageRequest}});
	}

	getById(id: string): Promise<AxiosResponse<GetByIdType, any>> {
		return axiosInstance.get<GetByIdType>(this.apiUrl + "/get" ,{params:{Id:id}});
	}

	add(request: AddRequestType): Promise<AxiosResponse<AddResponseType, any>> {
		return axiosInstance.post<AddResponseType>(this.apiUrl, request);
	}

	update(
		request: UpdateRequestType,
	): Promise<AxiosResponse<UpdateResponseType, any>> {
		return axiosInstance.put<UpdateResponseType>(this.apiUrl, request);
	}

	delete(id: string):Promise<AxiosResponse<DeleteResponseType, any>> {
		return axiosInstance.delete(this.apiUrl + "/",{params:{Id:id}});
	}
}
