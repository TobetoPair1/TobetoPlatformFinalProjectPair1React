import { PageRequestModel } from './../Models/Requests/PageRequestModel';
import { PersonalInfoUpdateRequestModel } from '../Models/Requests/PersonalInfo/PersonalInfoUpdateRequestModel';
import { PersonalInfoGetListResponseModel } from '../Models/Responses/PersonalInfo/PersonalInfoGetListResponseModel';
import { PersonalInfoGetResponseModel } from '../Models/Responses/PersonalInfo/PersonalInfoGetResponseModel';
import { PersonalInfoUpdateResponseModel } from '../Models/Responses/PersonalInfo/PersonalInfoUpdateResponseModel';
import { Paginate } from '../core/Models/Paginate';
import { AxiosResponse } from 'axios';
import axiosInstance from '../core/interceptors/axiosInceptor';

const getByUserIdUrl = '/getbyuserid';
const apiUrl = 'PersonalInfos';

class PersonalInfoService {
  GetByUserId(
    userId: string
  ): Promise<AxiosResponse<PersonalInfoGetResponseModel, any>> {
    return axiosInstance.get(apiUrl + getByUserIdUrl, {
      params: { userId: userId },
    });
  }

  update(
    request: PersonalInfoUpdateRequestModel
  ): Promise<AxiosResponse<PersonalInfoUpdateResponseModel, any>> {
    return axiosInstance.put(apiUrl, request);
  }
  getAll(
    pageRequest: PageRequestModel
  ): Promise<AxiosResponse<Paginate<PersonalInfoGetListResponseModel>, any>> {
    return axiosInstance.get(apiUrl + '/getall', {
      params: { ...pageRequest },
    });
  }
}
export default new PersonalInfoService();
