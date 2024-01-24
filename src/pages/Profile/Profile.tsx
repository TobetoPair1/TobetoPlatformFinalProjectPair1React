import './Profile.css';
type Props = {}

const Profile = (props: Props) => {
  return (
    <main>
  <div className="container" style={{minHeight: '100vh'}}>
    <div className="row " style={{marginTop: '1.5em'}}>
      <div className="d-flex justify-content-end"><span className="cv-edit-icon" />
        <div className="dropdown"><button type="button" id="dropdown-basic" aria-expanded="false" className="cv-share-icon  dropdown-toggle btn btn-primary" style={{backgroundColor: 'transparent', border: 'none'}} /></div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4 col-12">
        <div className="row">
          <div className="col-12">
            <div className="cv-box">
              <div className="cv-pp ">
                <div className="area">
                  <ul className="circles">
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
                </div><img className="cv-pp-img rounded-circle" style={{width: '128px', height: '128px', objectFit: 'cover'}} />
              </div>
              <div className="cv-info cv-padding">
                <div className="info-box">
                  <div className="info-icon name" />
                  <div className="info-text"><span className="header">Ad Soyad</span><span className="text"></span></div>
                </div>
                <div className="info-box">
                  <div className="info-icon date" />
                  <div className="info-text"><span className="header">Doğum Tarihi</span><span className="text"></span></div>
                </div>
                <div className="info-box">
                  <div className="info-icon mail" />
                  <div className="info-text"><span className="header">E-Posta Adresi</span><span className="text"></span></div>
                </div>
                <div className="info-box">
                  <div className="info-icon phone" />
                  <div className="info-text"><span className="header">Telefon Numarası</span><span className="text"></span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="cv-box cv-padding">
              <div className="cv-box-header"><span>Hakkımda</span>
                <hr />
              </div>
              <div>Kendini kısaca anlat</div>
            </div>
          </div>
          <div className="col-12">
            <div className="cv-box cv-padding">
              <div className="cv-box-header">
                <div className="d-flex justify-content-between"><span>Yetkinliklerim</span></div>
                <hr />
              </div>
              <div>
                <div>Henüz bir yetkinlik eklemedin.</div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="cv-box cv-padding">
              <div className="cv-box-header">
                <div className="d-flex justify-content-between"><span>Yabancı Dillerim</span></div>
                <hr />
              </div>
              <div className="my-langs">
                <div>Henüz bir yabancı dil eklemedin.</div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="cv-box cv-padding">
              <div className="cv-box-header"><span>Sertifikalarım</span>
                <hr />
              </div>
              <div className="row">
                <div>Henüz bir sertifika yüklemedin.</div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="cv-box cv-padding">
              <div className="cv-box-header"><span>Medya Hesaplarım</span>
                <hr />
              </div>
              <div className="cv-social-media">
                <div>Henüz bir hesap eklemedin.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8 col-12">
        <div className="row">
          <div className="col-12">
            <div className="cv-box cv-padding">
              <div className="cv-box-header">
                <div className="d-flex justify-content-between"><span>Tobeto İşte Başarı Modelim</span><span className="cv-see-icon" /></div>
                <hr />
              </div>
              <div className="model-padding">
                <div>
                  <div className="row">
                    <div className="col-md-6 col-12 my-3">
                      <div className="chartjs-size-monitor">
                        <div className="chartjs-size-monitor-expand">
                          <div/>
                        </div>
                        <div className="chartjs-size-monitor-shrink">
                          <div/>
                        </div>
                      </div><canvas height={480} width={668} style={{display: 'block', height: '240px', width: '334px'}} className="chartjs-render-monitor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="cv-box cv-padding">
              <div className="cv-box-header">
                <div className="d-flex justify-content-between"><span>Tobeto Seviye Testlerim</span></div>
                <hr />
              </div>
              <div className="row g-4">
                <div className="envantoryList">
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="cv-box cv-padding">
              <div className="cv-box-header">
                <div className="d-flex justify-content-between"><span>Yetkinlik Rozetlerim</span></div>
                <hr />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="cv-box cv-padding">
              <div className="cv-box-header"><span>Aktivite Haritam</span>
                <hr />
              </div><svg className="react-calendar-heatmap" viewBox="0 0 582 76">
                <g transform="translate(0, 0)" className="react-calendar-heatmap-month-labels" />
                <g transform="translate(0, 0)" className="react-calendar-heatmap-all-weeks">
                  <g transform="translate(0, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(11, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(22, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(33, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(44, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(55, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(66, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(77, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(88, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(99, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(110, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(121, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(132, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(143, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(154, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(165, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(176, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(187, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(198, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(209, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(220, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(231, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(242, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(253, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(264, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(275, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(286, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(297, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(308, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(319, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(330, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(341, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(352, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(363, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(374, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(385, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(396, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(407, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(418, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(429, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(440, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(451, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(462, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(473, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(484, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(495, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(506, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(517, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(528, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(539, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(550, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(561, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                  <g transform="translate(572, 0)" className="react-calendar-heatmap-week">
                    <rect width={10} height={10} x={0} y={0} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={11} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={22} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={33} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={44} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={55} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                    <rect width={10} height={10} x={0} y={66} className="empty-data" data-tip="Herhangi bir aktiviteniz yok : 0" >
                      <title />
                    </rect>
                  </g>
                </g>
                <g transform="translate(10, 0)" className="react-calendar-heatmap-weekday-labels" />
              </svg>
              <div className="__react_component_tooltip ta195e4d5-28d5-4085-9820-aa9d936cb57e place-bottom type-dark" id="ta195e4d5-28d5-4085-9820-aa9d936cb57e" data-id="tooltip" />
              <div className="hm-colors"><span id="hm1" className="hm1-color" /><span id="hm1" className="hm5-color" /><span id="hm1" className="hm4-color" /><span id="hm1" className="hm3-color" /><span id="hm1" className="hm2-color" /></div>
            </div>
          </div>
          <div className="col-12">
            <div className="cv-box cv-padding">
              <div className="cv-box-header">
                <div className="d-flex justify-content-between"><span>Eğitim Hayatım ve Deneyimlerim</span></div>
                <hr />
              </div>
              <div>Henüz bir eğitim ve deneyim bilgisi eklemedin.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

  )
}

export default Profile;