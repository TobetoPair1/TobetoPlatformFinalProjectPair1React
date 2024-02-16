type Props = {};

const Settings = (props: Props) => {
  return (
    <>
      <form action='#' data-hs-cf-bound='true'>
        <div className='row mb-2'>
          <div className='col-12 col-md-4 mb-6'>
            <label className='input-label-text'>Eski Şifre*</label>
            <input
              name='currentPassword'
              className='form-control tobeto-input'
              type='password'
              placeholder='Eski Şifre'
            />
          </div>
          <div className='col-12 col-md-4 mb-6'>
            <label className='input-label-text'>Yeni Şifre*</label>
            <input
              name='password'
              className='form-control tobeto-input'
              type='password'
              placeholder='Yeni Şifre'
            />
          </div>
          <div className='col-12 col-md-4 mb-6'>
            <label className='input-label-text'>Yeni Şifre Tekrar*</label>
            <input
              name='passwordConfirmation'
              className='form-control tobeto-input'
              type='password'
              placeholder='Yeni Şifre Tekrar'
            />
          </div>
        </div>
      </form>
      <div className='col 12'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <button
              className='btn btn-primary py-2 mb-3 w-100'
              style={{
                backgroundColor: '#a3f',
                borderRadius: '38px',
                border: 'none',
              }}
            >
              Şifre Değiştir
            </button>
          </div>
          <div className='col-md-6 col-12'>
            <button
              className='btn btn-danger mb-2  w-100'
              style={{
                backgroundColor: '#f64',
                borderRadius: '38px',
                border: 'none',
              }}
            >
              Üyeliği Sonlandır
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Settings;
