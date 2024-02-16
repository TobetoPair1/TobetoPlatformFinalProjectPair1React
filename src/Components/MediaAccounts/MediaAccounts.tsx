type Props = {};

const MediaAccounts = (props: Props) => {
  return (
    <div className='col-12 my-2'>
      <form data-hs-cf-bound='true'>
        <div className='row mb-2 mt-4'>
          <div className='col-md-4 col-12'>
            <select name='socialMedia' className='form-select' aria-label=''>
              <option value=''>Seçiniz*</option>
              <option value='Instagram'>Instagram</option>
              <option value='Twitter'>Twitter</option>
              <option value='LinkedIn'>LinkedIn</option>
              <option value='Behance'>Behance</option>
              <option value='Dribble'>Dribble</option>
              <option value='Github'>Github</option>
            </select>
          </div>
          <div className='col-md-8 col-12'>
            <input
              name='socialMediaUrl'
              type='text'
              placeholder='https://'
              className='form-control'
              aria-label='Text input with dropdown button'
            />
          </div>
        </div>
        <button
          className='btn btn-primary py-2 mt-1 d-inline-block mobil-btn'
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
};

export default MediaAccounts;
