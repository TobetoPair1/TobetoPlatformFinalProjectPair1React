import { DistrictResponseModel } from './../Models/Responses/District/DistrictResponseModel';
import axios, { AxiosResponse } from "axios";

const apiUrl="https://turkiyeapi.herokuapp.com/api/v1/provinces/"

class DistrictService{
    getDistricts(city:string):Promise<AxiosResponse<DistrictResponseModel, any>>{
        return axios.get(apiUrl,{params:{name:city}})
    }
}

export default new DistrictService();