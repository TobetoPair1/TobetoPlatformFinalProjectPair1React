import './Codecademy.css';

const Codecademy = () => (
  <main className='bg-front-dark'>
    <div
      className='modal fade'
      id='TobetoVideo'
      data-bs-backdrop='static'
      aria-hidden='true'
      aria-labelledby='TobetoVideoLabel'
      tabIndex={-1}
    >
      <div className='modal-dialog modal-lg modal-dialog-centered'>
        <div className='modal-content back-none border-0'>
          <button
            type='button'
            className='btn-close btn-close-modal pause-video'
            data-bs-dismiss='modal'
            aria-label='Close'
          >
            <svg
              width={22}
              height={22}
              viewBox='0 0 22 22'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M16.5 5.5L5.5 16.5'
                stroke='white'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M5.5 5.5L16.5 16.5'
                stroke='white'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
          <div className='modal-body p-0'>
            <video
              width='100%'
              className='modal-height youtube-video'
              height={240}
              controls
            >
              <source
                src='https://s3.cloud.ngn.com.tr/tobeto/tobeto_final_v2_5c7893fbe0.mp4'
                type='video/mp4'
              />
              <source src='movie.ogg' type='video/ogg' />
            </video>
          </div>
        </div>
      </div>
    </div>
    <section className='py-24'>
      <div className='position-relative'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <p className='ca-header'>
                Kodlama, pek çok olasılığı içinde barındıran bir dünya. <br />{' '}
                Başlamak için tek gereken ise merak ve öğrenme dürtüsü.
              </p>
            </div>
          </div>
          <div className='row '>
            <div className='ca-content1'>
              <div>
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'inline-block',
                    overflow: 'hidden',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
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
                      border: 0,
                      margin: 0,
                      padding: 0,
                      maxWidth: '100%',
                    }}
                  >
                    <img
                      style={{
                        display: 'block',
                        maxWidth: '100%',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                      }}
                      alt=''
                      aria-hidden='true'
                      src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27225%27%20height=%27225%27/%3e'
                    />
                  </span>
                  <img
                    alt='codecademy'
                    src='https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fca-1.cf0e22ca.png&w=640&q=75'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      boxSizing: 'border-box',
                      padding: 0,
                      border: 'none',
                      margin: 'auto',
                      display: 'block',
                      width: 0,
                      height: 0,
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                    }}
                    srcSet='https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fca-1.cf0e22ca.png&w=256&q=75  1x,https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fca-1.cf0e22ca.png&w=640&q=75  2x'
                  />
                </span>
              </div>
              <div>
                <p>
                  Dünya çapında milyonlarca insanın günümüz dijital dünyasında
                  başarılı olmak için ihtiyaç duyduğu becerileri eğlenceli bir
                  şekilde edinmelerine olanak sağlayan{' '}
                  <a href='https://www.codecademy.com/'>Codecademy* </a>
                  içerikleri şimdi Tobeto deneyimi ile sana daha yakın!
                </p>
                <p className='casub-text'>
                  *Codecademy; 2011'den beri, 50 milyondan fazla üyenin kendi
                  için yeni bir yaşam ve kariyer geliştirmesine, projelerini
                  hayata geçirmesine yardımcı olan bir kodlama eğitimi
                  platformudur.
                </p>
              </div>
            </div>
          </div>
          <div className='row mt-8'>
            <div className='col-12'>
              <p className='ca-header-left '>Codecademy &amp; Tobeto </p>
              <p className='ca-text'>
                Codecademy'nin tüm kaynaklarına Tobeto aboneliği ile
                erişebilirsin.
                <br />
                <br />
                Aboneliğin sağlayacağı Türkçe <b>canlı dersler</b>, alanında
                uzman eğitmenler ve öğrenmeni kolaylaştıracak <b>mentör</b>{' '}
                desteğiyle ile öğrenmeni destekleyici kaynaklarımız bu süreci
                kolaylaştırmak ve hızlandırmak için senin yanında!
              </p>
              <button className='btn btn-primary'>Hemen Abone Ol!</button>
            </div>
          </div>
        </div>
        <div className='w-100 mt-20' style={{ backgroundColor: '#10162F' }}>
          <div className='container '>
            <div className='row'>
              <div className=' cagif'>
                <div className=' '>
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'inline-block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
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
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: '100%',
                      }}
                    >
                      <img
                        style={{
                          display: 'block',
                          maxWidth: '100%',
                          width: 'initial',
                          height: 'initial',
                          background: 'none',
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                        }}
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271216%27%20height=%27684%27/%3e'
                      />
                    </span>
                    <img
                      src='https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcacode.e3ffebc4.gif&w=3840&q=75'
                      decoding='async'
                      data-nimg='intrinsic'
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: 'border-box',
                        padding: 0,
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: 0,
                        height: 0,
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                      }}
                      srcSet='https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcacode.e3ffebc4.gif&w=1920&q=75  1x,https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcacode.e3ffebc4.gif&w=3840&q=75  2x'
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row py-20'>
            <div className='teams-vector' />
            <span className='ca-header-left '>
              Şimdi <br /> Codecademy'nin <br /> zengin kataloğu ile :
            </span>
            <p className='ca-text mt-10'>
              Gerçek zamanlı, kendi hızında kod yaz, anında geri bildirim al,
              etkileşimle yaparak öğren. Öğrenme deneyimine destek için
              makaleler, videolar ve projelerden faydalan.
            </p>
            <button className='btn btn-primary mt-10 w-auto   ms-3'>
              Hemen Abone Ol!
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Codecademy;
