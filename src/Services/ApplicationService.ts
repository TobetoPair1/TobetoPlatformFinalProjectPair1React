import { ApplicationUserRequestModel } from './../Models/Requests/Application/ApplicationUserRequestModel';
import { AxiosResponse } from 'axios';
import { ApplicationAddRequestModel } from '../Models/Requests/Application/ApplicationAddRequestModel';
import { ApplicationUpdateRequestModel } from '../Models/Requests/Application/ApplicationUpdateRequestModel';
import { PageRequestModel } from '../Models/Requests/PageRequestModel';
import { ApplicationAddResponseModel } from '../Models/Responses/Application/ApplicationAddResponseModel';
import { ApplicationDeleteResponseModel } from '../Models/Responses/Application/ApplicationDeleteResponseModel';
import { ApplicationGetListResponseModel } from '../Models/Responses/Application/ApplicationGetListResponseModel';
import { ApplicationGetResponseModel } from '../Models/Responses/Application/ApplicationGetResponseModel';
import { ApplicationUpdateResponseModel } from '../Models/Responses/Application/ApplicationUpdateResponseModel';
import { Paginate } from '../core/Models/Paginate';
import { BaseService } from '../core/services/baseService';
import axiosInstance from '../core/interceptors/axiosInterceptor';
import { ApplicationUserResponseModel } from '../Models/Responses/Application/ApplicationUserResponseModel';

const getListByUserIdUrl = '/getlistbyuserid';
const assignApplicationUrl = '/assignapplication';

class ApplicationService extends BaseService<
  Paginate<ApplicationGetListResponseModel>,
  ApplicationGetResponseModel,
  ApplicationAddRequestModel,
  ApplicationAddResponseModel,
  ApplicationUpdateRequestModel,
  ApplicationUpdateResponseModel,
  ApplicationDeleteResponseModel
> {
  constructor() {
    super();
    this.apiUrl = 'Applications';
  }

  GetListByUserId(
    pageRequest: PageRequestModel,
    userId: string
  ): Promise<AxiosResponse<Paginate<ApplicationGetListResponseModel>, any>> {
    return axiosInstance.get(this.apiUrl + getListByUserIdUrl, {
      params: { ...pageRequest, userId },
    });
  }

  AssignApplication(
    applicationUserRequest: ApplicationUserRequestModel
  ): Promise<AxiosResponse<ApplicationUserResponseModel, any>> {
    return axiosInstance.post(
      this.apiUrl + assignApplicationUrl,
      applicationUserRequest
    );
  }
}

export default new ApplicationService();
