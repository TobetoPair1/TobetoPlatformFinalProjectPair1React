import { Link } from 'react-router-dom'
import { Paginate } from '../../core/Models/Paginate'
import { CourseGetListResponseModel } from '../../Models/Responses/Course/CourseGetListResponseModel'

type Props = {
    courses:Paginate<CourseGetListResponseModel>
}

const EducatiostCourseCart = (props: Props) => {
    return (
        <>
        {props.courses?.items?.map((course)=>{
            return <div key={course.id} className='col-md-3 col-12 mb-4'>
            <div className='corp-edu-card'>
                <div
                    className='card-img'
                    style={{
                        backgroundImage:
                            'url('+course.imageUrl+')',
                    }}
                />
                <div className='card-content'>
                    <div className='d-flex flex-column'>
                        <span>
                           {course.name}
                        </span>
                        <span className='platform-course-date'>
                            {new Date(course.startOfDate).toLocaleString()}
                        </span>
                    </div>
                    <Link className='apply-btn' to=''>
                        Eğitime Git
                    </Link>
                </div>
            </div>
        </div>
        })}
        
        </>
    )
}

export default EducatiostCourseCart