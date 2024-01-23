import './ForPeople.css';

const ForPeople = () => (
  <div id='__next'>
    <div
      className='bg-front-dark bg-front-width'
      style={{
        height: '0.5rem',
        overflow: 'visible',
        width: 'auto',
      }}
    >
      <section className='web-header'>
        <div
          aria-labelledby='offcanvasExampleLabel'
          className='offcanvas offcanvas-start'
          id='offcanvasExample'
        >
          <div className='offcanvas-header'>
            <a className='me-auto navbar-brand' href='#'>
              <span
                style={{
                  background: 'none',
                  border: '0',
                  boxSizing: 'border-box',
                  display: 'inline-block',
                  height: 'initial',
                  margin: '0',
                  maxWidth: '100%',
                  opacity: '1',
                  overflow: 'hidden',
                  padding: '0',
                  position: 'relative',
                  width: 'initial',
                }}
              >
                <span
                  style={{
                    background: 'none',
                    border: '0',
                    boxSizing: 'border-box',
                    display: 'block',
                    height: 'initial',
                    margin: '0',
                    maxWidth: '100%',
                    opacity: '1',
                    padding: '0',
                    width: 'initial',
                  }}
                >
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27165%27%20height=%2734%27/%3e'
                    style={{
                      background: 'none',
                      border: '0',
                      display: 'block',
                      height: 'initial',
                      margin: '0',
                      maxWidth: '100%',
                      opacity: '1',
                      padding: '0',
                      width: 'initial',
                    }}
                  />
                </span>
                <img
                  alt=''
                  data-nimg='intrinsic'
                  decoding='async'
                  src='https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&w=384&q=75'
                  srcSet='https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&w=256&q=75  1x,https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&w=384&q=75  2x'
                  style={{
                    border: 'none',
                    bottom: '0',
                    boxSizing: 'border-box',
                    display: 'block',
                    height: '0',
                    left: '0',
                    margin: 'auto',
                    maxHeight: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    minWidth: '100%',
                    padding: '0',
                    position: 'absolute',
                    right: '0',
                    top: '0',
                    width: '0',
                  }}
                />
              </span>
            </a>
            <button
              aria-label='Close'
              className='btn-close'
              data-bs-dismiss='offcanvas'
              type='button'
            />
          </div>
          <div className='offcanvas-body'>
            <div>
              <ul className='nav flex-column'>
                <li className='nav-item'>
                  <a
                    className='nav-link '
                    href='/hakkimizda'
                    style={{
                      color: '#282828 !important',
                    }}
                  >
                    Biz Kimiz?
                  </a>
                </li>
                <li className='nav-item dropdown tbt-dropdown'>
                  <a
                    aria-controls='collapseNav1'
                    aria-expanded='false'
                    className='nav-link tnav-link '
                    data-bs-target='#collapseNav1'
                    data-bs-toggle='collapse'
                    href='#'
                    role='button'
                    style={{
                      color: '#282828 !important',
                    }}
                  >
                    Neler Sunuyoruz?
                  </a>
                  <div className='collapse collapse-navbar' id='collapseNav1'>
                    <ul className=' collapse-nav-bg '>
                      <li className='nav-item'>
                        <a className='m-0 nav-link ' href='/bireyler-icin'>
                          Bireyler için
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='m-0 nav-link ' href='/kurumlar-icin'>
                          Kurumlar için
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    href='/katalog'
                    style={{
                      color: '#282828 !important',
                    }}
                  >
                    Katalog
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link '
                    href='/codecademy'
                    style={{
                      color: '#282828 !important',
                    }}
                  >
                    Codecademy
                  </a>
                </li>
                <li className='nav-item dropdown tbt-dropdown'>
                  <a
                    aria-controls='collapseNav2'
                    aria-expanded='false'
                    className='nav-link tnav-link '
                    data-bs-target='#collapseNav2'
                    data-bs-toggle='collapse'
                    href='#'
                    role='button'
                    style={{
                      color: '#282828 !important',
                    }}
                  >
                    Tobeto'da Bu Ay
                  </a>
                  <div className='collapse collapse-navbar' id='collapseNav2'>
                    <ul className='collapse-nav-bg'>
                      <li className='nav-item'>
                        <a className='m-0 nav-link ' href='/blog'>
                          Blog
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='m-0 nav-link' href='/basinda-biz'>
                          Basında Biz
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='m-0 nav-link ' href='/takvim-anasayfa'>
                          Takvim
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='m-0 nav-link ' href='/istanbul-kodluyor'>
                          İstanbul Kodluyor
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className='mt-auto'>
              <div className='py-6'>
                <a className='w-100 btn btn-dark' href='#'>
                  Giriş Yap
                </a>
                <a className='w-100 btn btn-primary mt-3 btn-rainbow' href='#'>
                  Ücretsiz Üye Ol
                </a>
              </div>
              <p className='mb-4 small text-center text-muted'>
                © 2021 Tüm hakları saklıdır.
              </p>
            </div>
          </div>
        </div>
        <div className='calendarBtn'>
          <div className='calendar-btn' />
        </div>
      </section>
      <main className='bg-front-dark'>
        <div
          aria-hidden='true'
          aria-labelledby='TobetoVideoLabel'
          className='modal fade'
          data-bs-backdrop='static'
          id='TobetoVideo'
        >
          <div className='modal-dialog modal-lg modal-dialog-centered'>
            <div className='modal-content back-none border-0'>
              <button
                aria-label='Close'
                className='btn-close btn-close-modal pause-video'
                data-bs-dismiss='modal'
                type='button'
              >
                <svg
                  fill='none'
                  height='22'
                  viewBox='0 0 22 22'
                  width='22'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M16.5 5.5L5.5 16.5'
                    stroke='white'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                  />
                  <path
                    d='M5.5 5.5L16.5 16.5'
                    stroke='white'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                  />
                </svg>
              </button>
              <div className='modal-body p-0'>
                <video
                  className='modal-height youtube-video'
                  controls
                  height='240'
                  width='100%'
                >
                  <source
                    src='https://s3.cloud.ngn.com.tr/tobeto/tobeto_final_v2_5c7893fbe0.mp4'
                    type='video/mp4'
                  />
                  <source src='movie.ogg' type='video/ogg' />
                </video>
              </div>
            </div>
          </div>
        </div>
        <div className='container pt-48 mb-20'>
          <div className=' col-12 py-4 px-lg-40 px-md-20 px-sm-2'>
            <div className='ik-card-2'>
              <div className='ik-container'>
                <div className='header-left-3'>
                  <span className='text-ik fw-bold header-left-text'>
                    Aradığın{' '}
                    <span
                      style={{
                        color: 'rgb(0, 176, 120)',
                      }}
                    >
                       "
                    </span>
                    İş
                    <span
                      style={{
                        color: 'rgb(0, 176, 120)',
                      }}
                    >
                      " 
                    </span>{' '}
                    Burada!
                  </span>
                </div>
                <div className='ik-logo-container'>
                  <span
                    style={{
                      background: 'none',
                      border: '0px',
                      boxSizing: 'border-box',
                      display: 'inline-block',
                      height: 'initial',
                      margin: '0px',
                      maxWidth: '100%',
                      opacity: '1',
                      overflow: 'hidden',
                      padding: '0px',
                      position: 'relative',
                      width: 'initial',
                    }}
                  >
                    <span
                      style={{
                        background: 'none',
                        border: '0px',
                        boxSizing: 'border-box',
                        display: 'block',
                        height: 'initial',
                        margin: '0px',
                        maxWidth: '100%',
                        opacity: '1',
                        padding: '0px',
                        width: 'initial',
                      }}
                    >
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27200%27%20height=%27120%27/%3e'
                        style={{
                          background: 'none',
                          border: '0px',
                          display: 'block',
                          height: 'initial',
                          margin: '0px',
                          maxWidth: '100%',
                          opacity: '1',
                          padding: '0px',
                          width: 'initial',
                        }}
                      />
                    </span>
                    <img
                      alt='İstanbul Kodluyor Logo '
                      data-nimg='intrinsic'
                      decoding='async'
                      src='https://tobeto.com/_next/static/media/ik-logo-light.ace655db.svg'
                      srcSet='https://tobeto.com/_next/static/media/ik-logo-light.ace655db.svg  1x,https://tobeto.com/_next/static/media/ik-logo-light.ace655db.svg  2x'
                      style={{
                        border: 'none',
                        boxSizing: 'border-box',
                        display: 'block',
                        height: '0px',
                        inset: '0px',
                        margin: 'auto',
                        maxHeight: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        minWidth: '100%',
                        padding: '0px',
                        position: 'absolute',
                        width: '0px',
                      }}
                    />
                  </span>
                </div>
              </div>
              <a
                className='btn d-md-inline-block mt-5 ik-btn'
                href='/istanbul-kodluyor'
              >
                Başvur
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className='raw-html-embed'>
            <section>
              <div
                className='position-relative '
                style={{
                  marginTop: '2em !important',
                }}
              >
                <div className='container text-center'>
                  <div className='mw-5xl mx-auto position-relative'>
                    <div className='vector'>
                      <img
                        alt=''
                        height='100'
                        src='https://tobeto.s3.cloud.ngn.com.tr/03_005013e668_71411c39a1.svg'
                        width='100'
                      />
                    </div>
                    <h1
                      className='text-white'
                      style={{
                        fontSize: '3em !important',
                      }}
                    >
                      Kariyerinin kontrolü
                    </h1>
                    <h1
                      className='text-white mb-5'
                      style={{
                        fontSize: '3em !important',
                      }}
                    >
                      senin elinde
                    </h1>
                    <p className='text-white lh-md borderp'>
                      <a className='text-white' href='#dijital-bir-meslek'>
                        Dijital Bir Meslek
                      </a>{' '}
                      edinmek,{' '}
                      <a
                        className='text-white'
                        href='#profesyonel-bir-yonetici'
                      >
                        Profesyonel Bir Yönetici
                      </a>
                      olmak ya da
                      <a className='text-white' href='#kendini-gelistirmek'>
                        Kendini Geliştirmek
                      </a>{' '}
                      için İstediğin bölümden,
                      <br />
                      istediğin kadar eğitimi seçip, eş zamanlı olarak
                      alabilirsin.
                    </p>
                    <p className='text-white my-8'>
                      <a href='http://www.codecademy.com'> Codecademy</a> iş
                      birliği ile, fark yaratmak senin elinde!
                    </p>
                    <a
                      className='btn mx-4 btn-rainbow py-4 rainbow-text'
                      href='/kayit-ol'
                    >
                      Uzmanlaşmak istediğin alanı seç, Tobeto platformda
                      öğrenmeye başla!
                    </a>
                  </div>
                </div>
                <div className='gradient-line2 mt-20'></div>
              </div>
            </section>
            <section>
              <div className='container web-pack py-20'>
                <div className='mw-5xl mx-auto position-relative'>
                  <h4 className='text-white mb-20 text-center mx-auto position-relative'>
                    Bir Yerden Başlamak İstiyorum
                  </h4>
                  <div
                    className='vector7'
                    style={{
                      right: '0px',
                      top: '-30px',
                    }}
                  >
                    <img
                      alt=''
                      height='100'
                      src='https://tobeto.s3.cloud.ngn.com.tr/02_1a87a6ffc1_e4d2b2db45.svg'
                      width='100'
                    />
                  </div>
                  <div className='row'>
                    <div className='col-lg-3 col-4'>
                      <div className='pack-box'>
                        <a>C# Programming</a>
                      </div>
                    </div>
                    <div className='col-lg-3 col-4'>
                      <div className='pack-box'>
                        <a>
                          Object Oriented Programming
                          <br />
                          (OOP)
                        </a>
                      </div>
                    </div>
                    <div className='col-lg-3 col-4'>
                      <div className='pack-box'>
                        <a>Windows Form Application Programming</a>
                      </div>
                    </div>
                    <div className='col-lg-3 col-4'>
                      <div className='pack-box'>
                        <a>
                          Microsoft
                          <br />
                          SQL Server
                          <br />
                          Database
                        </a>
                      </div>
                    </div>
                    <div className='col-lg-3 col-4'>
                      <div className='pack-box'>
                        <a>ADONET</a>
                      </div>
                    </div>
                    <div className='col-lg-3 col-4'>
                      <div className='pack-box'>
                        <a>DAPPER</a>
                      </div>
                    </div>
                    <div className='col-lg-3 col-4'>
                      <div className='pack-box'>
                        <a>HTML-CSS-SASS</a>
                      </div>
                    </div>
                    <div className='col-lg-3 col-4'>
                      <div className='pack-box'>
                        <a>Javascript</a>
                      </div>
                    </div>
                    <div className='col-lg-3 col-4'>
                      <div className='pack-box'>
                        <a>ASPNET Core MVC</a>
                      </div>
                    </div>
                    <div className='col-lg-3 col-4'>
                      <div className='pack-box'>
                        <a>Git / Github</a>
                      </div>
                    </div>
                    <div className='col-lg-3 col-4'>
                      <div className='pack-box'>
                        <a>ReactJS</a>
                      </div>
                    </div>
                    <div className='col-lg-3 col-4'>
                      <div className='pack-box'>
                        <a>NextJS</a>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className='tab-link mobile-mx-auto d-flex justify-content-center'
                  href='/katalog'
                  style={{
                    marginTop: '1em',
                  }}
                >
                  {`Tümünü                    İncele >>`}
                </a>
              </div>
            </section>
            <div className='gradient-line2 mt-5' id='dijital-bir-meslek'></div>
            <section className='pt-20 pb-8 container border-info web-pack'>
              <div className='mw-5xl mx-auto text-center position-relative'>
                <h4 className='text-white mb-20  mx-auto position-relative'>
                  Dijital Bir Meslek İstiyorum
                </h4>
                <div className='vector2'>
                  <img
                    alt=''
                    height='150'
                    src='https://tobeto.s3.cloud.ngn.com.tr/dot_gray_8a5a605556_eb3dd4f77d.svg'
                    width='150'
                  />
                </div>
              </div>
              <div className='row mw-5xl mx-auto'>
                <div className='col-lg-3 col-4'>
                  <div className='pack-box'>
                    <a href='/programlar/frontend'>
                      Front End
                      <br />
                      Developer
                    </a>
                  </div>
                </div>
                <div className='col-lg-3 col-4'>
                  <div className='pack-box'>
                    <a href='/bilgi-al'>
                      Back End
                      <br />
                      Developer
                    </a>
                    <img
                      className='comingsoon'
                      src='https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9_84706ccf9b.svg'
                    />
                  </div>
                </div>
                <div className=' col-lg-3 col-4'>
                  <div className='pack-box'>
                    <a href='/programlar/full-stack-developer'>
                      {' '}
                      Full Stack
                      <br />
                      Developer
                    </a>
                  </div>
                </div>
                <div className='col-lg-3 col-4'>
                  <div className='pack-box'>
                    <a href='/programlar/web-mobile'>
                      {' '}
                      Web & Mobile
                      <br />
                      Developer
                    </a>
                  </div>
                </div>
                <div className='col-lg-4  col-4'>
                  <div className='pack-box'>
                    <a href='/bilgi-al'>
                      Veri Bilimi
                      <br />
                      Uzmanı
                    </a>
                    <img
                      className='comingsoon'
                      src='https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9_84706ccf9b.svg'
                    />
                  </div>
                </div>
                <div className=' col-lg-4 col-4'>
                  <div className='pack-box'>
                    <a href='/bilgi-al'>
                      Siber Güvenlik
                      <br />
                      Uzmanı
                    </a>
                    <img
                      className='comingsoon'
                      src='https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9_84706ccf9b.svg'
                    />
                  </div>
                </div>
                <div className=' col-lg-4 col-4'>
                  <div className='pack-box'>
                    <a href='/bilgi-al'>
                      UI / UX
                      <br />
                      Developer
                    </a>
                    <img
                      className='comingsoon'
                      src='https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9_84706ccf9b.svg'
                    />
                  </div>
                </div>
                <a
                  className='tab-link mobile-mx-auto d-flex justify-content-center'
                  href=' /katalog'
                  style={{
                    marginTop: '1em',
                  }}
                >
                  {`Tümünü                    İncele >>`}
                </a>
              </div>
            </section>
            <div className='container'>
              <div className='row'>
                <a
                  className='btn mx-auto btn-rainbow py-4 rainbow-text'
                  href='/kayit-ol'
                >
                  Uzmanlaşmak istediğin alanı seç, Tobeto platformda öğrenmeye
                  başla!
                </a>
              </div>
            </div>
            <div
              className=' gradient-line2 mt-5'
              id='profesyonel-bir-yonetici'
            ></div>
            <section className='py-20 mobile-padding container web-pack'>
              <div className='mw-5xl mx-auto text-center position-relative mobile-header'>
                <div className='vector6'>
                  <img
                    alt=''
                    src='https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9_84706ccf9b.svg'
                    width='130'
                  />
                </div>
                <h4 className='text-white mb-20 tablet-75 mx-auto position-relative'>
                  Profesyonel Bir Yönetici Olmak İstiyorum
                  <div className='vector4'>
                    <img
                      alt=''
                      height='150'
                      src='https://tobeto.s3.cloud.ngn.com.tr/04_b3b68891d7_5ad2591676.svg'
                      width='150'
                    />
                  </div>
                </h4>
              </div>
              <div className='row mw-5xl mx-auto d-flex justify-content-center'>
                <div className='col-lg-2 col-4'>
                  <div className='pack-box'>
                    <a href='/bilgi-al'>
                      Ürün
                      <br />
                      Yönetimi
                      <br />
                      Programı
                    </a>{' '}
                    <img
                      className='comingsoon'
                      src='https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9_84706ccf9b.svg'
                    />
                  </div>
                </div>
                <div className=' col-lg-2 col-4'>
                  <div className='pack-box'>
                    <a href='/bilgi-al'>
                      Dijital
                      <br />
                      Pazarlama
                      <br />
                      Programı
                    </a>{' '}
                    <img
                      className='comingsoon'
                      src='https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9_84706ccf9b.svg'
                    />
                  </div>
                </div>
                <div className=' col-lg-2 col-4'>
                  <div className='pack-box'>
                    <a href='/bilgi-al'>
                      Proje
                      <br />
                      Yönetimi
                      <br />
                      Programı
                    </a>{' '}
                    <img
                      className='comingsoon'
                      src='https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9_84706ccf9b.svg'
                    />
                  </div>
                </div>
                <div className=' col-lg-2 col-4'>
                  <div className='pack-box'>
                    <a href='/bilgi-al'>
                      Yetenek
                      <br />
                      Yönetimi
                      <br />
                      Programı
                    </a>{' '}
                    <img
                      className='comingsoon'
                      src='https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9_84706ccf9b.svg'
                    />
                  </div>
                </div>
              </div>
            </section>
            <div
              className=' gradient-line2 mt-5'
              id='kendini-gelistirmek'
            ></div>
          </div>
        </div>
        <section className='container py-20'>
          <div className='mw-5xl mx-auto text-center position-relative'>
            <h4 className='text-white mb-20 mx-auto '>
              Kendimi Geliştirmek İstiyorum
            </h4>
            <div className='vector2'>
              <span
                style={{
                  background: 'none',
                  border: '0',
                  boxSizing: 'border-box',
                  display: 'inline-block',
                  height: 'initial',
                  margin: '0',
                  maxWidth: '100%',
                  opacity: '1',
                  overflow: 'hidden',
                  padding: '0',
                  position: 'relative',
                  width: 'initial',
                }}
              >
                <span
                  style={{
                    background: 'none',
                    border: '0',
                    boxSizing: 'border-box',
                    display: 'block',
                    height: 'initial',
                    margin: '0',
                    maxWidth: '100%',
                    opacity: '1',
                    padding: '0',
                    width: 'initial',
                  }}
                >
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27150%27%20height=%27150%27/%3e'
                    style={{
                      background: 'none',
                      border: '0',
                      display: 'block',
                      height: 'initial',
                      margin: '0',
                      maxWidth: '100%',
                      opacity: '1',
                      padding: '0',
                      width: 'initial',
                    }}
                  />
                </span>
                <img
                  alt=''
                  data-nimg='intrinsic'
                  decoding='async'
                  src='https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg'
                  srcSet='https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg  1x,https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg  2x'
                  style={{
                    border: 'none',
                    bottom: '0',
                    boxSizing: 'border-box',
                    display: 'block',
                    height: '0',
                    left: '0',
                    margin: 'auto',
                    maxHeight: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    minWidth: '100%',
                    padding: '0',
                    position: 'absolute',
                    right: '0',
                    top: '0',
                    width: '0',
                  }}
                />
              </span>
            </div>
          </div>
          <div className='row mw-5xl mx-auto shadow-lg'>
            <div className='col-12 text-center px-5'>
              <div className='tag-list'>
                <div className='loop-slider'>
                  <div className='inner'>
                    <div className='tag'>Sürekli Öğrenme</div>
                    <div className='tag'>Etkili Düşünme</div>
                    <div className='tag'>Pozitif Bakış</div>
                    <div className='tag'>İnisiyatif Alma</div>
                    <div className='tag'>Duygusal Zeka</div>
                    <div className='tag'>Sürekli Öğrenme</div>
                    <div className='tag'>Etkili Düşünme</div>
                    <div className='tag'>Pozitif Bakış</div>
                    <div className='tag'>İnisiyatif Alma</div>
                    <div className='tag'>Duygusal Zeka</div>
                  </div>
                </div>
                <div className='loop-slider'>
                  <div className='inner'>
                    <div className='tag'>Müzakere</div>
                    <div className='tag'>Etkili İletişim</div>
                    <div className='tag'>Verimlilik</div>
                    <div className='tag'>Yeni Dünya Kavramı</div>
                    <div className='tag'>Yaratıcılık</div>
                    <div className='tag'>Müzakere</div>
                    <div className='tag'>Etkili İletişim</div>
                    <div className='tag'>Verimlilik</div>
                    <div className='tag'>Yeni Dünya Kavramı</div>
                    <div className='tag'>Yaratıcılık</div>
                  </div>
                </div>
                <div className='loop-slider'>
                  <div className='inner'>
                    <div className='tag'>Çeviklik</div>
                    <div className='tag'>Karar Verme</div>
                    <div className='tag'>Kişisel Motivasyon</div>
                    <div className='tag'>Zaman Yönetimi</div>
                    <div className='tag'>İnisiyatif Alma</div>
                    <div className='tag'>Çeviklik</div>
                    <div className='tag'>Karar Verme</div>
                    <div className='tag'>Kişisel Motivasyon</div>
                    <div className='tag'>Zaman Yönetimi</div>
                    <div className='tag'>İnisiyatif Alma</div>
                  </div>
                </div>
                <div className='loop-slider'>
                  <div className='inner'>
                    <div className='tag'>Müzakere</div>
                    <div className='tag'>Duygusal Zeka</div>
                    <div className='tag'>Karar Verme</div>
                    <div className='tag'>Çeviklik</div>
                    <div className='tag'>Profesyonel Duruş</div>
                    <div className='tag'>Müzakere</div>
                    <div className='tag'>Duygusal Zeka</div>
                    <div className='tag'>Karar Verme</div>
                    <div className='tag'>Çeviklik</div>
                    <div className='tag'>Profesyonel Duruş</div>
                  </div>
                </div>
                <div className='loop-slider'>
                  <div className='inner'>
                    <div className='tag'>Profesyonel Duruş</div>
                    <div className='tag'>Planlama Organize Etme</div>
                    <div className='tag'>Ticari Bakış</div>
                    <div className='tag'>Verimlilik</div>
                    <div className='tag'>Değişime Uyum</div>
                    <div className='tag'>Profesyonel Duruş</div>
                    <div className='tag'>Planlama Organize Etme</div>
                    <div className='tag'>Ticari Bakış</div>
                    <div className='tag'>Verimlilik</div>
                    <div className='tag'>Değişime Uyum</div>
                  </div>
                </div>
                <div className='loop-slider'>
                  <div className='inner'>
                    <div className='tag'>Çeviklik</div>
                    <div className='tag'>Kişisel Motivasyon</div>
                    <div className='tag'>Karar Verme</div>
                    <div className='tag'>Müşteri Odaklılık</div>
                    <div className='tag'>Problem Çözme</div>
                    <div className='tag'>Çeviklik</div>
                    <div className='tag'>Kişisel Motivasyon</div>
                    <div className='tag'>Karar Verme</div>
                    <div className='tag'>Müşteri Odaklılık</div>
                    <div className='tag'>Problem Çözme</div>
                  </div>
                </div>
                <div className='loop-slider'>
                  <div className='inner'>
                    <div className='tag'>Karar Verme</div>
                    <div className='tag'>Azim ve Dayanıklılık</div>
                    <div className='tag'>Çeviklik</div>
                    <div className='tag'>Problem Çözme</div>
                    <div className='tag'>Planlama Organize Etme</div>
                    <div className='tag'>Karar Verme</div>
                    <div className='tag'>Azim ve Dayanıklılık</div>
                    <div className='tag'>Çeviklik</div>
                    <div className='tag'>Problem Çözme</div>
                    <div className='tag'>Planlama Organize Etme</div>
                  </div>
                </div>
                <div className='fades' />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
);

export default ForPeople;
