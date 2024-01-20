type Props = {}

const Filter = (props: Props) => {
    return (
        <div className="col-lg-3 col-md-4 col-12 dark">
            <div className="display-only-sm"><button className="btn btn-primary mobil-btn " style={{ margin: '-1em 5% 1em 5%' }}>Filtrele</button></div>
            <div className="filter dm-none">
                <h2>Filtrele</h2>
                <hr className="mt-0" />
                <div className="accordion" id="accordiSevenxample">
                    <div className="accordion-item filter-accordion">
                        <h2 className="accordion-header" id="headingSeven"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                            <div className="title w-100"><span>Kategori</span><svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 7.5L10 12.5L15 7.5" stroke="#828282" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg></div>
                        </button></h2>
                        <div id="collapseSeven" className="accordion-collapse collapse show" aria-labelledby="headingSeven" data-bs-parent="#accordiSevenxample" style={{}}>
                            <div className="accordion-body filter-accordion-body"><input type="text" className="form-control mt-5 mb-3" placeholder="Arama" />
                                <ul>
                                    <li><a><input className="form-check-input" type="radio" name="cat" defaultValue={-1} defaultChecked /> Tüm Eğitimler</a></li>
                                    <li><a><input className="form-check-input" type="radio" name="cat" defaultValue={1} /> Ücretli Eğitimler</a></li>
                                    <li><a><input className="form-check-input" type="radio" name="cat" defaultValue={0} /> Ücretsiz Eğitimler</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion" id="accordiFivexample">
                    <div className="accordion-item filter-accordion">
                        <h2 className="accordion-header" id="headingFive"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                            <div className="title w-100"><span>Eğitimler</span><svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 7.5L10 12.5L15 7.5" stroke="#828282" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg></div>
                        </button></h2>
                        <div id="collapseFive" className="accordion-collapse collapse show" aria-labelledby="headingFive" data-bs-parent="#accordiFivexample" style={{}}>
                            <div className="accordion-body filter-accordion-body"><input type="text" className="form-control mt-5 mb-3" placeholder="Arama" />
                                <ul>
                                    <li><a><input className="form-check-input" type="radio" name="edu" defaultValue={-1} defaultChecked /> Tüm Eğitimler</a></li>
                                    <li><a><input className="form-check-input" type="radio" name="edu" defaultValue={-2} /> Dijital Gelişim</a></li>
                                    <li><a><input className="form-check-input" type="radio" name="edu" defaultValue={-4} /> Profesyonel Gelişim</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item filter-accordion">
                        <h2 className="accordion-header" id="headingThree"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                            <div className="title w-100"><span>Seviye</span><svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 7.5L10 12.5L15 7.5" stroke="#828282" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg></div>
                        </button></h2>
                        <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={{}}>
                            <div className="accordion-body filter-accordion-body"><input type="text" className="form-control mt-5 mb-3" placeholder="Arama" />
                                <ul>
                                    <li><a><input className="form-check-input" type="radio" name="level" defaultChecked />Tüm Seviyeler</a></li>
                                    <li><a><input className="form-check-input" type="radio" name="level" />Başlangıç</a></li>
                                    <li><a><input className="form-check-input" type="radio" name="level" />Orta</a></li>
                                    <li><a><input className="form-check-input" type="radio" name="level" />İleri</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion" id="accordiFourxample">
                    <div className="accordion-item filter-accordion">
                        <h2 className="accordion-header" id="headingFour"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                            <div className="title w-100"><span>Konu</span><svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 7.5L10 12.5L15 7.5" stroke="#828282" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg></div>
                        </button></h2>
                        <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordiFourxample" style={{}}>
                            <div className="accordion-body filter-accordion-body"><input type="text" className="form-control mt-5 mb-3" placeholder="Arama" />
                                <ul className="scroller">
                                    <li><a><input name="subject" className="form-check-input" type="radio" defaultChecked /> Tüm Konular</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> C#</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Çeşitlilik ve Kapsayıcılık</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Başarı ve Sonuç Odaklılık</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Takım Bilinci</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Etkili İletişim ve İlişki Yönetimi</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Karar Verme</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Profesyonellik</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Kişisel Motivasyon</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Problem Çözme</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Yenilikçilik ve Yaratıcılık</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Verimlilik ve Zaman Yönetimi</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Müzakere Becerileri</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Duygusal Zeka</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Çevik Düşünme</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Esneklik</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Sürekli Gelişim</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Ticari Odaklılık</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Çatışma Çözme</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Azim ve Direnç</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Proaktif Olma</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Kariyer Yönetimi</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Stres Yönetimi</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Kritik Düşünme</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Kişisel Güç ve Güvenilirlik</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Özdisiplin</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Programlama</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Yazılım Geliştirme</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Finansta Mükemmellik</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> IK' da Mükemmellik</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Bilişim Teknolojileri</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> İş İngilizcesi</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Müşteri Duyarlılık</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Proje Yönetimi</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Ekip Yönetimi</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Stratejik Düşünme</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Liderlikte İletişim</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> UI/UX Tasarımı</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> VUCA Dünyası</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Dijital Dünyada Sosyal Medya İletişimi</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Büyük Veri</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Dijital Dönüşüm</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Dijital Okuryazarlık</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Sürdürülebilirlik</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Mutluluk</a></li>
                                    <li><a><input name="subject" className="form-check-input" type="radio" /> Kişisel Gelişim</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion" id="accordiTwoxample">
                    <div className="accordion-item filter-accordion">
                        <h2 className="accordion-header" id="headingTwo"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            <div className="title w-100"><span>Yazılım Dili</span><svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 7.5L10 12.5L15 7.5" stroke="#828282" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg></div>
                        </button></h2>
                        <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordiTwoxample" style={{}}>
                            <div className="accordion-body filter-accordion-body"><input type="text" className="form-control mt-5 mb-3" placeholder="Arama" />
                                <ul>
                                    <li><a><input name="language" className="form-check-input" type="radio" defaultChecked />Tüm Diller</a></li>
                                    <li><a><input name="language" className="form-check-input" type="radio" />ASPNET</a></li>
                                    <li><a><input name="language" className="form-check-input" type="radio" />Bootsrap</a></li>
                                    <li><a><input name="language" className="form-check-input" type="radio" />SASS</a></li>
                                    <li><a><input name="language" className="form-check-input" type="radio" />JavaScript</a></li>
                                    <li><a><input name="language" className="form-check-input" type="radio" />JQuery</a></li>
                                    <li><a><input name="language" className="form-check-input" type="radio" />AJAX</a></li>
                                    <li><a><input name="language" className="form-check-input" type="radio" />SQL</a></li>
                                    <li><a><input name="language" className="form-check-input" type="radio" />C#</a></li>
                                    <li><a><input name="language" className="form-check-input" type="radio" />HTML</a></li>
                                    <li><a><input name="language" className="form-check-input" type="radio" />CSS</a></li>
                                    <li><a><input name="language" className="form-check-input" type="radio" />Javascript</a></li>
                                    <li><a><input name="language" className="form-check-input" type="radio" />React</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item filter-accordion">
                        <h2 className="accordion-header" id="headingOne"><button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <div className="title w-100"><span>Eğitmen</span><svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 7.5L10 12.5L15 7.5" stroke="#828282" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg></div>
                        </button></h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{}}>
                            <div className="accordion-body filter-accordion-body"><input type="text" className="form-control mt-5 mb-3" placeholder="Arama" />
                                <ul>
                                    <li><a><input className="form-check-input" type="radio" name="instructor" defaultValue="Tüm Eğitmenler" defaultChecked />Tüm Eğitmenler</a></li>
                                    <li><a><input className="form-check-input" type="radio" name="instructor" defaultValue="Eğitmen Dojo" />Eğitmen Dojo</a></li>
                                    <li><a><input className="form-check-input" type="radio" name="instructor" defaultValue="Roiva Eğitmen" />Roiva Eğitmen</a></li>
                                    <li><a><input className="form-check-input" type="radio" name="instructor" defaultValue="Veli Bahçeci" />Veli Bahçeci</a></li>
                                    <li><a><input className="form-check-input" type="radio" name="instructor" defaultValue="İrem Balcı" />İrem Balcı</a></li>
                                    <li><a><input className="form-check-input" type="radio" name="instructor" defaultValue="Cem Bayraktaroğlu" />Cem Bayraktaroğlu</a></li>
                                    <li><a><input className="form-check-input" type="radio" name="instructor" defaultValue="Ahmet Çetinkaya" />Ahmet Çetinkaya</a></li>
                                    <li><a><input className="form-check-input" type="radio" name="instructor" defaultValue="Denizhan Dursun" />Denizhan Dursun</a></li>
                                    <li><a><input className="form-check-input" type="radio" name="instructor" defaultValue="Halit Enes Kalaycı" />Halit Enes Kalaycı</a></li>
                                    <li><a><input className="form-check-input" type="radio" name="instructor" defaultValue="Kadir Murat Başaren" />Kadir Murat Başaren</a></li>
                                    <li><a><input className="form-check-input" type="radio" name="instructor" defaultValue="Gürkan İlişen" />Gürkan İlişen</a></li>
                                    <li><a><input className="form-check-input" type="radio" name="instructor" defaultValue="Engin Demiroğ" />Engin Demiroğ</a></li>
                                    <li><a><input className="form-check-input" type="radio" name="instructor" defaultValue="Serkan Tekin" />Serkan Tekin</a></li>
                                    <li><a><input className="form-check-input" type="radio" name="instructor" defaultValue="Aykut Baştuğ" />Aykut Baştuğ</a></li>
                                    <li><a><input className="form-check-input" type="radio" name="instructor" defaultValue="Semih Karduz" />Semih Karduz</a></li>
                                    <li><a><input className="form-check-input" type="radio" name="instructor" defaultValue="Barbaros Ciga" />Barbaros Ciga</a></li>
                                    <li><a><input className="form-check-input" type="radio" name="instructor" defaultValue="Mehmet Emin Kortak" />Mehmet Emin Kortak</a></li>
                                    <li><a><input className="form-check-input" type="radio" name="instructor" defaultValue="Ali Seyhan" />Ali Seyhan</a></li>
                                    <li><a><input className="form-check-input" type="radio" name="instructor" defaultValue="Kader Yavuz" />Kader Yavuz</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter