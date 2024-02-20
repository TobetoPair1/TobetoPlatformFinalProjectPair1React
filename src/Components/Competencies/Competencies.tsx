type Props = {};
const Competencies = (props: Props) => {
  return (
    <div className='col-12 col-lg-9' style={{ minHeight: '90vh' }}>
      <div className='row mb-2'>
        <div className='col-12 mb-6'>
          <label className='input-label-text'>Yetkinlik</label>
          <div className=' css-b62m3t-container'>
            <select name='competencies' className='form-select' aria-label='Yetkinlikleriniz için'>
              <option value=''>Seçiniz*</option>
              <option value='C#'>C#</option>
              <option value='SQL'>SQL</option>
              <option value='Muhasebe'>Muhasebe</option>
              <option value='JavaScript'>JavaScript</option>
              <option value='Aktif Öğrenme'>Aktif Öğrenme</option>
              <option value='Aktif Dinleme'>Aktif Dinleme</option>
              <option value='Uyum Sağlama'>Uyum Sağlama</option>
              <option value='Yönetim ve İdare'>Yönetim ve İdare</option>
              <option value='Reklam'>Reklam</option>
              <option value='Algoritmalar'>Algoritmalar</option>
              <option value='Android(İşletim Sistemi)'>Android(İşletim Sistemi)</option>
              <option value='Apachi'>Apachi</option>
              <option value='Uygulama Mağazası(IOS)'>Uygulama Mağazası(IOS)</option>
              <option value='Apple Sağlık Kiti'>Apple Sağlık Kiti</option>
              <option value='Uygulamalı Makina Öğrenimi'>Uygulamalı Makina Öğrenimi</option>
              <option value='Backend (Yazılım Mühendisliği)'>Backend (Yazılım Mühendisliği)</option>
              <option value='Büyük Veri'>Büyük Veri</option>
              <option value='Bootstrap(Front-End Framework)'>Bootstrap(Front-End Framework)</option>
              <option value='İletişim'>İletişim</option>
              <option value='Pazarlama'>Pazarlama</option>
              <option value='Building and Construction'>Building and Construction</option>
            </select>
            <span
              id='react-select-4-live-region'
              className='css-7pg0cj-a11yText'
            />
            <span
              aria-live='polite'
              aria-atomic='false'
              aria-relevant='additions text'
              className='css-7pg0cj-a11yText'
            />
            <div className=' css-13cymwt-control'>
              <div className=' css-hlgwow'>
                <div
                  className=' css-1jqq78o-placeholder'
                  id='react-select-4-placeholder'
                >
                  Seçiniz
                </div>
                <div className=' css-19bb58m' data-value>
                  <input
                    autoCapitalize='none'
                    autoComplete='off'
                    autoCorrect='off'
                    id='react-select-4-input'
                    spellCheck='false'
                    tabIndex={0}
                    type='text'
                    aria-autocomplete='list'
                    aria-expanded='false'
                    aria-haspopup='true'
                    role='combobox'
                    aria-describedby='react-select-4-placeholder'
                    style={{
                      color: 'inherit',
                      background: '0px center',
                      opacity: 1,
                      width: '100%',
                      gridArea: '1 / 2',
                      font: 'inherit',
                      minWidth: '2px',
                      border: '0px',
                      margin: '0px',
                      outline: '0px',
                      padding: '0px',
                    }}
                  />
                </div>
              </div>
              <div className=' css-1wy0on6'>
                <span className=' css-1u9des2-indicatorSeparator' />
                <div
                  className=' css-1xc3v61-indicatorContainer'
                  aria-hidden='true'
                >
                  <svg
                    height={20}
                    width={20}
                    viewBox='0 0 20 20'
                    aria-hidden='true'
                    focusable='false'
                    className='css-8mmkcg'
                  >
                    <path d='M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z' />
                  </svg>
                </div>
              </div>
            </div>
          </div>
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
      <div className='col-12' />
    </div>
  );
};
export default Competencies;
