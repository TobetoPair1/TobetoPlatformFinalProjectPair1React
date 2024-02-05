import { BaseService } from '../core/services/baseService';
import { Paginate } from '../core/Models/Paginate';
import { AnnouncementGetListResponseModel } from '../Models/Responses/Announcement/AnnouncementGetListResponseModel';
import { AnnouncementGetResponseModel } from '../Models/Responses/Announcement/AnnouncementGetResponseModel';
import { AnnouncementAddRequestModel } from '../Models/Requests/Announcement/AnnouncementAddRequestModel';
import { AnnouncementAddResponseModel } from '../Models/Responses/Announcement/AnnouncementAddResponseModel';
import { AnnouncementUpdateResponseModel } from '../Models/Responses/Announcement/AnnouncementUpdateResponseModel';
import { AnnouncementUpdateRequestModel } from '../Models/Requests/Announcement/AnnouncementUpdateRequestModel';
import { AnnouncementDeleteResponseModel } from '../Models/Responses/Announcement/AnnouncementDeleteResponseModel';

class AnnouncementService extends BaseService<
  Paginate<AnnouncementGetListResponseModel>,
  AnnouncementGetResponseModel,
  AnnouncementAddRequestModel,
  AnnouncementAddResponseModel,
  AnnouncementUpdateRequestModel,
  AnnouncementUpdateResponseModel,
  AnnouncementDeleteResponseModel
> {
  constructor() {
    super();
    this.apiUrl = 'Announcements';
  }
}

export default new AnnouncementService();
