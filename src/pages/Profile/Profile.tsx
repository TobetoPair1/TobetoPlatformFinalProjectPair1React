import { useEffect, useState } from 'react';
import './Profile.css';
import PersonalInfoService from '../../Services/PersonalInfoService';
import { PlatformModel } from '../../store/platform/platformSlice';
import { useSelector } from 'react-redux';
import { HttpStatusCode } from 'axios';
import { PersonalInfoGetResponseModel } from '../../Models/Responses/PersonalInfo/PersonalInfoGetResponseModel';
import SkillService from '../../Services/SkillService';
import { Paginate } from '../../core/Models/Paginate';
import { SkillGetListResponseModel } from '../../Models/Responses/Skill/SkillGetListResponseModel';
import ForeignLanguageService from '../../Services/ForeignLanguageService';
import { ForeignLanguageGetListResponseModel } from '../../Models/Responses/ForeignLanguage/ForeignLanguageGetListResponseModel';
import { CertificateGetResponseModel } from '../../Models/Responses/Certificate/CertificateGetResponseModel';
import { CertificateGetListResponseModel } from '../../Models/Responses/Certificate/CertificateGetListResponseModel';
import CertificateService from '../../Services/CertificateService';
import { SocialMediaGetListResponseModel } from '../../Models/Responses/SocialMedia/SocialMediaGetListResponseModel';
import SocialMediaService from '../../Services/SocialMediaService';
import { Link } from 'react-router-dom';

type Props = {};

