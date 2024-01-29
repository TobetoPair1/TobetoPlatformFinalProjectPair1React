import "./EducationLife.css"
type Props = {}

const EducationLife = (props: Props) => {
  return (
    <main>
  <section className="py-6 bg-white">
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-3 mb-8 mb-lg-0">
          <div className="p-2 py-4 mobile-sidebar"><a className="btn mb-2 text-start w-100 sidebar-link " href="#"><span className="personel-informations" /><span className="sidebar-text">Kişisel Bilgilerim</span></a><a className="btn mb-2 text-start w-100  sidebar-link " href="#"><span className="experience" /><span className="sidebar-text">Deneyimlerim</span></a><a className="btn mb-2 text-start w-100  sidebar-link active-edit" href="#"><span className="educations" /><span className="sidebar-text">Eğitim Hayatım</span></a><a className="btn mb-2 text-start w-100  sidebar-link " href="#"><span className="abilities" /><span className="sidebar-text">Yetkinliklerim</span></a><a className="btn mb-2 text-start w-100  sidebar-link " href="#"><span className="certificates" /><span className="sidebar-text">Sertifikalarım</span></a><a className="btn mb-2 text-start w-100  sidebar-link " href="#"><span className="languages" /><span className="sidebar-text">Medya Hesaplarım</span></a><a className="btn mb-2 text-start w-100  sidebar-link " href="#"><span className="languages2" /><span className="sidebar-text">Yabancı Dillerim</span></a><a className="btn mb-2 text-start w-100  sidebar-link " href="#"><span className="settings" /><span className="sidebar-text">Ayarlar</span></a></div>
        </div>
        <div className="col-12 col-lg-9" style={{minHeight: '90vh'}}>
          <form data-hs-cf-bound="true">
            <div className="row mb-2">
              <div className="col-12 col-md-6 mb-6"><label className="input-label-text">Eğitim Durumu*</label><select name="EducationStatus" className="form-select tobeto-input" aria-label="">
                  <option value=''>Seviye Seçiniz</option>
                  <option value="Lisans">Lisans</option>
                  <option value="Ön Lisans">Ön Lisans</option>
                  <option value="Yüksek Lisans">Yüksek Lisans</option>
                  <option value="Doktora">Doktora</option>
                </select></div>
              <div className="col-12 col-md-6 mb-6"><label className="input-label-text">Üniversite*</label><input name="University" className="form-control tobeto-input" type="text" placeholder="Kampüs 365" /></div>
              <div className="col-12 col-md-6 mb-6"><label className="input-label-text">Bölüm*</label><input name="Department" className="form-control tobeto-input" type="text" placeholder="Yazılım" /></div>
              <div className="col-12 col-md-6 mb-6"><label className="input-label-text">Başlangıç Yılı*</label>
                <div className="react-datepicker-wrapper">
                  <div className="react-datepicker__input-container "><span role="alert" aria-live="polite" className="react-datepicker__aria-live"/><input type="text" placeholder="Başlangıç Yılınızı Seçiniz" className="form-control tobeto-input"/></div>
                </div>
              </div>
              <div className="col-12 col-md-6 mb-6"><label className="input-label-text">Mezuniyet Yılı*</label>
                <div className="react-datepicker-wrapper">
                  <div className="react-datepicker__input-container "><span role="alert" aria-live="polite" className="react-datepicker__aria-live"/><input type="text" placeholder="Mezuniyet Yılınızı Seçiniz" disabled className="form-control tobeto-input"/></div>
                </div><label className="d-flex mt-3 text-start"><input name="checkbox" className="form-check-input me-4" type="checkbox" /><small className="text-muted">Devam Ediyorum</small></label>
              </div>
            </div><button className="btn btn-primary py-2 mb-3 d-inline-block mobil-btn"style={{backgroundColor:'#a3f', borderRadius:'38px',border:'none'}}><b>Kaydet</b></button>
          </form>
          <div className="col-12" />
        </div>
      </div>
    </div>
  </section>
</main>

  )
}

export default EducationLife; 