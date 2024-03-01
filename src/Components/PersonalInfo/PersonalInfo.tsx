import { ChangeEvent, useEffect, useState } from 'react';
import { PersonalInfoGetResponseModel } from '../../Models/Responses/PersonalInfo/PersonalInfoGetResponseModel';
import DistrictService from '../../Services/DistrictService';
import { District } from '../../Models/Responses/District/DistrictResponseModel';
import * as Yup from 'yup'
import toastr from 'toastr';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import PersonalInfoService from '../../Services/PersonalInfoService';
import { HttpStatusCode } from 'axios';

type props = {
  personalInfo: PersonalInfoGetResponseModel;
};
interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  identityNumber: string;
  phoneNumber: string;
  birthDate: string;
  country: string;
  city: string;
  district: string;
  address: string;
  description: string;
  profileImageUrl: string;
}

function PersonalInfo(props: props) {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoGetResponseModel>();
  const [districts, setDistricts] = useState<District[]>();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    identityNumber: "",
    phoneNumber: "",
    birthDate: "",
    country: "",
    city: "",
    district: "",
    address: "",
    description: "",
    profileImageUrl: ""
  }

  // const schema = Yup.object({
  //   firstName:Yup.string().required("Doldurulması zorunlu alan*"),
  //   lastName:Yup.string().required("Doldurulması zorunlu alan*"),
  //   email: Yup.string().required("Doldurulması zorunlu alan*"),
  //   identityNumber:Yup.string().required("Doldurulması zorunlu alan*"),
  //   phoneNumber:Yup.string().required("Doldurulması zorunlu alan*"),
  //   birthDate:Yup.string().required("Doldurulması zorunlu alan*"),
  //   country:Yup.string().required("Doldurulması zorunlu alan*"),
  //   city:Yup.string().required("Doldurulması zorunlu alan*"),
  //   district:Yup.string().required("Doldurulması zorunlu alan*"),
  //   address:Yup.string().required("Doldurulması zorunlu alan*"),
  //   description:Yup.string().required("Doldurulması zorunlu alan*"),
  //   profileImageUrl: Yup.string().required("Doldurulması zorunlu alan*")
  // })

  function convertDateFormat(dateString: string, fromFormat: string, toFormat: string) {
    const [datePart] = dateString.split('T'); // "T" karakterinden önceki kısmı al
    const [year, month, day] = datePart.split(fromFormat); // Verilen formata göre parçala
    const formattedDate = `${year}${toFormat}${month}${toFormat}${day}`; // Yeni formata göre birleştir
    return formattedDate;
  }
  function GetDistricts(city: string) {
    if (city != '')
      DistrictService.getDistricts(city).then(result =>
        setDistricts(result.data.data[0].districts)
      );
    else {
      setDistricts([]);
    }
  }
  useEffect(() => {
    setPersonalInfo(props.personalInfo);
    GetDistricts(props?.personalInfo?.city);
  }, [props.personalInfo])
  
  async function OnSave(values:FormValues){    
    if(personalInfo){
    const response= await PersonalInfoService.update({...personalInfo});
    if(response.status==HttpStatusCode.Ok){
      toastr.success("Profil bilgileriniz güncellendi.");
    }
    else{
      toastr.error("Profil bilgileriniz güncellenemedi.");
    }
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values:FormValues) => {
        OnSave(values);
      }}
    >
      <Form data-hs-cf-bound='true'>

        <div className='row mb-2'>
          <div className='col-12 mb-6 text-center'>
            <div className='profile-photo mx-auto'>
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
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27261%27%20height=%27261%27/%3e'
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
                  src='https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&w=640&q=75'
                  decoding='async'
                  data-nimg='intrinsic'
                  className='rounded-circle '
                  style={{
                    width: '0px',
                    height: '0px',
                    position: 'absolute',
                    inset: '0px',
                    boxSizing: 'border-box',
                    padding: '0px',
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                  }}
                  srcSet='https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&w=384&q=75  1x,https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&w=640&q=75  2x'
                />
              </span>
              <div className='photo-edit-btn cursor-pointer' />
            </div>
            <div>
              <div className='uppy-Container'>
                <div className='uppy-Root' dir='ltr'>
                  <div
                    className='uppy-Dashboard uppy-Dashboard--animateOpenClose uppy-Dashboard--modal uppy-Dashboard--isInnerWrapVisible'
                    data-uppy-theme='light'
                    data-uppy-num-acquirers={0}
                    data-uppy-drag-drop-supported='true'
                    aria-hidden='true'
                    aria-disabled='false'
                    aria-label='Dosya Yükle (Kapatmak için Esc)'
                  >
                    <div
                      aria-hidden='true'
                      className='uppy-Dashboard-overlay'
                      tabIndex={-1}
                    />
                    <div
                      className='uppy-Dashboard-inner'
                      aria-modal='true'
                      role='dialog'
                    >
                      <button
                        className='uppy-u-reset uppy-Dashboard-close'
                        type='button'
                        aria-label='Kapat'
                        title='Kapat'
                      >
                        <span aria-hidden='true'>×</span>
                      </button>
                      <div className='uppy-Dashboard-innerWrap'>
                        <div className='uppy-Dashboard-dropFilesHereHint'>
                          Buraya sürükleyip bırakın
                        </div>
                        <div className='uppy-Dashboard-AddFiles'>
                          <input
                            className='uppy-Dashboard-input'
                            hidden
                            aria-hidden='true'
                            tabIndex={-1}
                            type='file'
                            name='files[]'
                            accept='image/jpeg,image/png'
                          />
                          <input
                            className='uppy-Dashboard-input'
                            hidden
                            aria-hidden='true'
                            tabIndex={-1}
                            type='file'
                            name='files[]'
                            accept='image/jpeg,image/png'
                          />
                          <div className='uppy-Dashboard-AddFiles-title'>
                            Sürükleyip bırak, yapıştır veya{' '}
                            <button
                              type='button'
                              className='uppy-u-reset uppy-c-btn uppy-Dashboard-browse'
                              data-uppy-super-focusable='true'
                            >
                              gözat
                            </button>
                          </div>
                          <div
                            className='uppy-Dashboard-AddFiles-list'
                            role='tablist'
                          >
                            <span
                              role='presentation'
                              style={{ whiteSpace: 'nowrap' }}
                            />
                          </div>
                          <div className='uppy-Dashboard-AddFiles-info'>
                            <a
                              tabIndex={-1}
                              href='https://uppy.io'
                              rel='noreferrer noopener'
                              target='_blank'
                              className='uppy-Dashboard-poweredBy'
                            >
                              Powered by{' '}
                              <span>
                                <svg
                                  aria-hidden='true'
                                  focusable='false'
                                  className='uppy-c-icon uppy-Dashboard-poweredByIcon'
                                  width={11}
                                  height={11}
                                  viewBox='0 0 11 11'
                                >
                                  <path d='M7.365 10.5l-.01-4.045h2.612L5.5.806l-4.467 5.65h2.604l.01 4.044h3.718z' />
                                </svg>
                                <span className='uppy-Dashboard-poweredByUppy'>
                                  Uppy
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className='uppy-Dashboard-progressindicators'>
                          <div
                            className='uppy-StatusBar is-waiting'
                            aria-hidden='true'
                          >
                            <div
                              className='uppy-StatusBar-progress'
                              role='progressbar'
                              aria-label='0%'
                              aria-valuetext='0%'
                              aria-valuemin={0}
                              aria-valuemax={100}
                              aria-valuenow={0}
                              style={{ width: '0%' }}
                            />
                            <div className='uppy-StatusBar-actions' />
                          </div>
                          <div className='uppy uppy-Informer'>
                            <span />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 mb-6'>
            <label className='input-label-text'>Adınız*</label>
            <Field
              name='name'
              className='form-control tobeto-input'
              type='text'
              value={personalInfo?.firstName}
              onChange={(e:ChangeEvent<HTMLInputElement>) => setPersonalInfo({ ...(personalInfo as PersonalInfoGetResponseModel), firstName: e.target.value })}
            />
            <ErrorMessage name="name" render={error=>
                        <label style={{color:'red'}}>{error}</label>
                    }/>
          </div>
          <div className='col-12 col-md-6 mb-6'>
            <label className='input-label-text'>Soyadınız*</label>
            <Field
              name='surname'
              className='form-control tobeto-input'
              type='text'
              value={personalInfo?.lastName}
              onChange={(e:ChangeEvent<HTMLInputElement>) => setPersonalInfo({ ...(personalInfo as PersonalInfoGetResponseModel), lastName: e.target.value })}
            />
             <ErrorMessage name="surname" render={error=>
                        <label style={{color:'red'}}>{error}</label>
                    }/>
          </div>
          <div className='col-12 col-md-6 mb-6'>
            <label className='input-label-text'>Telefon Numaranız*</label>
            <div className='PhoneInput'>
              <div className='PhoneInputCountry'>
                <select
                  name='phoneNumberCountry'
                  aria-label='Ülke telefon numarası'
                  className='PhoneInputCountrySelect'
                >
                  <option value='ZZ'>Uluslararası</option>
                  <option value='AF'>Afganistan</option>
                  <option value='AX'>Åland Adaları</option>
                  <option value='DE'>Almanya</option>
                  <option value='US'>Amerika Birleşik Devletleri</option>
                  <option value='AS'>Amerikan Samoası</option>
                  <option value='AD'>Andorra</option>
                  <option value='AO'>Angola</option>
                  <option value='AI'>Anguilla</option>
                  <option value='AG'>Antigua ve Barbuda</option>
                  <option value='AR'>Arjantin</option>
                  <option value='AL'>Arnavutluk</option>
                  <option value='AW'>Aruba</option>
                  <option value='AU'>Avustralya</option>
                  <option value='AT'>Avusturya</option>
                  <option value='AZ'>Azerbaycan</option>
                  <option value='BL'>Aziz Barthélemy</option>
                  <option value='SH'>Aziz Helena</option>
                  <option value='BS'>Bahamalar</option>
                  <option value='BH'>Bahreyn</option>
                  <option value='BD'>Bangladeş</option>
                  <option value='BB'>Barbados</option>
                  <option value='EH'>Batı Sahra</option>
                  <option value='BE'>Belçika</option>
                  <option value='BZ'>Belize</option>
                  <option value='BJ'>Benin</option>
                  <option value='BM'>Bermuda</option>
                  <option value='BY'>Beyaz Rusya</option>
                  <option value='AE'>Birleşik Arap Emirlikleri</option>
                  <option value='BO'>Bolivya</option>
                  <option value='BQ'>Bonaire, Sint Eustatius ve Saba</option>
                  <option value='BA'>Bosna Hersek</option>
                  <option value='BW'>Botsvana</option>
                  <option value='BR'>Brezilya</option>
                  <option value='BN'>Brunei Darussalam</option>
                  <option value='BG'>Bulgaristan</option>
                  <option value='BF'>Burkina Faso</option>
                  <option value='BI'>Burundi</option>
                  <option value='BT'>Butan</option>
                  <option value='KY'>Cayman Adaları</option>
                  <option value='GI'>Cebelitarık</option>
                  <option value='DZ'>Cezayir</option>
                  <option value='CX'>Christmas Adası</option>
                  <option value='DJ'>Cibuti</option>
                  <option value='CC'>Cocos (Keeling) Adaları</option>
                  <option value='CK'>Cook Adaları</option>
                  <option value='CW'>Curaçao</option>
                  <option value='TD'>Çad</option>
                  <option value='CZ'>Çek Cumhuriyeti</option>
                  <option value='CN'>Çin</option>
                  <option value='DK'>Danimarka</option>
                  <option value='TL'>Doğu Timor</option>
                  <option value='DO'>Dominik Cumhuriyeti</option>
                  <option value='DM'>Dominika</option>
                  <option value='EC'>Ekvador</option>
                  <option value='GQ'>Ekvator Ginesi</option>
                  <option value='SV'>El Salvador</option>
                  <option value='ID'>Endonezya</option>
                  <option value='ER'>Eritre</option>
                  <option value='AM'>Ermenistan</option>
                  <option value='EE'>Estonya</option>
                  <option value='ET'>Etiyopya</option>
                  <option value='FK'>Falkland Adaları</option>
                  <option value='FO'>Faroe Adaları</option>
                  <option value='MA'>Fas</option>
                  <option value='FJ'>Fiji</option>
                  <option value='CI'>Fildişi Sahili</option>
                  <option value='PH'>Filipinler</option>
                  <option value='PS'>Filistin</option>
                  <option value='FI'>Finlandiya</option>
                  <option value='FR'>Fransa</option>
                  <option value='GF'>Fransız Guyanası</option>
                  <option value='PF'>Fransız Polinezyası</option>
                  <option value='GA'>Gabon</option>
                  <option value='GM'>Gambiya</option>
                  <option value='GH'>Gana</option>
                  <option value='GN'>Gine</option>
                  <option value='GW'>Gine-Bissau</option>
                  <option value='GD'>Grenada</option>
                  <option value='GL'>Grönland</option>
                  <option value='GP'>Guadeloupe</option>
                  <option value='GU'>Guam</option>
                  <option value='GT'>Guatemala</option>
                  <option value='GG'>Guernsey</option>
                  <option value='GY'>Guyana</option>
                  <option value='ZA'>Güney Afrika</option>
                  <option value='KR'>Güney Kore</option>
                  <option value='SS'>Güney Sudan</option>
                  <option value='GE'>Gürcistan</option>
                  <option value='HT'>Haiti</option>
                  <option value='HR'>Hırvatistan</option>
                  <option value='IN'>Hindistan'da</option>
                  <option value='NL'>Hollanda</option>
                  <option value='VA'>Holy See (Vatikan Şehir Devleti)</option>
                  <option value='HN'>Honduras</option>
                  <option value='HK'>Hong Kong</option>
                  <option value='IQ'>Irak</option>
                  <option value='IO'>İngiliz Hint Okyanusu Bölgesi</option>
                  <option value='GB'>İngiltere</option>
                  <option value='IR'>İran</option>
                  <option value='IE'>İrlanda</option>
                  <option value='ES'>İspanya</option>
                  <option value='IL'>İsrail</option>
                  <option value='SE'>İsveç</option>
                  <option value='CH'>İsviçre</option>
                  <option value='IT'>İtalya</option>
                  <option value='IS'>İzlanda</option>
                  <option value='JM'>Jamaika</option>
                  <option value='JP'>Japonya</option>
                  <option value='JE'>Jersey</option>
                  <option value='KH'>Kamboçya</option>
                  <option value='CM'>Kamerun</option>
                  <option value='CA'>Kanada</option>
                  <option value='ME'>Karadağ</option>
                  <option value='QA'>Katar</option>
                  <option value='KZ'>Kazakistan</option>
                  <option value='KE'>Kenya</option>
                  <option value='CY'>Kıbrıs</option>
                  <option value='KG'>Kırgızistan</option>
                  <option value='KI'>Kiribati</option>
                  <option value='CO'>Kolombiya</option>
                  <option value='KM'>Komorlar</option>
                  <option value='CG'>Kongo</option>
                  <option value='CD'>Kongo, Demokratik Cumhuriyeti</option>
                  <option value='XK'>Kosova</option>
                  <option value='CR'>Kosta Rika</option>
                  <option value='KW'>Kuveyt</option>
                  <option value='KP'>Kuzey Kore</option>
                  <option value='MK'>Kuzey Makedonya</option>
                  <option value='MP'>Kuzey Mariana Adaları</option>
                  <option value='CU'>Küba</option>
                  <option value='LA'>Laos</option>
                  <option value='LS'>Lesotho</option>
                  <option value='LV'>Letonya</option>
                  <option value='LR'>Liberya</option>
                  <option value='LY'>Libya</option>
                  <option value='LI'>Lihtenştayn</option>
                  <option value='LT'>Litvanya</option>
                  <option value='LB'>Lübnan</option>
                  <option value='LU'>Lüksemburg</option>
                  <option value='HU'>Macaristan</option>
                  <option value='MG'>Madagaskar</option>
                  <option value='MO'>Makao</option>
                  <option value='MW'>Malavi</option>
                  <option value='MV'>Maldivler</option>
                  <option value='MY'>Malezya</option>
                  <option value='ML'>Mali</option>
                  <option value='MT'>Malta</option>
                  <option value='IM'>Man Adası</option>
                  <option value='MH'>Marshall Adaları</option>
                  <option value='MQ'>Martinik</option>
                  <option value='MU'>Mauritius</option>
                  <option value='YT'>Mayotte</option>
                  <option value='MX'>Meksika</option>
                  <option value='EG'>Mısır</option>
                  <option value='FM'>Mikronezya Federal Devletleri</option>
                  <option value='MN'>Moğolistan</option>
                  <option value='MD'>Moldova</option>
                  <option value='MC'>Monako</option>
                  <option value='MS'>Montserrat</option>
                  <option value='MR'>Moritanya</option>
                  <option value='MZ'>Mozambik</option>
                  <option value='MM'>Myanmar</option>
                  <option value='NA'>Namibya</option>
                  <option value='NR'>Nauru</option>
                  <option value='NP'>Nepal</option>
                  <option value='NE'>Nijer</option>
                  <option value='NG'>Nijerya</option>
                  <option value='NI'>Nikaragua</option>
                  <option value='NU'>Niue</option>
                  <option value='NF'>Norfolk Adası</option>
                  <option value='NO'>Norveç</option>
                  <option value='CF'>Orta Afrika Cumhuriyeti</option>
                  <option value='UZ'>Özbekistan</option>
                  <option value='PK'>Pakistan</option>
                  <option value='PW'>Palau</option>
                  <option value='PA'>Panama</option>
                  <option value='PG'>Papua Yeni Gine</option>
                  <option value='PY'>Paraguay</option>
                  <option value='PE'>Peru</option>
                  <option value='PL'>Polonya</option>
                  <option value='PT'>Portekiz</option>
                  <option value='PR'>Porto Riko</option>
                  <option value='RO'>Romanya</option>
                  <option value='RW'>Ruanda</option>
                  <option value='RU'>Rusya</option>
                  <option value='KN'>Saint Kitts ve Nevis</option>
                  <option value='LC'>Saint Lucia</option>
                  <option value='MF'>Saint Martin (Fransız Bölgesi)</option>
                  <option value='PM'>Saint Pierre ve Miquelon</option>
                  <option value='VC'>Saint Vincent ve Grenadinler</option>
                  <option value='WS'>Samoa</option>
                  <option value='SM'>San Marino</option>
                  <option value='ST'>Sao Tome ve Principe</option>
                  <option value='SN'>Senegal</option>
                  <option value='SC'>Seyşeller</option>
                  <option value='RS'>Sırbistan</option>
                  <option value='SL'>Sierra Leone</option>
                  <option value='SG'>Singapur</option>
                  <option value='SX'>Sint Maarten</option>
                  <option value='SK'>Slovakya</option>
                  <option value='SI'>Slovenya</option>
                  <option value='SB'>Solomon Adaları</option>
                  <option value='SO'>Somali</option>
                  <option value='LK'>Sri Lanka</option>
                  <option value='SD'>Sudan</option>
                  <option value='SR'>Surinam</option>
                  <option value='SY'>Suriye</option>
                  <option value='SA'>Suudi Arabistan</option>
                  <option value='SJ'>Svalbard ve Jan Mayen</option>
                  <option value='SZ'>Svaziland</option>
                  <option value='CL'>Şili</option>
                  <option value='TJ'>Tacikistan</option>
                  <option value='TZ'>Tanzanya</option>
                  <option value='TH'>Tayland</option>
                  <option value='TW'>Tayvan</option>
                  <option value='TG'>Togo</option>
                  <option value='TK'>Tokelau</option>
                  <option value='TO'>Tonga</option>
                  <option value='TT'>Trinidad ve Tobago</option>
                  <option value='TA'>Tristan da Cunha</option>
                  <option value='TN'>Tunus</option>
                  <option value='TC'>Turks ve Caicos Adaları</option>
                  <option value='TV'>Tuvalu</option>
                  <option value='TR'>Türkiye</option>
                  <option value='TM'>Türkmenistan</option>
                  <option value='UG'>Uganda</option>
                  <option value='UA'>Ukrayna</option>
                  <option value='OM'>Umman</option>
                  <option value='UY'>Uruguay</option>
                  <option value='JO'>Ürdün</option>
                  <option value='VU'>Vanuatu</option>
                  <option value='VE'>Venezuela</option>
                  <option value='VN'>Vietnam</option>
                  <option value='VI'>Virgin Adaları, ABD</option>
                  <option value='VG'>Virgin Adaları, İngiliz</option>
                  <option value='WF'>Wallis ve Futuna</option>
                  <option value='YE'>Yemen</option>
                  <option value='NC'>Yeni Kaledonya</option>
                  <option value='NZ'>Yeni Zelanda</option>
                  <option value='RE'>Yeniden Birleşme</option>
                  <option value='CV'>Yeşil Burun Adaları</option>
                  <option value='GR'>Yunanistan</option>
                  <option value='AC'>Yükseliş Adası</option>
                  <option value='ZM'>Zambiya</option>
                  <option value='ZW'>Zimbabve</option>
                </select>
                <div aria-hidden='true' className='PhoneInputCountryIcon'>
                  <img
                    className='PhoneInputCountryIconImg'
                    alt='Türkiye'
                    src='https://purecatamphetamine.github.io/country-flag-icons/3x2/TR.svg'
                  />
                </div>

              </div>
              <Field
                type='tel'
                autoComplete='tel'
                placeholder='5** *** ** **'
                id='phoneNumber'
                name='phoneNumber'
                className='PhoneInputInput'
                value={personalInfo?.phoneNumber}
                onChange={(e:ChangeEvent<HTMLInputElement>) => setPersonalInfo({ ...(personalInfo as PersonalInfoGetResponseModel), phoneNumber: e.target.value })}
              />
               <ErrorMessage name="phoneNumber" render={error=>
                        <label style={{color:'red'}}>{error}</label>
                    }/>
            </div>
          </div>
          <div className='col-12 col-md-6 mb-6'>
            <label className='input-label-text'>Doğum Tarihiniz*</label>
            <Field
              name='birthday'
              max='2024-01-029'
              className='form-control tobeto-input'
              type='date'
              value={personalInfo?.birthDate ? convertDateFormat(personalInfo.birthDate, "-", "-") : "0000-01-01"}
              onChange={(e:ChangeEvent<HTMLDataElement>) => setPersonalInfo({ ...(personalInfo as PersonalInfoGetResponseModel), birthDate: e.target.value })}
            />
            <ErrorMessage name="birthday" render={error=>
                        <label style={{color:'red'}}>{error}</label>
                    }/>
          </div>
          <div className='col-12 col-md-6 mb-6'>
            <label className='input-label-text'>TC Kimlik No*</label>
            <Field
              name='identifier'
              className='form-control tobeto-input mb-2'
              value={personalInfo?.identityNumber}
            />
            <ErrorMessage name="identifier" render={error=>
                        <label style={{color:'red'}}>{error}</label>
                    }/>
            <span
              className='text-danger'
              style={{ fontStyle: 'italic', fontSize: '14px' }}
            >
              *Aboneliklerde fatura için doldurulması zorunlu alan
            </span>
          </div>
          <div className='col-12 col-md-6 mb-6'>
            <label className='input-label-text'>E-posta</label>
            <Field
              name='email'
              className='form-control tobeto-input'
              type='text'
              disabled
              value={personalInfo?.email}
            />
            <ErrorMessage name="email" render={error=>
                        <label style={{color:'red'}}>{error}</label>
                    }/>
          </div>
          <div className='col-12 mb-6'>
            <label className='input-label-text'>Ülke*</label>
            <Field
              name='country'
              className='form-control tobeto-input'
              type='text'
              value={personalInfo?.country}
            />
            <ErrorMessage name="country" render={error=>
                        <label style={{color:'red'}}>{error}</label>
                    }/>
          </div>
          <div className='col-12 col-md-6 mb-6'>
            <label className='input-label-text'>İl*</label>
            <Field as="select"
              name='city'
              className='form-select tobeto-input'
              aria-label='Şehir seç'
              value={personalInfo?.city}
              onChange={(e:ChangeEvent<HTMLSelectElement>) => {
                setPersonalInfo({ ...(personalInfo as PersonalInfoGetResponseModel), city: e.target.value });
                GetDistricts(e.target.value);
              }}
            >
              <option value=''>İl Seçiniz</option>
              <option value="Adana">Adana</option>
              <option value="Adıyaman">Adıyaman</option>
              <option value="Afyonkarahisar">Afyonkarahisar</option>
              <option value="Ağrı">Ağrı</option>
              <option value="Aksaray">Aksaray</option>
              <option value="Amasya">Amasya</option>
              <option value="Ankara">Ankara</option>
              <option value="Antalya">Antalya</option>
              <option value="Ardahan">Ardahan</option>
              <option value="Artvin">Artvin</option>
              <option value="Aydın">Aydın</option>
              <option value="Balıkesir">Balıkesir</option>
              <option value="Bartın">Bartın</option>
              <option value="Batman">Batman</option>
              <option value="Bayburt">Bayburt</option>
              <option value="Bilecik">Bilecik</option>
              <option value="Bingöl">Bingöl</option>
              <option value="Bitlis">Bitlis</option>
              <option value="Bolu">Bolu</option>
              <option value="Burdur">Burdur</option>
              <option value="Bursa">Bursa</option>
              <option value="Çanakkale">Çanakkale</option>
              <option value="Çankırı">Çankırı</option>
              <option value="Çorum">Çorum</option>
              <option value="Denizli">Denizli</option>
              <option value="Diyarbakır">Diyarbakır</option>
              <option value="Düzce">Düzce</option>
              <option value="Edirne">Edirne</option>
              <option value="Elazığ">Elazığ</option>
              <option value="Erzincan">Erzincan</option>
              <option value="Erzurum">Erzurum</option>
              <option value="Eskişehir">Eskişehir</option>
              <option value="Gaziantep">Gaziantep</option>
              <option value="Giresun">Giresun</option>
              <option value="Gümüşhane">Gümüşhane</option>
              <option value="Hakkari">Hakkari</option>
              <option value="Hatay">Hatay</option>
              <option value="Iğdır">Iğdır</option>
              <option value="Isparta">Isparta</option>
              <option value="İstanbul">İstanbul</option>
              <option value="İzmir">İzmir</option>
              <option value="Kahramanmaraş">Kahramanmaraş</option>
              <option value="Karabük">Karabük</option>
              <option value="Karaman">Karaman</option>
              <option value="Kars">Kars</option>
              <option value="Kastamonu">Kastamonu</option>
              <option value="Kayseri">Kayseri</option>
              <option value="Kilis">Kilis</option>
              <option value="Kırıkkale">Kırıkkale</option>
              <option value="Kırklareli">Kırklareli</option>
              <option value="Kırşehir">Kırşehir</option>
              <option value="Kocaeli">Kocaeli</option>
              <option value="Konya">Konya</option>
              <option value="Kütahya">Kütahya</option>
              <option value="Malatya">Malatya</option>
              <option value="Manisa">Manisa</option>
              <option value="Mardin">Mardin</option>
              <option value="Mersin">Mersin</option>
              <option value="Muğla">Muğla</option>
              <option value="Muş">Muş</option>
              <option value="Nevşehir">Nevşehir</option>
              <option value="Niğde">Niğde</option>
              <option value="Ordu">Ordu</option>
              <option value="Osmaniye">Osmaniye</option>
              <option value="Rize">Rize</option>
              <option value="Sakarya">Sakarya</option>
              <option value="Samsun">Samsun</option>
              <option value="Şanlıurfa">Şanlıurfa</option>
              <option value="Siirt">Siirt</option>
              <option value="Sinop">Sinop</option>
              <option value="Sivas">Sivas</option>
              <option value="Şırnak">Şırnak</option>
              <option value="Tekirdağ">Tekirdağ</option>
              <option value="Tokat">Tokat</option>
              <option value="Trabzon">Trabzon</option>
              <option value="Tunceli">Tunceli</option>
              <option value="Uşak">Uşak</option>
              <option value="Van">Van</option>
              <option value="Yalova">Yalova</option>
              <option value="Yozgat">Yozgat</option>
              <option value="Zonguldak">Zonguldak</option>

            </Field>
            <ErrorMessage name="city" render={error=>
                        <label style={{color:'red'}}>{error}</label>
                    }/>
          </div>
          <div className='col-12 col-md-6 mb-6'>
            <label className='input-label-text'>İlçe*</label>
            <Field as="select"
              name='district'
              className='form-select tobeto-input'
              aria-label='İlçe'
              value={personalInfo?.district}
              onChange={(e:ChangeEvent<HTMLSelectElement>) => {
                setPersonalInfo({ ...(personalInfo as PersonalInfoGetResponseModel), district: e.target.value });
              }}
            >
              <option value=''>İlçe Seçiniz</option>
              {districts?.map((district) =>
                <option value={district.name}>{district.name}</option>
              )}
            </Field>
            <ErrorMessage name="district" render={error=>
                        <label style={{color:'red'}}>{error}</label>
                    }/>
          </div>
          <div className='col-12 mb-6'>
            <label className='input-label-text'>Mahalle / Sokak</label>
            <Field as="textarea"
              rows={5}
              name='address'
              className='form-control tobeto-input'
              value={personalInfo?.address}
              onChange={(e:ChangeEvent<HTMLSelectElement>) => {
                setPersonalInfo({ ...(personalInfo as PersonalInfoGetResponseModel), address: e.target.value });
              }}
            />
            <ErrorMessage name="address" render={error=>
                        <label style={{color:'red'}}>{error}</label>
                    }/>
          </div>
          <div className='col-12 mb-6'>
            <label className='input-label-text'>Hakkımda</label>
            <Field as="textarea"
              name='description'
              rows={6}
              cols={50}
              className='form-control tobeto-input'
              placeholder='Kendini kısaca tanıt'
              value={personalInfo?.about}
              onChange={(e:ChangeEvent<HTMLSelectElement>) => {
                setPersonalInfo({ ...(personalInfo as PersonalInfoGetResponseModel), about: e.target.value });
              }}
            />
            <ErrorMessage name="description" render={error=>
                        <label style={{color:'red'}}>{error}</label>
                    }/>
          </div>
        </div>
        <button
          className='btn btn-primary py-2 mb-3 d-inline-block mobil-btn'
          type='submit'
          style={{
            backgroundColor: '#a3f',
            borderRadius: '38px',
            border: 'none',
          }}
        >
          <b>Kaydet</b>
        </button>
      </Form>
    </Formik>
  );
}
export default PersonalInfo;
