function EducationLife() {
  return (
    <form data-hs-cf-bound='true'>
      <div className='row mb-2'>
        <div className='col-12 col-md-6 mb-6'>
          <label className='input-label-text'>Eğitim Durumu*</label>
          <select
            name='EducationStatus'
            className='form-select tobeto-input'
            aria-label=''
          >
            <option value=''>Seviye Seçiniz</option>
            <option value='Lisans'>Lisans</option>
            <option value='Ön Lisans'>Ön Lisans</option>
            <option value='Yüksek Lisans'>Yüksek Lisans</option>
            <option value='Doktora'>Doktora</option>
          </select>
        </div>
        <div className='col-12 col-md-6 mb-6'>
          <label className='input-label-text'>Üniversite*</label>
          <input
            name='University'
            className='form-control tobeto-input'
            type='text'
            placeholder='Kampüs 365'
          />
        </div>
        <div className='col-12 col-md-6 mb-6'>
          <label className='input-label-text'>Bölüm*</label>
          <input
            name='Department'
            className='form-control tobeto-input'
            type='text'
            placeholder='Yazılım'
          />
        </div>
        <div className='col-12 col-md-6 mb-6'>
          <label className='input-label-text'>Başlangıç Yılı*</label>
          <div className='react-datepicker-wrapper'>
            <div className='react-datepicker__input-container '>
              <span
                role='alert'
                aria-live='polite'
                className='react-datepicker__aria-live'
              />
              <input
                type='text'
                placeholder='Başlangıç Yılınızı Seçiniz'
                className='form-control tobeto-input'
              />
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6 mb-6'>
          <label className='input-label-text'>Mezuniyet Yılı*</label>
          <div className='react-datepicker-wrapper'>
            <div className='react-datepicker__input-container '>
              <span
                role='alert'
                aria-live='polite'
                className='react-datepicker__aria-live'
              />
              <input
                type='text'
                placeholder='Mezuniyet Yılınızı Seçiniz'
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
            <small className='text-muted'>Devam Ediyorum</small>
          </label>
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
  );
}
export default EducationLife;
