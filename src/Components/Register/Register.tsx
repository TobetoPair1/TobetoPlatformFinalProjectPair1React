import React from 'react';
import "../Register/Register.css"

const Register: React.FC = () => {
    return (
        <section className="position-relative py-lg-20 bg-light-light py-sm-10">
            <div className="container pt-20">
                <div className="row equal-col">
                    <div className="col-md-6 col-12 btn-rainbow-card">
                        <div className="mx-auto text-center">
                            <div className="py-4 px-md-12 px-0 text-center">
                                <div className="cursor-pointer">
                                    <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}>
                                        <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
                                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27200%27%20height=%27120%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }} />
                                        </span>
                                        <img alt="tobeto Logo " srcSet="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg  1x,https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg  2x" src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg" decoding="async" data-nimg="intrinsic" style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                                    </span>
                                </div>
                                <form data-hs-cf-bound="true">
                                    <h3 className="mt-6 mb-8">Hemen Kayıt Ol</h3>
                                    <input name="firstName" className="form-control mt-6" type="text" placeholder="Ad*" />
                                    <input name="lastName" className="form-control mt-6" type="text" placeholder="Soyad*" />
                                    <input name="email" className="form-control mt-6" type="email" placeholder="E-Posta*" />
                                    <input name="password" className="form-control mt-6" type="password" placeholder="Şifre*" />
                                    <input name="passwordAgain" className="form-control mt-6" type="password" placeholder="Şifre Tekrar*" />
                                </form>
                                <button disabled className="btn btn-primary w-100 mt-6">Kayıt Ol</button>
                                <div className="col-12 mt-6">
                                    <label><small>Zaten bir hesabın var mı?<a className="text-decoration-none text-muted fw-bold" href="/giris"> Giriş Yap</a></small></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 btn-rainbow-card-ik">
                        <div className="ik-banner-big h-100">
                            <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}>
                                <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
                                    <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27200%27%20height=%27120%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }} />
                                </span>
                                <img alt="İstanbul Kodluyor Logo " srcSet="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg  1x,https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg  2x" src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg" decoding="async" data-nimg="intrinsic" style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                            </span>
                            <div className="d-flex">
                                <span></span>
                                <a className="btn d-md-inline-block mt-5 btn-darkblue2" href="/istanbul-kodluyor">Başvur</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
