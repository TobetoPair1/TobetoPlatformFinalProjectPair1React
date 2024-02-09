import { ApplicationGetResponseModel } from "../../Models/Responses/Application/ApplicationGetResponseModel";
import { Paginate } from "../../core/Models/Paginate";

type Props = {
  applications:Paginate<ApplicationGetResponseModel>
};

const ApplicationForm = (props: Props) => {
  return (
    <>
    {props.applications?.items?.map((application) => {
      return <div key={application.id} className="col-md-6 col-12 mt-2">
      <div className={"status-card status_" + (application.state)}>
        <span className="form_name">{application.title}</span>
        <span className="form_status" />
        <span className="pull_back" />
        <span className="form_name">Bilgilendirme</span>
        <div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <i
                className="fa fa-check fa-sm"
                aria-hidden="true"
                style={{ color: "green", marginRight: "5px" }}
              />
              <span className="form_date">
                {application.formUrl}
              </span>
            </div>
          </div>
          <div>           
          </div>
        </div>
      </div>
    </div>
    })}
    </>
  );
};

export default ApplicationForm;