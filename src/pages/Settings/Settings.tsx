import './Settings.css';

type Props = {}

const Settings = (props: Props) => {
  return (
    <main>
  <section className="py-6 bg-white">
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-3 mb-8 mb-lg-0">
          <div className="p-2 py-4 mobile-sidebar"><a className="btn mb-2 text-start w-100 sidebar-link " href="#"><span className="personel-informations" /><span className="sidebar-text">Kişisel Bilgilerim</span></a><a className="btn mb-2 text-start w-100  sidebar-link " href="#"><span className="experience" /><span className="sidebar-text">Deneyimlerim</span></a><a className="btn mb-2 text-start w-100  sidebar-link " href="#"><span className="educations" /><span className="sidebar-text">Eğitim Hayatım</span></a><a className="btn mb-2 text-start w-100  sidebar-link " href="#"><span className="abilities" /><span className="sidebar-text">Yetkinliklerim</span></a><a className="btn mb-2 text-start w-100  sidebar-link " href="#"><span className="certificates" /><span className="sidebar-text">Sertifikalarım</span></a><a className="btn mb-2 text-start w-100  sidebar-link " href="#"><span className="languages" /><span className="sidebar-text">Medya Hesaplarım</span></a><a className="btn mb-2 text-start w-100  sidebar-link " href="#"><span className="languages2" /><span className="sidebar-text">Yabancı Dillerim</span></a><a className="btn mb-2 text-start w-100  sidebar-link active-edit" href="#"><span className="settings" /><span className="sidebar-text">Ayarlar</span></a></div>
        </div>
        <div className="col-12 col-lg-9" style={{minHeight: '90vh'}}>
          <form action="#" data-hs-cf-bound="true">
            <div className="row mb-2">
              <div className="col-12 col-md-4 mb-6"><label className="input-label-text">Eski Şifre*</label><input name="currentPassword" className="form-control tobeto-input" type="password" placeholder="Eski Şifre" /></div>
              <div className="col-12 col-md-4 mb-6"><label className="input-label-text">Yeni Şifre*</label><input name="password" className="form-control tobeto-input" type="password" placeholder="Yeni Şifre" /></div>
              <div className="col-12 col-md-4 mb-6"><label className="input-label-text">Yeni Şifre Tekrar*</label><input name="passwordConfirmation" className="form-control tobeto-input" type="password" placeholder="Yeni Şifre Tekrar" /></div>
            </div>
          </form>
          <div className="col 12">
            <div className="row">
              <div className="col-12 col-md-6"><button className="btn btn-primary py-2 mb-3 w-100" style={{backgroundColor:'#a3f', borderRadius:'38px', border:'none'}}>Şifre Değiştir</button></div>
              <div className="col-md-6 col-12"><button className="btn btn-danger mb-2  w-100" style={{backgroundColor:'#f64', borderRadius:'38px', border:'none'}}>Üyeliği Sonlandır</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

  )
}
export default Settings;