import React from 'react';

function Experience() {
  return (
    <div>
      <form action='#' data-hs-cf-bound='true'>
        <div className='row mb-2'>
          <div className='col-12 col-md-6 mb-6'>
            <label className='input-label-text'>Kurum Adı*</label>
            <input
              name='corporationName'
              className='form-control tobeto-input'
              type='text'
              placeholder='Kampüs 365'
            />
          </div>
          <div className='col-12 col-md-6 mb-6'>
            <label className='input-label-text'>Pozisyon*</label>
            <input
              name='position'
              className='form-control tobeto-input'
              type='text'
              placeholder='Front-End Developer'
            />
          </div>
          <div className='col-12 col-md-6 mb-6'>
            <label className='input-label-text'>Sektör*</label>
            <input
              name='sector'
              className='form-control tobeto-input'
              type='text'
              placeholder='Yazılım'
            />
          </div>
          <div className='col-12 col-md-6 mb-6'>
            <label className='input-label-text'>Şehir Seçiniz*</label>
            <select
              name='country'
              className='form-select tobeto-input'
              aria-label=''
            >
              <option value=''>İl Seçiniz</option>
              <option value='Adana'>Adana</option>
              <option value='Adıyaman'>Adıyaman</option>
              <option value='Afyonkarahisar'>Afyonkarahisar</option>
              <option value='Ağrı'>Ağrı</option>
              <option value='Aksaray'>Aksaray</option>
              <option value='Amasya'>Amasya</option>
              <option value='Ankara'>Ankara</option>
              <option value='Antalya'>Antalya</option>
              <option value='Ardahan'>Ardahan</option>
              <option value='Artvin'>Artvin</option>
              <option value='Aydın'>Aydın</option>
              <option value='Balıkesir'>Balıkesir</option>
              <option value='Bartın'>Bartın</option>
              <option value='Batman'>Batman</option>
              <option value='Bayburt'>Bayburt</option>
              <option value='Bilecik'>Bilecik</option>
              <option value='Bingöl'>Bingöl</option>
              <option value='Bitlis'>Bitlis</option>
              <option value='Bolu'>Bolu</option>
              <option value='Burdur'>Burdur</option>
              <option value='Bursa'>Bursa</option>
              <option value='Çanakkale'>Çanakkale</option>
              <option value='Çankırı'>Çankırı</option>
              <option value='Çorum'>Çorum</option>
              <option value='Denizli'>Denizli</option>
              <option value='Diyarbakır'>Diyarbakır</option>
              <option value='Düzce'>Düzce</option>
              <option value='Edirne'>Edirne</option>
              <option value='Elazığ'>Elazığ</option>
              <option value='Erzincan'>Erzincan</option>
              <option value='Erzurum'>Erzurum</option>
              <option value='Eskişehir'>Eskişehir</option>
              <option value='Gaziantep'>Gaziantep</option>
              <option value='Giresun'>Giresun</option>
              <option value='Gümüşhane'>Gümüşhane</option>
              <option value='Hakkari'>Hakkari</option>
              <option value='Hatay'>Hatay</option>
              <option value='Iğdır'>Iğdır</option>
              <option value='Isparta'>Isparta</option>
              <option value='İstanbul'>İstanbul</option>
              <option value='İzmir'>İzmir</option>
              <option value='Kahramanmaraş'>Kahramanmaraş</option>
              <option value='Karabük'>Karabük</option>
              <option value='Karaman'>Karaman</option>
              <option value='Kars'>Kars</option>
              <option value='Kastamonu'>Kastamonu</option>
              <option value='Kayseri'>Kayseri</option>
              <option value='Kilis'>Kilis</option>
              <option value='Kırıkkale'>Kırıkkale</option>
              <option value='Kırklareli'>Kırklareli</option>
              <option value='Kırşehir'>Kırşehir</option>
              <option value='Kocaeli'>Kocaeli</option>
              <option value='Konya'>Konya</option>
              <option value='Kütahya'>Kütahya</option>
              <option value='Malatya'>Malatya</option>
              <option value='Manisa'>Manisa</option>
              <option value='Mardin'>Mardin</option>
              <option value='Mersin'>Mersin</option>
              <option value='Muğla'>Muğla</option>
              <option value='Muş'>Muş</option>
              <option value='Nevşehir'>Nevşehir</option>
              <option value='Niğde'>Niğde</option>
              <option value='Ordu'>Ordu</option>
              <option value='Osmaniye'>Osmaniye</option>
              <option value='Rize'>Rize</option>
              <option value='Sakarya'>Sakarya</option>
              <option value='Samsun'>Samsun</option>
              <option value='Şanlıurfa'>Şanlıurfa</option>
              <option value='Siirt'>Siirt</option>
              <option value='Sinop'>Sinop</option>
              <option value='Sivas'>Sivas</option>
              <option value='Şırnak'>Şırnak</option>
              <option value='Tekirdağ'>Tekirdağ</option>
              <option value='Tokat'>Tokat</option>
              <option value='Trabzon'>Trabzon</option>
              <option value='Tunceli'>Tunceli</option>
              <option value='Uşak'>Uşak</option>
              <option value='Van'>Van</option>
              <option value='Yalova'>Yalova</option>
              <option value='Yozgat'>Yozgat</option>
              <option value='Zonguldak'>Zonguldak</option>
            </select>
          </div>
          <div className='col-12 col-md-6 mb-6'>
            <label className='input-label-text'>İş Başlangıcı*</label>
            <div className='react-datepicker-wrapper'>
              <div className='react-datepicker__input-container '>
                <span
                  role='alert'
                  aria-live='polite'
                  className='react-datepicker__aria-live'
                />
                <input
                  type='text'
                  placeholder='gg.aa.yyyy'
                  className='form-control tobeto-input'
                />
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 mb-6'>
            <label className='input-label-text'>İş Bitiş*</label>
            <div className='react-datepicker-wrapper'>
              <div className='react-datepicker__input-container '>
                <span
                  role='alert'
                  aria-live='polite'
                  className='react-datepicker__aria-live'
                />
                <input
                  type='text'
                  placeholder='gg.aa.yyyy'
                  disabled
                  className='form-control tobeto-input'
                />
              </div>
            </div>
            <label className='d-flex mt-3 text-start'>
              <input
                name='checkbox'
                className='form-check-input me-4'
                type='checkbox'
              />
              <small className='text-muted'>Çalışmaya Devam Ediyorum</small>
            </label>
          </div>
          <div className='col-12 col-md-12 mb-6'>
            <label className='input-label-text'>İş Açıklaması</label>
            <textarea
              rows={6}
              cols={50}
              name='description'
              className='form-control tobeto-input'
              defaultValue={''}
            />
          </div>
        </div>
        <button
          className='btn btn-primary py-2 mb-3 d-inline-block mobil-btn'
          style={{
            backgroundColor: '#a3f',
            borderRadius: '38px',
            border: 'none',
          }}
        >
          <b>Kaydet</b>
        </button>
      </form>
    </div>
  );
}

export default Experience;
