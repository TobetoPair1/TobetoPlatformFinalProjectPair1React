import { ReactElement, useEffect, useState } from 'react';
import CourseCart from '../../Components/CourseCart/CourseCart';
import Filter from '../../Components/Filter/Filter';
import CourseService from '../../Services/CourseService';
import './PlatformCatalog.css';
import { Paginate } from '../../core/Models/Paginate';
import { CourseGetListResponseModel } from '../../Models/Responses/Course/CourseGetListResponseModel';

type Props = {}

const PlatformCatalog = (props: Props) => {  
  const [courses,setCourses]=useState<Paginate<CourseGetListResponseModel>>();
  async function GetCourses(page:number) {
    setCourses((await CourseService.getAll({PageIndex:page,PageSize:12})).data)
  }
  function nextPage(){
    if (courses?.hasNext) {
      GetCourses(courses.index+1);
    }
  }
  function previousPage(){
    if (courses?.hasPrevious) {
      GetCourses(courses.index-1);
    }
  }
  function GetPageButtonList(){
    if(courses?.pages){
    let list:ReactElement[]=[];
    for (let index = 0; index < courses.pages; index++) {      list.push(
        <li key={index} className={"page-item "+(courses.index==index?"active":"")}><a onClick={()=>GetCourses(index)} rel="canonical" role="button" className="page-link" tabIndex={-1} aria-label="Page 1 is your current page" aria-current="page">{(index+1)}</a></li> 
      )
      
    }
    return list;
    }
  }
  useEffect(()=>{
    GetCourses(0);
  },[])
  return (
   
          <div style={{marginTop: '70px', paddingTop: '70px'}}>
            <div className="search-section container-fluid">
              <div className=" container ">
                <div className="row">
                  <div className="col-md-9 col-12 search-container">
                    <div className="education-count"><span>Öğrenmeye başla !</span></div>
                    <div className="search-box"><input className="w-100" type="text" id="search" placeholder="Eğitim arayın..." /><button>
                        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'end'}}><svg width={33} height={33} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.125 26.125C21.2001 26.125 26.125 21.2001 26.125 15.125C26.125 9.04987 21.2001 4.125 15.125 4.125C9.04987 4.125 4.125 9.04987 4.125 15.125C4.125 21.2001 9.04987 26.125 15.125 26.125Z" stroke="#828282" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M28.8758 28.8748L22.8945 22.8936" stroke="#828282" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M28.8758 28.8748L22.8945 22.8936" stroke="#828282" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                          </svg></div>
                      </button></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mt-5 pb-20">
              <div className="row">
                <Filter/>
                <div className="col-lg-9 col-md-8 col-12">
                  <div className="row gy-6 gx-3">
                    <CourseCart courses={courses as Paginate<CourseGetListResponseModel>}/>
                    <ul className="pagination justify-content-center" role="navigation" aria-label="Pagination">
                    <li className={"page-item "+(courses?.hasPrevious?"":"disabled")}><a className="page-link " tabIndex={-1} role="button" aria-disabled="true" aria-label="Previous page" rel="prev" onClick={previousPage}/></li>                      
                      {GetPageButtonList()}             
                      <li className={"page-item "+(courses?.hasNext?"":"disabled")}><a className="page-link" tabIndex={0} role="button" aria-disabled="false" aria-label="Next page" rel="next" onClick={nextPage}/></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default PlatformCatalog;