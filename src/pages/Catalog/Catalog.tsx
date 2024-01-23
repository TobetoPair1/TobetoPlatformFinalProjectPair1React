import CourseCart from '../../Components/CourseCart/CourseCart';
import Filter from '../../Components/Filter/Filter';
import './Catalog.css';

type Props = {}

const Catalog = (props: Props) => {
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
                    <CourseCart/>
                    <ul className="pagination justify-content-center" role="navigation" aria-label="Pagination">
                      <li className="page-item disabled"><a className="page-link " tabIndex={-1} role="button" aria-disabled="true" aria-label="Previous page" rel="prev" /></li>
                      <li className="page-item active"><a rel="canonical" role="button" className="page-link" tabIndex={-1} aria-label="Page 1 is your current page" aria-current="page">1</a></li>
                      <li className="page-item"><a rel="next" role="button" className="page-link" tabIndex={0} aria-label="Page 2">2</a></li>
                      <li className="page-item"><a role="button" className="page-link" tabIndex={0} aria-label="Page 3">3</a></li>
                      <li className="page-item"><a role="button" className="page-link" tabIndex={0} aria-label="Page 4">4</a></li>
                      <li className="page-item"><a role="button" className="page-link" tabIndex={0} aria-label="Page 5">5</a></li>
                      <li className="page-item"><a className="page-link" tabIndex={0} role="button" aria-disabled="false" aria-label="Next page" rel="next" /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Catalog;