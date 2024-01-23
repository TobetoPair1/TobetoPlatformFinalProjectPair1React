import { AddVideoRequest } from "../Models/Requests/video/addVideoRequest";
import { UpdateVideoRequest } from "../Models/Requests/video/updateVideoRequest";
import { AddVideoResponse } from "../Models/Responses/video/addVideoResponse";
import { GetAllVideoResponse } from "../Models/Responses/video/getAllVideoResponse";
import { GetVideoDetailResponse } from "../Models/Responses/video/getVideoDetailResponse";
import { UpdateVideoResponse } from "../Models/Responses/video/updateVideoResponse";
import { BaseService } from "../core/services/baseService";


class VideoService extends BaseService<
	GetAllVideoResponse,
	GetVideoDetailResponse,
	AddVideoRequest,
	AddVideoResponse,
	UpdateVideoRequest,
	UpdateVideoResponse
> {
	constructor() {
		super();
		this.apiUrl = "Video";
	}

	getByFilter() {}
}

export default new VideoService();
