import "./MediaAccounts.css"

type Props = {}

const MediaAccounts = (props: Props) => {
  return (
    <main>
  <section className="py-6 bg-white">
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-3 mb-8 mb-lg-0">
          <div className="p-2 py-4 mobile-sidebar"><a className="btn mb-2 text-start w-100 sidebar-link " href="#"><span className="personel-informations" /><span className="sidebar-text">Kişisel Bilgilerim</span></a><a className="btn mb-2 text-start w-100  sidebar-link " href="#"><span className="experience" /><span className="sidebar-text">Deneyimlerim</span></a><a className="btn mb-2 text-start w-100  sidebar-link " href="#"><span className="educations" /><span className="sidebar-text">Eğitim Hayatım</span></a><a className="btn mb-2 text-start w-100  sidebar-link " href="#"><span className="abilities" /><span className="sidebar-text">Yetkinliklerim</span></a><a className="btn mb-2 text-start w-100  sidebar-link " href="#"><span className="certificates" /><span className="sidebar-text">Sertifikalarım</span></a><a className="btn mb-2 text-start w-100  sidebar-link active-edit" href="#"><span className="languages" /><span className="sidebar-text">Medya Hesaplarım</span></a><a className="btn mb-2 text-start w-100  sidebar-link " href="#"><span className="languages2" /><span className="sidebar-text">Yabancı Dillerim</span></a><a className="btn mb-2 text-start w-100  sidebar-link " href="#"><span className="settings" /><span className="sidebar-text">Ayarlar</span></a></div>
        </div>
        <div className="col-12 col-lg-9" style={{minHeight: '90vh'}}>
          <div className="col-12 my-2">
            <form data-hs-cf-bound="true">
              <div className="row mb-2 mt-4">
                <div className="col-md-4 col-12"><select name="socialMedia" className="form-select" aria-label="">
                    <option value="">Seçiniz*</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Twitter">Twitter</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Behance">Behance</option>
                    <option value="Dribble">Dribble</option>
                    <option value="Github">Github</option>
                  </select></div>
                <div className="col-md-8 col-12"><input name="socialMediaUrl" type="text" placeholder="https://" className="form-control" aria-label="Text input with dropdown button" /></div>
              </div><button className="btn btn-primary py-2 mt-1 d-inline-block mobil-btn" style={{backgroundColor:'#a3f', borderRadius:'38px',border:'none'}}><b>Kaydet</b></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

  )
}

export default MediaAccounts;