import { SurveyGetListResponseModel } from '../../Models/Responses/Survey/SurveyGetListResponseModel';
import { Paginate } from '../../core/Models/Paginate';

type props = {
  surveys: Paginate<SurveyGetListResponseModel>;
};

const SurveyCard = (props: props) => {
  return (
    <>
      {props.surveys?.items?.map((survey: SurveyGetListResponseModel) => (
        <div key={survey.id} className='col-md-4 col-12 my-4'>
          <div className='notfy-card news'>
            <div className='d-flex flex-column'>
              <div className='d-flex justify-content-between mb-4'>
                <span className='type'>Mülakat</span>
                <span className='corp-names type'>İstanbul Kodluyor</span>
              </div>
              <span className='header '>{survey.title}</span>
            </div>
            <div className='d-flex justify-content-between'>
              <span className='date'>
                {new Date(survey.createdDate).toLocaleDateString()}
              </span>
              <span className='read-more'>Mülakatı Değerlendir</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default SurveyCard;
