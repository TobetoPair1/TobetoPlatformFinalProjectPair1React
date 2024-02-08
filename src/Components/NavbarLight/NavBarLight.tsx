import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { TokenModel } from '../../Models/Responses/Token/TokenModel';
import { DecodedTokenModel } from '../../core/Models/DecodedTokenModel';
import { jwtDecode } from 'jwt-decode';
import tokenService from '../../core/services/tokenService';

type Props = {  
}
const NavBarLight = (props: Props) => {
  const path = useLocation().pathname;
  const [fullName,setFullName]=useState("");
  const [openProfileButton,setOpenButton]=useState(false);
async function OnPageLoad() {
  if(tokenService.hasToken()){
  const storageToken=tokenService.getToken();
  const token:TokenModel=JSON.parse(storageToken?storageToken:"");  
  const decodedToken:DecodedTokenModel = jwtDecode(token.token)
  const fullName=decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
  setFullName(fullName);
  }
  
}
const OnClickProfileButton=()=>{
  setOpenButton(!openProfileButton);
}
  useEffect( ()=>{    
    OnPageLoad();  
  },[])
  return (
    <nav className="position-relative navbar navbar-expand-xxl py-2 bg-white">
        <div className="container-fluid"><Link to="#"><span style={{boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%'}}><span style={{boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', maxWidth: '100%'}}><img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27170%27%20height=%2735%27/%3e" style={{display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px'}} /></span><img alt="" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&w=384&q=75" decoding="async" data-nimg="intrinsic" srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&w=256&q=75  1x,https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&w=384&q=75  2x" style={{position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%'}} /></span></Link><button data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" className="btn p-0 d-xxl-none navbar-burger"><svg width={24} height={24} viewBox="0 0 24 24" color="gray" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M3.5 7C3.22386 7 3 6.77614 3 6.5C3 6.22386 3.22386 6 3.5 6H20.5C20.7761 6 21 6.22386 21 6.5C21 6.77614 20.7761 7 20.5 7H3.5ZM3.5 12C3.22386 12 3 11.7761 3 11.5C3 11.2239 3.22386 11 3.5 11H20.5C20.7761 11 21 11.2239 21 11.5C21 11.7761 20.7761 12 20.5 12H3.5ZM3 16.5C3 16.7761 3.22386 17 3.5 17H20.5C20.7761 17 21 16.7761 21 16.5C21 16.2239 20.7761 16 20.5 16H3.5C3.22386 16 3 16.2239 3 16.5Z" fill="#828282" />
            </svg></button>
          <ul className="d-none d-xxl-flex navbar-nav">
            <li className="nav-item"><Link className={"nav-link "+ (path == "/platform"?"nav-active":"c-gray-3")} to="/platform">Ana Sayfa</Link></li>
            <li className="nav-item"><Link className={"nav-link "+ (path == "/profilim"?"nav-active":"c-gray-3")} to="/profilim">Profilim</Link></li>
            <li className="nav-item"><Link className={"nav-link "+ (path == "/degerlendirmeler"?"nav-active":"c-gray-3")} to="/degerlendirmeler">Değerlendirmeler</Link></li>
            <li className="nav-item"><Link className={"nav-link "+ (path == "/katalog"?"nav-active":"c-gray-3")} to="/katalog">Katalog</Link></li>
            <li className="nav-item"><Link className={"nav-link "+ (path == "/takvim"?"nav-active":"c-gray-3")} to="/takvim">Takvim</Link></li>
            <li className="nav-item"><Link className={"nav-link "+ (path == "/istanbul-kodluyor"?"nav-active":"c-gray-3")} to="/istanbul-kodluyor">İstanbul Kodluyor</Link></li>
          </ul>
          <div className="d-none d-xxl-block">
            <div className="d-flex justify-space-between align-items-center">
              <div className="mx-3 align-items-center d-flex align-items-center" style={{gap: '1em'}}><span className="tbt-gradient" /></div>
              <div className="btn-group header-avatar"><button type="button" className={"btn p-0 fw-normal b-r-35 text-end d-flex align-items-center"+(openProfileButton?"show":"")} data-bs-toggle="dropdown" aria-expanded="false" onClick={OnClickProfileButton}>
                  <div className="me-2"><span style={{boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%'}}><span style={{boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', maxWidth: '100%'}}><img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2736%27%20height=%2736%27/%3e" style={{display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px'}} /></span><img alt="" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&w=96&q=75" decoding="async" data-nimg="intrinsic" className="cv-pp-img rounded-circle " srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&w=48&q=75  1x,https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&w=96&q=75  2x" style={{position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%'}} /></span></div>
                  <div className="me-3">
                    <p className="mb-0 name">{fullName}</p>
                  </div><span><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none" >
                      <path d="M6 9L12 15L18 9" stroke="#828282" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg></span>
                </button>
                <ul className={"profile dropdown-menu"+(openProfileButton?"show":"")}>
                  <li><Link className="dropdown-item profil-dropdown" to="#">Profil Bilgileri</Link></li>
                  <li>
                    <hr className="dropdown-divider" style={{backgroundColor: 'rgb(204, 204, 204)', height: '1px'}} />
                  </li>
                  <li>
                    <hr className="dropdown-divider" style={{backgroundColor: 'rgba(100, 100, 100, 0.5)', height: '1px'}} />
                  </li>
                  <li><Link className="dropdown-item profil-dropdown" to="#">Oturumu Kapat </Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="d-xxl-none offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header"><Link className="me-auto navbar-brand" to="#"><span style={{boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%'}}><span style={{boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', maxWidth: '100%'}}><img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27165%27%20height=%2734%27/%3e" style={{display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px'}} /></span><img alt="" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&w=384&q=75" decoding="async" data-nimg="intrinsic" srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&w=256&q=75  1x,https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&w=384&q=75  2x" style={{position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%'}} /></span></Link><button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" /></div>
          <div className="offcanvas-body">
            <div>
              <ul className="nav flex-column">
                <li className="nav-item"><Link className="nav-link" to="#">Anasayfa</Link><Link className="nav-link" to="#">Değerlendirmeler</Link><Link className="nav-link" to="#">Profilim</Link><Link className="nav-link" to="#">Katalog</Link><Link className="nav-link" to="#">Takvim</Link></li>
              </ul>
            </div>
            <div className="mt-auto ">
              <div className="my-3 py-3 border-top border-light align-items-center d-flex align-items-center"><Link className="text-decoration-none c-gray-3 mx-3" to="#">Tobeto<svg width={20} height={20} to="#" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 7.49999L10 1.66666L17.5 7.49999V16.6667C17.5 17.1087 17.3244 17.5326 17.0118 17.8452C16.6993 18.1577 16.2754 18.3333 15.8333 18.3333H4.16667C3.72464 18.3333 3.30072 18.1577 2.98816 17.8452C2.67559 17.5326 2.5 17.1087 2.5 16.6667V7.49999Z" stroke="#959595" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.5 18.3333V10H12.5V18.3333" stroke="#959595" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg></Link></div>
              <div className="py-6">
                <div className="btn-group header-avatar w-100"><button type="button" className="btn p-1 fw-normal text-end d-flex align-items-center b-r-35 w-100 justify-content-between" data-bs-toggle="dropdown" aria-expanded="false">
                    <div className="me-3">
                      <p className="mb-0 small c-gray-3">Name LastName</p>
                    </div>
                    <div className="me-2"><span style={{boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%'}}><span style={{boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', maxWidth: '100%'}}><img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2740%27%20height=%2740%27/%3e" style={{display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px'}} /></span><img alt="" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&w=96&q=75" decoding="async" data-nimg="intrinsic" className="cv-pp-img rounded-circle " srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&w=48&q=75  1x,https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&w=96&q=75  2x" style={{position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%'}} /></span></div>
                  </button>
                  <ul className="dropdown-menu dd-bg" style={{borderWidth: '1px', borderColor: 'white'}}>
                    <li><Link className="dropdown-item" to="#" style={{color: 'white', fontSize: '14px'}}>Profil Bilgileri</Link></li>
                    <li><Link className="dropdown-item" to="#" style={{color: 'white', fontSize: '14px'}}>Oturumu Kapat </Link></li>
                  </ul>
                </div>
              </div>
              <p className="mb-4 mx-3 small text-muted">© 2022 Tobeto</p>
            </div>
          </div>
        </div>
        <div className="corp-list-modal d-none ">
          <div className="list">
            <div className="header"><span className="headerText">Kurumlar</span><span className="closeBtn"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 6L18 18" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg></span></div>
            <div className="corp-list row g-8 mt-6" />
          </div>
        </div>
      </nav>
  )
}

export default NavBarLight