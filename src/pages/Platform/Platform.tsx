import { useEffect, useState } from 'react';
import { TokenModel } from '../../Models/Responses/Token/TokenModel';
import './Platform.css';
import { Link, useNavigate } from 'react-router-dom';
import { Paginate } from '../../core/Models/Paginate';
import { ExamGetListResponseModel } from '../../Models/Responses/Exam/ExamGetListResponseModel';
import ExamService from '../../Services/ExamService';
import Exam from '../../Components/Exam/Exam';
import { jwtDecode } from 'jwt-decode';
import { DecodedTokenModel } from '../../core/Models/DecodedTokenModel';
import tokenService from '../../core/services/tokenService';
import { AnnouncementGetListResponseModel } from '../../Models/Responses/Announcement/AnnouncementGetListResponseModel';
import AnnouncementService from '../../Services/AnnouncementService';
import AnnouncementCard from '../../Components/Announcement/AnnouncementCard';

type Props = {};

const Platform = (props: Props) => {
  const [name, setName] = useState('');
  const [exams, setExams] = useState<Paginate<ExamGetListResponseModel>>();

  const [tab, setTab] = useState('basvurularim');

  const OnSelectTab = (select: string) => {
    setTab(select);
  };

  async function OnPageLoad() {
    if (tokenService.hasToken()) {
      const storageToken = tokenService.getToken();
      const token: TokenModel = JSON.parse(storageToken ? storageToken : '');
      const decodedToken: DecodedTokenModel = jwtDecode(token.token);
      const fullName =
        decodedToken[
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
        ];
      const id =
        decodedToken[
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
        ];
      const examsData: Paginate<ExamGetListResponseModel> = (
        await ExamService.GetListByUserId({ PageIndex: 0, PageSize: 5 }, id)
      ).data;
      setName(fullName.split(' ')[0]);
      setExams(examsData);
      await AnnouncementsList();
    } 
  }

  const [announcements, setAnnouncements] =
    useState<Paginate<AnnouncementGetListResponseModel>>();

  const AnnouncementsList = async () => {
    const result: Paginate<AnnouncementGetListResponseModel> = (
      await AnnouncementService.getAll({ PageIndex: 0, PageSize: 3 })
    ).data;
    setAnnouncements(result);
  };

  useEffect(() => {
    OnPageLoad();    
  }, []);
  return (
    <main>
      <div className='plaform-page' style={{ minHeight: '120vh' }}>
        <section className='py-5'>
          <div className='position-relative mt-1'>
            <div className='vector'>
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'inline-block',
                  overflow: 'hidden',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: 1,
                  border: '0px',
                  margin: '0px',
                  padding: '0px',
                  position: 'relative',
                  maxWidth: '100%',
                }}
              >
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: 1,
                    border: '0px',
                    margin: '0px',
                    padding: '0px',
                    maxWidth: '100%',
                  }}
                >
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27150%27%20height=%27150%27/%3e'
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: 1,
                      border: '0px',
                      margin: '0px',
                      padding: '0px',
                    }}
                  />
                </span>
                <img
                  alt=''
                  src='https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg'
                  decoding='async'
                  data-nimg='intrinsic'
                  srcSet='https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg  1x,https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg  2x'
                  style={{
                    position: 'absolute',
                    inset: '0px',
                    boxSizing: 'border-box',
                    padding: '0px',
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    width: '0px',
                    height: '0px',
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                  }}
                />
              </span>
            </div>
            <div className='container text-center'>
              <div className='mw-5xl mx-auto'>
                <h3>
                  <span style={{ color: '#a3f', fontSize: '38px' }}>
                    <b>TOBETO</b>
                  </span>
                  <span
                    className='fw-normal'
                    style={{ color: '#555', fontSize: '36px' }}
                  >
                    'ya
                  </span>{' '}
                  <span
                    className='fw-normal'
                    style={{ color: '#555', fontSize: '36px' }}
                  >
                    {' '}
                    hoş geldin
                  </span>
                </h3>
                <h4
                  className='fw-normal mb-5'
                  style={{ color: '#555', fontSize: '36px' }}
                >
                  {name}
                </h4>
                <p className='tobeto-slogan'>
                  Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda
                  senin yanında!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='my-2'>
          <div className='container'>
            <div className='row cv-box cv-padding display-flex mmt-n-4'>
              <div className='col-12 ik-logo-platform'>
                <div className='p-4'>
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'inline-block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: 1,
                      border: '0px',
                      margin: '0px',
                      padding: '0px',
                      position: 'relative',
                      maxWidth: '100%',
                    }}
                  >
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'block',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: '0px',
                        margin: '0px',
                        padding: '0px',
                        maxWidth: '100%',
                      }}
                    >
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271137%27%20height=%27443%27/%3e'
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          width: 'initial',
                          height: 'initial',
                          background: 'none',
                          opacity: 1,
                          border: '0px',
                          margin: '0px',
                          padding: '0px',
                        }}
                      />
                    </span>
                    <img
                      srcSet='https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg  1x,https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg  2x'
                      src='https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg'
                      decoding='async'
                      data-nimg='intrinsic'
                      style={{
                        position: 'absolute',
                        inset: '0px',
                        boxSizing: 'border-box',
                        padding: '0px',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0px',
                        height: '0px',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                      }}
                    />
                  </span>
                </div>
                <div className='mt-2 d-flex flex-column justify-content-center px-10 text-center'>
                  <span className='header-text-md mt-4 '>
                    Ücretsiz eğitimlerle, geleceğin mesleklerinde sen de yerini
                    al.
                  </span>
                  <span className='header-text mt-4 mb-4'>
                    Aradığın <span className='quot'>&nbsp;“</span>İş
                    <span className='quot'>”&nbsp;</span> Burada!
                  </span>
                </div>
              </div>
              <div className='col-12 mb-4'>
                <ul
                  className='nav nav-tabs mainTablist '
                  id='myTab'
                  role='tablist'
                >
                  <li className='nav-item' role='presentation'>
                    <button
                      className={
                        'nav-link' + (tab == 'basvurularim' ? ' active' : '')
                      }
                      id='apply-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#apply-tab-pane'
                      type='button'
                      role='tab'
                      aria-controls='apply-tab-pane'
                      aria-selected='true'
                      onClick={() => OnSelectTab('basvurularim')}
                    >
                      Başvurularım
                    </button>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <button
                      className={
                        'nav-link' + (tab == 'egitimlerim' ? ' active' : '')
                      }
                      id='lessons-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#lessons-tab-pane'
                      type='button'
                      role='tab'
                      aria-controls='lessons-tab-pane'
                      aria-selected='false'
                      tabIndex={-1}
                      onClick={() => OnSelectTab('egitimlerim')}
                    >
                      Eğitimlerim
                    </button>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <div style={{ position: 'relative' }} />
                    <button
                      className={
                        'nav-link' + (tab == 'duyurular' ? ' active' : '')
                      }
                      id='notification-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#notification-tab-pane'
                      type='button'
                      role='tab'
                      aria-controls='notification-tab-pane'
                      aria-selected='false'
                      tabIndex={-1}
                      onClick={() => OnSelectTab('duyurular')}
                    >
                      Duyuru ve Haberlerim
                    </button>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <div style={{ position: 'relative' }} />
                    <button
                      className={
                        'nav-link' + (tab == 'anketlerim' ? ' active' : '')
                      }
                      id='mySurvey-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#mySurvey-tab-pane'
                      type='button'
                      role='tab'
                      aria-controls='mySurvey-tab-pane'
                      aria-selected='false'
                      tabIndex={-1}
                      onClick={() => OnSelectTab('anketlerim')}
                    >
                      Anketlerim
                    </button>
                  </li>
                </ul>
              </div>
              <div className='col-12'>
                <div className='tab-content' id='myTabContent'>
                  <div
                    className={
                      'tab-pane fade ' +
                      (tab == 'basvurularim' ? 'active show' : '')
                    }
                    id='apply-tab-pane'
                    role='tabpanel'
                    aria-labelledby='apply-tab'
                    tabIndex={0}
                  >
                    <div className='row'>
                      <div className='col-md-6 col-12 mt-2'>
                        <div className='status-card status_accepted'>
                          <span className='form_name'>İstanbul Kodluyor</span>
                          <span className='form_status' />
                          <span className='pull_back' />
                          <span className='form_name'>Bilgilendirme</span>
                          <div>
                            <div>
                              <div
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                }}
                              >
                                <i
                                  className='fa fa-check fa-sm'
                                  aria-hidden='true'
                                  style={{ color: 'green', marginRight: '5px' }}
                                />
                                <span className='form_date'>
                                  {' '}
                                  İstanbul Kodluyor Başvuru Formu onaylandı.
                                </span>
                              </div>
                            </div>
                            <div>
                              <div
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                }}
                              >
                                <i
                                  className='fa fa-check fa-sm'
                                  aria-hidden='true'
                                  style={{ color: 'green', marginRight: '5px' }}
                                />
                                <span className='form_date'>
                                  {' '}
                                  İstanbul Kodluyor Belge Yükleme Formu
                                  onaylandı.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      'tab-pane fade ' +
                      (tab == 'egitimlerim' ? 'active show' : '')
                    }
                    id='lessons-tab-pane'
                    role='tabpanel'
                    aria-labelledby='lessons-tab'
                    tabIndex={0}
                  >
                    <div className='row mt-3'>
                      <div className='col-12'>
                        <div className='tab-content' id='myTabContent'>
                          <div
                            className='tab-pane fade show active'
                            id='all-lessons-tab-pane'
                            role='tabpanel'
                            aria-labelledby='all-lessons-tab'
                            tabIndex={0}
                          >
                            <div className='row'>
                              <div className='col-md-3 col-12 mb-4'>
                                <div className='corp-edu-card'>
                                  <div
                                    className='card-img'
                                    style={{
                                      backgroundImage:
                                        'url("https://tobeto.s3.cloud.ngn.com.tr/23_EAH_1_45f7232003.jpg")',
                                    }}
                                  />
                                  <div className='card-content'>
                                    <div className='d-flex flex-column'>
                                      <span>
                                        Dr. Ecmel Ayral'dan Hoşgeldin Mesajı
                                      </span>
                                      <span className='platform-course-date'>
                                        21 Eylül 2023 15:20
                                      </span>
                                    </div>
                                    <Link className='apply-btn' to=''>
                                      Eğitime Git
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className='col-md-3 col-12 mb-4'>
                                <div className='corp-edu-card'>
                                  <div
                                    className='card-img'
                                    style={{
                                      backgroundImage:
                                        'url("https://tobeto.s3.cloud.ngn.com.tr/23_ENK_1_b4d858c1a9.jpg")',
                                    }}
                                  />
                                  <div className='card-content'>
                                    <div className='d-flex flex-column'>
                                      <span>Eğitimlere Nasıl Katılırım?</span>
                                      <span className='platform-course-date'>
                                        8 Eylül 2023 17:06
                                      </span>
                                    </div>
                                    <Link className='apply-btn' to=''>
                                      Eğitime Git
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className='col-md-3 col-12 mb-4'>
                                <div className='corp-edu-card'>
                                  <div
                                    className='card-img'
                                    style={{
                                      backgroundImage:
                                        'url("https://tobeto.s3.cloud.ngn.com.tr/CFE_20235_87c666a723.jpg")',
                                    }}
                                  />
                                  <div className='card-content'>
                                    <div className='d-flex flex-column'>
                                      <span>Herkes İçin Kodlama - 2A</span>
                                      <span className='platform-course-date'>
                                        2 Ekim 2023 03:00
                                      </span>
                                    </div>
                                    <Link className='apply-btn' to=''>
                                      Eğitime Git
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className='col-md-3 col-12 mb-4'>
                                <div className='corp-edu-card'>
                                  <div
                                    className='card-img'
                                    style={{
                                      backgroundImage:
                                        'url("https://tobeto.s3.cloud.ngn.com.tr/CFE_232_7a27b4deb3.jpg")',
                                    }}
                                  />
                                  <div className='card-content'>
                                    <div className='d-flex flex-column'>
                                      <span>Hoşgeldin Buluşması - 2</span>
                                      <span className='platform-course-date'>
                                        2 Ekim 2023 03:00
                                      </span>
                                    </div>
                                    <Link className='apply-btn' to=''>
                                      Eğitime Git
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className='tab-pane fade '
                            id='started-tab-pane'
                            role='tabpanel'
                            aria-labelledby='started-tab'
                            tabIndex={0}
                          >
                            <div className='row'>
                              <div className='col-md-3 col-12 mb-4'>
                                <div className='corp-edu-card'>
                                  <div
                                    className='card-img'
                                    style={{
                                      backgroundImage:
                                        'url("https://tobeto.s3.cloud.ngn.com.tr/23_EAH_1_45f7232003.jpg")',
                                    }}
                                  />
                                  <div className='card-content'>
                                    <div className='d-flex flex-column'>
                                      <span>
                                        Dr. Ecmel Ayral'dan Hoşgeldin Mesajı
                                      </span>
                                      <span className='platform-course-date'>
                                        21 Eylül 2023 15:20
                                      </span>
                                    </div>
                                    <Link className='apply-btn' to=''>
                                      Eğitime Git
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className='col-md-3 col-12 mb-4'>
                                <div className='corp-edu-card'>
                                  <div
                                    className='card-img'
                                    style={{
                                      backgroundImage:
                                        'url("https://tobeto.s3.cloud.ngn.com.tr/23_ENK_1_b4d858c1a9.jpg")',
                                    }}
                                  />
                                  <div className='card-content'>
                                    <div className='d-flex flex-column'>
                                      <span>Eğitimlere Nasıl Katılırım?</span>
                                      <span className='platform-course-date'>
                                        8 Eylül 2023 17:06
                                      </span>
                                    </div>
                                    <Link className='apply-btn' to=''>
                                      Eğitime Git
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className='col-md-3 col-12 mb-4'>
                                <div className='corp-edu-card'>
                                  <div
                                    className='card-img'
                                    style={{
                                      backgroundImage:
                                        'url("https://tobeto.s3.cloud.ngn.com.tr/CFE_20235_87c666a723.jpg")',
                                    }}
                                  />
                                  <div className='card-content'>
                                    <div className='d-flex flex-column'>
                                      <span>Herkes İçin Kodlama - 2A</span>
                                      <span className='platform-course-date'>
                                        2 Ekim 2023 03:00
                                      </span>
                                    </div>
                                    <Link className='apply-btn' to=''>
                                      Eğitime Git
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className='col-md-3 col-12 mb-4'>
                                <div className='corp-edu-card'>
                                  <div
                                    className='card-img'
                                    style={{
                                      backgroundImage:
                                        'url("https://tobeto.s3.cloud.ngn.com.tr/CFE_232_7a27b4deb3.jpg")',
                                    }}
                                  />
                                  <div className='card-content'>
                                    <div className='d-flex flex-column'>
                                      <span>Hoşgeldin Buluşması - 2</span>
                                      <span className='platform-course-date'>
                                        2 Ekim 2023 03:00
                                      </span>
                                    </div>
                                    <Link className='apply-btn' to=''>
                                      Eğitime Git
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className='tab-pane fade '
                            id='done-lessons-tab-pane'
                            role='tabpanel'
                            aria-labelledby='done-lessons-tab'
                            tabIndex={0}
                          >
                            <div className='row'>
                              <div className='col-md-3 col-12 mb-4'>
                                <div className='corp-edu-card'>
                                  <div
                                    className='card-img'
                                    style={{
                                      backgroundImage:
                                        'url("https://tobeto.s3.cloud.ngn.com.tr/23_EAH_1_45f7232003.jpg")',
                                    }}
                                  />
                                  <div className='card-content'>
                                    <div className='d-flex flex-column'>
                                      <span>
                                        Dr. Ecmel Ayral'dan Hoşgeldin Mesajı
                                      </span>
                                      <span className='platform-course-date'>
                                        21 Eylül 2023 15:20
                                      </span>
                                    </div>
                                    <Link className='apply-btn' to=''>
                                      Eğitime Git
                                    </Link>
                                  </div>
                                </div>
                                "apply-btn" to=""
                              </div>
                              <div className='col-md-3 col-12 mb-4'>
                                <div className='corp-edu-card'>
                                  <div
                                    className='card-img'
                                    style={{
                                      backgroundImage:
                                        'url("https://tobeto.s3.cloud.ngn.com.tr/23_ENK_1_b4d858c1a9.jpg")',
                                    }}
                                  />
                                  <div className='card-content'>
                                    <div className='d-flex flex-column'>
                                      <span>Eğitimlere Nasıl Katılırım?</span>
                                      <span className='platform-course-date'>
                                        8 Eylül 2023 17:06
                                      </span>
                                    </div>
                                    <Link className='apply-btn' to=''>
                                      Eğitime Git
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className='col-md-3 col-12 mb-4'>
                                <div className='corp-edu-card'>
                                  <div
                                    className='card-img'
                                    style={{
                                      backgroundImage:
                                        'url("https://tobeto.s3.cloud.ngn.com.tr/CFE_20235_87c666a723.jpg")',
                                    }}
                                  />
                                  <div className='card-content'>
                                    <div className='d-flex flex-column'>
                                      <span>Herkes İçin Kodlama - 2A</span>
                                      <span className='platform-course-date'>
                                        2 Ekim 2023 03:00
                                      </span>
                                    </div>
                                    <Link className='apply-btn' to=''>
                                      Eğitime Git
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className='col-md-3 col-12 mb-4'>
                                <div className='corp-edu-card'>
                                  <div
                                    className='card-img'
                                    style={{
                                      backgroundImage:
                                        'url("https://tobeto.s3.cloud.ngn.com.tr/CFE_232_7a27b4deb3.jpg")',
                                    }}
                                  />
                                  <div className='card-content'>
                                    <div className='d-flex flex-column'>
                                      <span>Hoşgeldin Buluşması - 2</span>
                                      <span className='platform-course-date'>
                                        2 Ekim 2023 03:00
                                      </span>
                                    </div>
                                    <Link className='apply-btn' to=''>
                                      Eğitime Git
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='showMoreBtn'>Daha Fazla Göster</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      'tab-pane fade ' +
                      (tab == 'duyurular' ? 'active show' : '')
                    }
                    id='notification-tab-pane'
                    role='tabpanel'
                    aria-labelledby='notification-tab'
                    tabIndex={0}
                  >
                    <div className='row'>
                      <AnnouncementCard
                        announcements={
                          announcements as Paginate<AnnouncementGetListResponseModel>
                        }
                      />

                      <div className='showMoreBtn'>Daha Fazla Göster</div>
                    </div>
                  </div>
                  <div
                    className={
                      'tab-pane fade ' +
                      (tab == 'anketlerim' ? 'active show' : '')
                    }
                    id='applications-tab-pane'
                    role='tabpanel'
                    aria-labelledby='applications-tab'
                    tabIndex={0}
                  >
                    <div className='row'>
                      <div className='col-md-4 col-12 my-4'>
                        <div className='notfy-card news'>
                          <div className='d-flex flex-column'>
                            <div className='d-flex justify-content-between mb-4'>
                              <span className='type'>Mülakat</span>
                              <span className='corp-names type'>
                                İstanbul Kodluyor
                              </span>
                            </div>
                            <span className='header '>
                              Ocak Ayı Tercih Formu Bilgilendirmesi
                            </span>
                          </div>
                          <div className='d-flex justify-content-between'>
                            <span className='date'>12.01.2024</span>
                            <span className='read-more'>
                              Mülakatı Değerlendir
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-4 col-12 my-4'>
                        <div className='notfy-card news'>
                          <div className='d-flex flex-column'>
                            <div className='d-flex justify-content-between mb-4'>
                              <span className='type'>Mülakat</span>
                              <span className='corp-names type'>
                                İstanbul Kodluyor
                              </span>
                            </div>
                            <span className='header '>
                              11 Ocak Kampüs Buluşması
                            </span>
                          </div>
                          <div className='d-flex justify-content-between'>
                            <span className='date'>06.01.2024</span>
                            <span className='read-more'>
                              Mülakatı Değerlendir
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-4 col-12 my-4'>
                        <div className='notfy-card news'>
                          <div className='d-flex flex-column'>
                            <div className='d-flex justify-content-between mb-4'>
                              <span className='type'>Mülakat</span>
                              <span className='corp-names type'>
                                İstanbul Kodluyor
                              </span>
                            </div>
                            <span className='header '>
                              30 Ocak Online Hoşgeldin Buluşması-5
                            </span>
                          </div>
                          <div className='d-flex justify-content-between'>
                            <span className='date'>03.01.2024</span>
                            <span className='read-more'>
                              Mülakatı Değerlendir
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className='showMoreBtn'>Daha Fazla Göster</div>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='mySurvey-tab-pane'
                    role='tabpanel'
                    aria-labelledby='mySurvey-tab'
                    tabIndex={0}
                  >
                    <div className='row'>
                      <div className=' noDataCard'>
                        <p>Atanmış herhangi bir anketiniz bulunmamaktadır</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='my-2'>
          <div className='container'>
            <div className='row cv-box cv-padding'>
              <div className='col-12 position-relative'>
                <span className='exams-header'>Sınavlarım</span>
              </div>
              <div className='exams my-3'>
                <Exam exams={exams as Paginate<ExamGetListResponseModel>} />
              </div>
            </div>
          </div>
        </section>
        <section className='my-2'>
          <div className='container'>
            <div className='new-packs my-20'>
              <div className='package-card'>
                <div className='details pack-bg-2'>
                  <h1>
                    <br /> Profilini oluştur{' '}
                  </h1>
                  <button
                    className='btn btn-primary w-100 '
                    style={{
                      backgroundColor: '#a3f',
                      border: 'none',
                      borderRadius: '30px',
                    }}
                  >
                    <b>Başla</b>
                  </button>
                </div>
              </div>
              <div className='package-card'>
                <div className='details pack-bg-3'>
                  <h1 className='mb-6'>
                    <br /> Kendini değerlendir{' '}
                  </h1>
                  <button
                    className='btn btn-primary w-100 '
                    style={{
                      backgroundColor: '#a3f',
                      border: 'none',
                      borderRadius: '30px',
                    }}
                  >
                    <b>Başla</b>
                  </button>
                </div>
              </div>
              <div className='package-card'>
                <div className='details pack-bg-1'>
                  <h1 className='mb-6'>
                    {' '}
                    <br /> Öğrenmeye başla{' '}
                  </h1>
                  <button
                    className='btn btn-primary w-100 '
                    style={{
                      backgroundColor: '#a3f',
                      border: 'none',
                      borderRadius: '30px',
                    }}
                  >
                    <b>Başla</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div
        style={{
          position: 'fixed',
          zIndex: 9999,
          inset: '16px',
          pointerEvents: 'none',
        }}
      />
    </main>
  );
};

export default Platform;
