import { AnnouncementGetListResponseModel } from '../../Models/Responses/Announcement/AnnouncementGetListResponseModel';
import { Paginate } from '../../core/Models/Paginate';

type props = {
  announcements: Paginate<AnnouncementGetListResponseModel>;
};

const AnnouncementCard = (props: props) => {
  return (
    <>
      {props.announcements?.items?.map(
        (announcement: AnnouncementGetListResponseModel) => (
          <div key={announcement.id} className='col-md-4 col-12 my-4'>
            <div className='notfy-card notify'>
              <div className='d-flex flex-column'>
                <div className='d-flex justify-content-between mb-4'>
                  <span className='type'>Duyuru</span>
                  <span className='corp-names type'>İstanbul Kodluyor</span>
                </div>
                <span className='header '>{announcement.header}</span>
              </div>
              <div className='d-flex justify-content-between'>
                <span className='date'>
                  {new Date(announcement.createdDate).toLocaleDateString()}
                </span>
                <span className='read-more'>Devamını Oku</span>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};
export default AnnouncementCard;
