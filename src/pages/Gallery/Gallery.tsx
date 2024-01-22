import './Gallery.css';

const Gallery = () => {
  return (
    <div>
  <div id="__next" style={{position: 'sticky', top: '0'}}>
    <div className="row bg-darkblue">
      <div className="col-12 d-flex justify-content-center p-10 istkaLogo"><span style={{boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%'}}><span style={{boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', maxWidth: '100%'}}><img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27421%27%20height=%2772%27/%3e" style={{display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px'}} /></span><img alt="İstanbul Kodluyor Logo" srcSet="https://tobeto.com/_next/static/media/ik-logo-light-sm.8412685f.svg  1x,https://tobeto.com/_next/static/media/ik-logo-light-sm.8412685f.svg  2x" src="https://tobeto.com/_next/static/media/ik-logo-light-sm.8412685f.svg" decoding="async" data-nimg="intrinsic" style={{position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%'}} /></span></div>
    </div>
    <div className="container-fluid pt-8" style={{minHeight: '100vh'}}>
      <div>
        <div className="gallery-wrapper mt-10 ">
          <div className="gallery-card">
            <figure className="card__thumbnail"><img src="https://tobeto.s3.cloud.ngn.com.tr/89a7a4a5_ed31_47a7_a4f9_af9fed165671_3_072339c572.jpg" alt="Proje Lansmanı" /><span className="card__title">Proje Lansmanı</span></figure>
            <div className="overlay-bg" />
          </div>
          <div className="gallery-card">
            <figure className="card__thumbnail"><img src="https://tobeto.s3.cloud.ngn.com.tr/lansman_1_705d598948.jpg" alt="Proje Lansmanı" /><span className="card__title">Proje Lansmanı</span></figure>
            <div className="overlay-bg" />
          </div>
          <div className="gallery-card">
            <figure className="card__thumbnail"><img src="https://tobeto.s3.cloud.ngn.com.tr/DSC_01824_41b41689ce.JPG" alt="Kampüs buluşması 1" /><span className="card__title">Kampüs buluşması 1</span></figure>
            <div className="overlay-bg" />
          </div>
          <div className="gallery-card">
            <figure className="card__thumbnail"><img src="https://tobeto.s3.cloud.ngn.com.tr/DSC_06023_1491907961.JPG" alt="Kampüs Buluşması 1" /><span className="card__title">Kampüs Buluşması 1</span></figure>
            <div className="overlay-bg" />
          </div>
          <div className="gallery-card">
            <figure className="card__thumbnail"><img src="https://tobeto.s3.cloud.ngn.com.tr/New_Project_2_daa103de14.jpg" alt="Kampüs Buluşması 2" /><span className="card__title">Kampüs Buluşması 2</span></figure>
            <div className="overlay-bg" />
          </div>
          <div className="gallery-card">
            <figure className="card__thumbnail"><img src="https://tobeto.s3.cloud.ngn.com.tr/DSCF_3893_8edb49df7e.JPG" alt="Feedback Session Meeting" /><span className="card__title">Feedback Session Meeting</span></figure>
            <div className="overlay-bg" />
          </div>
        </div>
      </div>
    </div>
    <div className="row bg-darkblue">
      <div className="col-12 my-10 col-lg-auto text-center"><a className="text-decoration-none me-4" href="https://www.facebook.com/tobetoplatform" target="blank"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg></a><a className="text-decoration-none me-4" href="https://www.instagram.com/tobeto_official/" target="blank"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.5 6.5H17.51" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg></a><a className="text-decoration-none me-4" href="https://twitter.com/tobeto_platform" target="blank"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg></a><a className="text-decoration-none me-4" href="https://www.linkedin.com/company/tobeto/" target="blank"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 9H2V21H6V9Z" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg></a><a className="text-decoration-none" href="mailto:istanbulkodluyor@tobeto.com" target="blank"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 6L12 13L2 6" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg></a></div>
    </div>
  </div>
    <p aria-live="assertive" id="__next-route-announcer__" role="alert" style={{border: '0px', clip: 'rect(0px, 0px, 0px, 0px)', height: '1px', margin: '-1px', overflow: 'hidden', padding: '0px', position: 'absolute', width: '1px', whiteSpace: 'nowrap', overflowWrap: 'normal'}}>İstanbul Kodluyor</p>
  <iframe title="archetype" style={{display: 'none', visibility: 'hidden'}} />
  <div id="exaironWebchat">
    <div>
      <div className="exw-widget-container"><iframe className="exw-conversation-container-frame exw-hide-sm" allow="fullscreen" allowFullScreen id="exw-conversation-frame" srcDoc="<html><head><base target=&quot;_parent&quot;>  </head><body id=&quot;exw-conversation-frame-body&quot;><div></div></body></html>" />
        <div style={{display: 'flex', alignItems: 'flex-end'}}><iframe className="exw-custom-popup-frame" id="popUpIframe" srcDoc="<html><head><base target=&quot;_parent&quot;></head><body id=&quot;exw-launcher-frame-body&quot;><div></div></body></html>" style={{width: '280px', height: '70px'}} /><iframe className="exw-launcher-frame animated swing" allow="fullscreen" allowFullScreen id="exw-launcher-frame" srcDoc="<html><head><base target=&quot;_parent&quot;></head><body id=&quot;exw-launcher-frame-body&quot;><div></div></body></html>" style={{height: '160px', width: '70px'}} /></div>
      </div>
    </div>
  </div><textarea tabIndex={-1} aria-hidden="true" style={{minHeight: '0px !important', maxHeight: 'none !important', height: '0px !important', overflow: 'hidden !important',zIndex: '-1000 !important', top: '0px !important', right: '0px !important', borderWidth: '0px', boxSizing: 'content-box', fontFamily: 'Arial', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, letterSpacing: 'normal', lineHeight: 'normal', padding: '16px 90px 16px 16px', tabSize: 8, textIndent: '0px', textRendering: 'auto', textTransform: 'none', width: '100%', wordBreak: 'normal'}} defaultValue={""} />
</div>

  )
}

export default Gallery;