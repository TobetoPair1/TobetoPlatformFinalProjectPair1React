import { useSelector } from 'react-redux';
import PersonalInfo from '../../Components/PersonalInfo/PersonalInfo';
import './PersonalInformation.css';
import { PlatformModel } from '../../store/platform/platformSlice';
import { PersonalInfoGetResponseModel } from '../../Models/Responses/PersonalInfo/PersonalInfoGetResponseModel';
import { useEffect, useState } from 'react';
import PersonalInfoService from '../../Services/PersonalInfoService';
import { HttpStatusCode } from 'axios';

type Props = {};

const PersonalInformation = () => {
  const platform: PlatformModel = useSelector((state: any) => state.platform);

  const [personalInfo, setPersonalInfo] =
    useState<PersonalInfoGetResponseModel>();

  const fetchUserData = async () => {
    const personalInfoResponse = await PersonalInfoService.GetByUserId(
      platform.user.id
    );
    if (personalInfoResponse.status == HttpStatusCode.Ok) {
      console.log(personalInfoResponse.data);

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
                <a
                  className='btn mb-2 text-start w-100 sidebar-link active-edit'
                  href='#'
                >
                  <span className='personel-informations' />
                  <span className='sidebar-text'>Kişisel Bilgilerim</span>
                </a>
                <a
                  className='btn mb-2 text-start w-100  sidebar-link '
                  href='#'
                >
                  <span className='experience' />
                  <span className='sidebar-text'>Deneyimlerim</span>
                </a>
                <a
                  className='btn mb-2 text-start w-100  sidebar-link '
                  href='#'
                >
                  <span className='educations' />
                  <span className='sidebar-text'>Eğitim Hayatım</span>
                </a>
                <a
                  className='btn mb-2 text-start w-100  sidebar-link '
                  href='#'
                >
                  <span className='abilities' />
                  <span className='sidebar-text'>Yetkinliklerim</span>
                </a>
                <a
                  className='btn mb-2 text-start w-100  sidebar-link '
                  href='#'
                >
                  <span className='certificates' />
                  <span className='sidebar-text'>Sertifikalarım</span>
                </a>
                <a
                  className='btn mb-2 text-start w-100  sidebar-link '
                  href='#'
                >
                  <span className='languages' />
                  <span className='sidebar-text'>Medya Hesaplarım</span>
                </a>
                <a
                  className='btn mb-2 text-start w-100  sidebar-link '
                  href='#'
                >
                  <span className='languages2' />
                  <span className='sidebar-text'>Yabancı Dillerim</span>
                </a>
                <a
                  className='btn mb-2 text-start w-100  sidebar-link '
                  href='#'
                >
                  <span className='settings' />
                  <span className='sidebar-text'>Ayarlar</span>
                </a>
              </div>
            </div>
            <div className='col-12 col-lg-9' style={{ minHeight: '90vh' }}>
              <PersonalInfo
                personalInfo={personalInfo as PersonalInfoGetResponseModel}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default PersonalInformation;
