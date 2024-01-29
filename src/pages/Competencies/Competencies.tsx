import "./Competencies.css"
type Props = {}

const Competencies = (props: Props) => {
  return (
    <main>
  <section className="py-6 bg-white">
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-3 mb-8 mb-lg-0">
          <div className="p-2 py-4 mobile-sidebar"><a className="btn mb-2 text-start w-100 sidebar-link " href="#"><span className="personel-informations" /><span className="sidebar-text">Kişisel Bilgilerim</span></a><a className="btn mb-2 text-start w-100  sidebar-link " href="#"><span className="experience" /><span className="sidebar-text">Deneyimlerim</span></a><a className="btn mb-2 text-start w-100  sidebar-link " href="#"><span className="educations" /><span className="sidebar-text">Eğitim Hayatım</span></a><a className="btn mb-2 text-start w-100  sidebar-link active-edit" href="#"><span className="abilities" /><span className="sidebar-text">Yetkinliklerim</span></a><a className="btn mb-2 text-start w-100  sidebar-link " href="#"><span className="certificates" /><span className="sidebar-text">Sertifikalarım</span></a><a className="btn mb-2 text-start w-100  sidebar-link " href="#"><span className="languages" /><span className="sidebar-text">Medya Hesaplarım</span></a><a className="btn mb-2 text-start w-100  sidebar-link " href="#"><span className="languages2" /><span className="sidebar-text">Yabancı Dillerim</span></a><a className="btn mb-2 text-start w-100  sidebar-link " href="#"><span className="settings" /><span className="sidebar-text">Ayarlar</span></a></div>
        </div>
        <div className="col-12 col-lg-9" style={{minHeight: '90vh'}}>
          <div className="row mb-2">
            <div className="col-12 mb-6"><label className="input-label-text">Yetkinlik</label>
              <div className=" css-b62m3t-container"><span id="react-select-4-live-region" className="css-7pg0cj-a11yText" /><span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText" />
                <div className=" css-13cymwt-control">
                  <div className=" css-hlgwow">
                    <div className=" css-1jqq78o-placeholder" id="react-select-4-placeholder">Seçiniz</div>
                    <div className=" css-19bb58m" data-value><input autoCapitalize="none" autoComplete="off" autoCorrect="off" id="react-select-4-input" spellCheck="false" tabIndex={0} type="text" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" aria-describedby="react-select-4-placeholder" style={{color: 'inherit', background: '0px center', opacity: 1, width: '100%', gridArea: '1 / 2', font: 'inherit', minWidth: '2px', border: '0px', margin: '0px', outline: '0px', padding: '0px'}} /></div>
                  </div>
                  <div className=" css-1wy0on6"><span className=" css-1u9des2-indicatorSeparator" />
                    <div className=" css-1xc3v61-indicatorContainer" aria-hidden="true"><svg height={20} width={20} viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg">
                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
                      </svg></div>
                  </div>
                </div>
              </div>
            </div>
          </div><button className="btn btn-primary py-2 mb-3 d-inline-block mobil-btn">Kaydet</button>
          <div className="col-12" />
        </div>
      </div>
    </div>
  </section>
</main>

  )
}

export default Competencies;