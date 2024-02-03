import { Paginate } from '../../core/Models/Paginate'
import { ExamGetListResponseModel } from '../../Models/Responses/Exam/ExamGetListResponseModel'

type Props = {
    exams:Paginate<ExamGetListResponseModel>
}

function Exam(props: Props) {  
  return (    
<>
    {       
        props.exams?.items.map((item:ExamGetListResponseModel,i:number)=>{
            return <div key={i} className="exam-card  ">
                    <div className="exam-header"><span className="exam-name">{item.title}</span><span className="lesson-name">{item.type}</span></div>
                    <div className="exam-details">
                      <div><span className="exam_time">{item.time+" dk"}</span></div>
                    </div><span className="status-done" />
                  </div>
        })
    }
    </>
  )
}

export default Exam