const Profile = (props: Props) => {
  const platform: PlatformModel = useSelector((state: any) => state.platform);
  const [skills, setSkills] = useState<Paginate<SkillGetListResponseModel>>();
  const [foreignLanguages, setForeignLanguages] =
    useState<Paginate<ForeignLanguageGetListResponseModel>>();
  const [certificates, setCertificates] =
    useState<Paginate<CertificateGetListResponseModel>>();
  const [socialMedias, setSocialMedias] =
    useState<Paginate<SocialMediaGetListResponseModel>>();

  const [personalInfo, setPersonalInfo] =
    useState<PersonalInfoGetResponseModel>();
  const fetchUserData = async () => {
    const skillResponse = await SkillService.GetListByUserId(
      { PageIndex: 0, PageSize: 5 },
      platform.user.id
    );
    const personalInfoResponse = await PersonalInfoService.GetByUserId(
      platform.user.id
    );
    const foreignLanguageResponse =
      await ForeignLanguageService.GetListByUserId(
        { PageIndex: 0, PageSize: 5 },
        platform.user.id
      );
    const certificateResponse = await CertificateService.getListByUserId(
      { PageIndex: 0, PageSize: 5 },
      platform.user.id
    );
    const socialMediaResponse = await SocialMediaService.getListByUserId(
      { PageIndex: 0, PageSize: 5 },
      platform.user.id
    );

    if (personalInfoResponse.status == HttpStatusCode.Ok) {
      setPersonalInfo(personalInfoResponse.data);
    }

    if (skillResponse.status == HttpStatusCode.Ok) {
      setSkills(skillResponse.data);
    }
    if (foreignLanguageResponse.status == HttpStatusCode.Ok) {
      setForeignLanguages(foreignLanguageResponse.data);
    }
    if (certificateResponse.status == HttpStatusCode.Ok) {
      setCertificates(certificateResponse.data);
    }
    if (socialMediaResponse.status == HttpStatusCode.Ok) {
      setSocialMedias(socialMediaResponse.data);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <div className='container' style={{ minHeight: '100vh' }}>
        <div className='row ' style={{ marginTop: '1.5em' }}>
          <div className='d-flex justify-content-end'>
          <Link className="cv-edit-icon" to="/profilim/profilimi-duzenle/kisisel-bilgilerim"/>
            <div className='dropdown'>
              <button
                type='button'
                id='dropdown-basic'
                aria-expanded='false'
                className='cv-share-icon  dropdown-toggle btn btn-primary'
                style={{ backgroundColor: 'transparent', border: 'none' }}
              />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4 col-12'>
            <div className='row'>
              <div className='col-12'>
                <div className='cv-box'>
                  <div className='cv-pp '>
                    <div className='area'>
                      <ul className='circles'>
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                      </ul>
                    </div>
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
                          src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27128%27%20height=%27128%27/%3e'
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
                        src='https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&w=256&q=75'
                        decoding='async'
                        data-nimg='intrinsic'
                        className='cv-pp-img rounded-circle '
                        srcSet={
                          personalInfo?.profileImageUrl
                            ? personalInfo?.profileImageUrl
                            : 'https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&w=128&q=75  1x,https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&w=256&q=75  2x'
                        }
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
                  <div className='cv-info cv-padding'>
                    <div className='info-box'>
                      <div className='info-icon name' />
                      <div className='info-text'>
                        <span className='header'>Ad Soyad: </span>
                        <span className='text'>
                          {platform?.user.firstName +
                            ' ' +
                            platform?.user.lastName}
                        </span>
                      </div>
                    </div>
                    <div className='info-box'>
                      <div className='info-icon date' />
                      <div className='info-text'>
                        <span className='header'>Doğum Tarihi: </span>
                        <span className='text'>
                          {new Date(
                            personalInfo?.birthDate
                              ? personalInfo.birthDate
                              : ' '
                          ).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className='info-box'>
                      <div className='info-icon mail' />
                      <div className='info-text'>
                        <span className='header'>E-Posta: </span>
                        <span className='text'>{platform?.user?.email}</span>
                      </div>
                    </div>
                    <div className='info-box'>
                      <div className='info-icon phone' />
                      <div className='info-text'>
                        <span className='header'>Telefon: </span>
                        <span className='text'>
                          {personalInfo?.phoneNumber}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <div className='cv-box cv-padding'>
                  <div className='cv-box-header'>
                    <span>Hakkımda</span>
                    <hr />
                  </div>
                  <div className='about'>
                  {personalInfo?.about ? (
                        <div>Kendini kısaca anlat.</div>
                      )
                     : (
                      <div>Kendini kısaca anlat.</div>
                    )}
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <div className='cv-box cv-padding'>
                  <div className='cv-box-header'>
                    <div className='d-flex justify-content-between'>
                      <span>Yetkinliklerim</span>
                    </div>
                    <hr />
                  </div>
                  <div className='skills'>
                    {skills?.count ? (
                      skills?.count > 0 ? (
                        skills?.items?.map((item) => (
                          <div key={item.id} className='skill'>
                            {item.name}
                          </div>
                        ))
                      ) : (
                        <div>Henüz bir yetkinlik eklemedin.</div>
                      )
                    ) : (
                      <div>Henüz bir yetkinlik eklemedin.</div>
                    )}
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <div className='cv-box cv-padding'>
                  <div className='cv-box-header'>
                    <div className='d-flex justify-content-between'>
                      <span>Yabancı Dillerim</span>
                    </div>
                    <hr />
                  </div>
                  <div className='my-langs'>
                    {foreignLanguages?.count ? (
                      foreignLanguages?.count > 0 ? (
                        foreignLanguages?.items.map((item) => (
                          <div className='lang w-100' key={item.id}>
                            <div className='lang-info'>
                              <div className='lang-title '>
                                <div className='d-flex flex-column'>
                                  <span className='lang-name'>{item.name}</span>
                                  <span className='lang-degree'>
                                    {item.level}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <span className='lang-degree-symbol main-lang' />
                          </div>
                        ))
                      ) : (
                        <div>Henüz yabancı dil eklemedin </div>
                      )
                    ) : (
                      <div>Henüz yabancı dil eklemedin </div>
                    )}
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <div className='cv-box cv-padding'>
                  <div className='cv-box-header'>
                    <span>Sertifikalarım</span>
                    <hr />
                  </div>
                  <div className='row'>
                    {certificates?.count ? (
                      certificates?.count > 0 ? (
                        certificates?.items.map((item) => (
                          <div className='skills'>
                            <span
                              id='certificate_name'
                              className='skill d-flex justify-content-between'
                            >
                              <span className='me-2 text-truncate '>
                                {item.name}
                              </span>
                              <span className='me-0 png_icon text - center' />
                            </span>
                          </div>
                        ))
                      ) : (
                        <div>Henüz sertifika eklemedin</div>
                      )
                    ) : (
                      <div>Henüz sertifika eklemedin</div>
                    )}
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <div className='cv-box cv-padding'>
                  <div className='cv-box-header'>
                    <span>Medya Hesaplarım</span>
                    <hr />
                  </div>
                  <div className='cv-social-media'>
                    {socialMedias?.count ? (
                      socialMedias?.count > 0 ? (
                        socialMedias?.items.map((item) => (
                          <a
                            key={item.id}
                            className={'cv-' + item.name}
                            target='_blank'
                            href={item.url}
                          />
                        ))
                      ) : (
                        <div> Henüz sosyal medya eklemedin </div>
                      )
                    ) : (
                      <div> Henüz sosyal medya eklemedin </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-8 col-12'>
            <div className='row'>
              <div className='col-12'>
                <div className='cv-box cv-padding'>
                  <div className='cv-box-header'>
                    <div className='d-flex justify-content-between'>
                      <span>Tobeto İşte Başarı Modelim</span>
                      <span className='cv-see-icon' />
                    </div>
                    <hr />
                  </div>
                  <div className='model-padding'>
                    <div>
                      <div className='row'>
                        <div className='col-md-6 col-12 my-3'>
                          <div className='chartjs-size-monitor'>
                            <div className='chartjs-size-monitor-expand'>
                              <div />
                            </div>
                            <div className='chartjs-size-monitor-shrink'>
                              <div />
                            </div>
                          </div>
                          <canvas
                            height={480}
                            width={668}
                            style={{
                              display: 'block',
                              height: '240px',
                              width: '334px',
                            }}
                            className='chartjs-render-monitor'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <div className='cv-box cv-padding'>
                  <div className='cv-box-header'>
                    <div className='d-flex justify-content-between'>
                      <span>Tobeto Seviye Testlerim</span>
                    </div>
                    <hr />
                  </div>
                  <div className='row g-4'>
                    <div className='envantoryList'></div>
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <div className='cv-box cv-padding'>
                  <div className='cv-box-header'>
                    <div className='d-flex justify-content-between'>
                      <span>Yetkinlik Rozetlerim</span>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <div className='cv-box cv-padding'>
                  <div className='cv-box-header'>
                    <span>Aktivite Haritam</span>
                    <hr />
                  </div>
                  <svg className='react-calendar-heatmap' viewBox='0 0 582 76'>
                    <g
                      transform='translate(0, 0)'
                      className='react-calendar-heatmap-month-labels'
                    />
                    <g
                      transform='translate(0, 0)'
                      className='react-calendar-heatmap-all-weeks'
                    >
                      <g
                        transform='translate(0, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(11, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(22, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(33, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(44, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(55, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(66, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(77, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(88, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(99, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(110, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(121, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(132, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(143, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(154, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(165, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(176, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(187, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(198, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(209, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(220, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(231, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(242, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(253, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(264, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(275, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(286, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(297, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(308, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(319, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(330, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(341, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(352, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(363, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(374, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(385, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(396, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(407, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(418, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(429, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(440, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(451, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(462, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(473, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(484, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(495, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(506, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(517, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(528, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(539, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(550, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(561, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                      <g
                        transform='translate(572, 0)'
                        className='react-calendar-heatmap-week'
                      >
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={11}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={22}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={33}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={44}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={55}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={66}
                          className='empty-data'
                          data-tip='Herhangi bir aktiviteniz yok : 0'
                        >
                          <title />
                        </rect>
                      </g>
                    </g>
                    <g
                      transform='translate(10, 0)'
                      className='react-calendar-heatmap-weekday-labels'
                    />
                  </svg>
                  <div
                    className='__react_component_tooltip ta195e4d5-28d5-4085-9820-aa9d936cb57e place-bottom type-dark'
                    id='ta195e4d5-28d5-4085-9820-aa9d936cb57e'
                    data-id='tooltip'
                  />
                  <div className='hm-colors'>
                    <span id='hm1' className='hm1-color' />
                    <span id='hm1' className='hm5-color' />
                    <span id='hm1' className='hm4-color' />
                    <span id='hm1' className='hm3-color' />
                    <span id='hm1' className='hm2-color' />
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <div className='cv-box cv-padding'>
                  <div className='cv-box-header'>
                    <div className='d-flex justify-content-between'>
                      <span>Eğitim Hayatım ve Deneyimlerim</span>
                    </div>
                    <hr />
                  </div>
                  <div>Henüz bir eğitim ve deneyim bilgisi eklemedin.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
