import { useSelector } from 'react-redux';
import PersonalInfo from '../../Components/PersonalInfo/PersonalInfo';
import './PersonalInformation.css';
import { PlatformModel } from '../../store/platform/platformSlice';
import { PersonalInfoGetResponseModel } from '../../Models/Responses/PersonalInfo/PersonalInfoGetResponseModel';
import { useEffect, useState } from 'react';
import PersonalInfoService from '../../Services/PersonalInfoService';
import { HttpStatusCode } from 'axios';
import { Link, useLocation } from 'react-router-dom';
import EducationLife from '../../Components/EducationLife/EducationLife';
import Competencies from '../../Components/Competencies/Competencies';
import Certificates from '../../Components/Certificates/Certificates';
import Experience from '../../Components/Experience/Experience';
import Settings from '../../Components/Settings/Settings';
import MediaAccounts from '../../Components/MediaAccounts/MediaAccounts';
import Languages from '../../Components/Languages/Languages';

type Props = {};

const PersonalInformation = () => {
  const platform: PlatformModel = useSelector((state: any) => state.platform);
  const path = useLocation().pathname;
  const basePath = '/profilim/profilimi-duzenle/';

  const [personalInfo, setPersonalInfo] =
    useState<PersonalInfoGetResponseModel>();

  const fetchUserData = async () => {
    const personalInfoResponse = await PersonalInfoService.GetByUserId(
      platform.user.id
    );
    if (personalInfoResponse.status == HttpStatusCode.Ok) {
      setPersonalInfo(personalInfoResponse.data);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <main>
      <section className='py-6 bg-white'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-3 mb-8 mb-lg-0'>
              <div className='p-2 py-4 mobile-sidebar'>
                <Link
                  className='btn mb-2 text-start w-100 sidebar-link active-edit'
                  to={basePath + 'kisisel-bilgilerim'}
                >
                  <span className='personel-informations' />
                  <span className='sidebar-text'>Kişisel Bilgilerim</span>
                </Link>

                <Link
                  className='btn mb-2 text-start w-100  sidebar-link '
                  to={basePath + 'deneyimlerim'}
                >
                  <span className='experience' />
                  <span className='sidebar-text'>Deneyimlerim</span>
                </Link>

                <Link
                  className='btn mb-2 text-start w-100  sidebar-link '
                  to={basePath + 'egitim-hayatim'}
                >
                  <span className='educations' />
                  <span className='sidebar-text'>Eğitim Hayatım</span>
                </Link>

                <Link
                  className='btn mb-2 text-start w-100  sidebar-link '
                  to={basePath + 'yetkinliklerim'}
                >
                  <span className='abilities' />
                  <span className='sidebar-text'>Yetkinliklerim</span>
                </Link>
                <Link
                  className='btn mb-2 text-start w-100  sidebar-link '
                  to={basePath + 'sertifikalarim'}
                >
                  <span className='certificates' />
                  <span className='sidebar-text'>Sertifikalarım</span>
                </Link>
                <Link
                  className='btn mb-2 text-start w-100  sidebar-link '
                  to={basePath + 'medya-hesaplarim'}
                >
                  <span className='languages' />
                  <span className='sidebar-text'>Medya Hesaplarım</span>
                </Link>
                <Link
                  className='btn mb-2 text-start w-100  sidebar-link '
                  to={basePath + 'yabanci-dil'}
                >
                  <span className='languages2' />
                  <span className='sidebar-text'>Yabancı Dillerim</span>
                </Link>
                <Link
                  className='btn mb-2 text-start w-100  sidebar-link '
                  to={basePath + 'ayarlar'}
                >
                  <span className='settings' />
                  <span className='sidebar-text'>Ayarlar</span>
                </Link>
              </div>
            </div>
            <div className='col-12 col-lg-9' style={{ minHeight: '90vh' }}>
              {path === basePath + 'kisisel-bilgilerim' && (
                <PersonalInfo
                  personalInfo={personalInfo as PersonalInfoGetResponseModel}
                />
              )}
              {path === basePath + 'deneyimlerim' && <Experience />}
              {path === basePath + 'egitim-hayatim' && <EducationLife />}
              {path === basePath + 'yetkinliklerim' && <Competencies />}
              {path === basePath + 'sertifikalarim' && <Certificates />}
              {path === basePath + 'medya-hesaplarim' && <MediaAccounts />}
              {path === basePath + 'yabanci-dil' && <Languages />}
              {path === basePath + 'ayarlar' && <Settings />}
            </div>
            <div className='col-12'></div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default PersonalInformation;
