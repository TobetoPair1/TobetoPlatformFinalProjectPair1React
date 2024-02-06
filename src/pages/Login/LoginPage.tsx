
import { Link } from 'react-router-dom'
import LoginForm from '../../Components/LoginForm/LoginForm'
import './Login.css'

type Props = {}

const LoginPage = (props: Props) => {    
  return (
    <section className="position-relative py-lg-20 bg-light-light py-sm-10">
    <div className="container pt-20">
        <div className="row equal-col">
            <div className="btn-rainbow-card mx-auto text-center col-md-6 col-12">
                <div className="py-4 px-md-12 text-center ">
                    <div className="d-flex flex-column align-items-center" ><span style={{display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }}><span style={{display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', maxWidth: '100%' }}><img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27200%27%20height=%27120%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px' }} /></span><img alt="Tobeto Logo " src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg" decoding="async" data-nimg="intrinsic" className="mx-auto" style={{ position: 'absolute', inset: '0px', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg  1x,https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg  2x" /></span></div>
                    <LoginForm/>
                    <div className="col-12 mt-6"><label><small>Henüz üye değil misin?<Link className="text-decoration-none text-muted fw-bold" to="/kayit-ol"> Kayıt Ol</Link></small></label></div>
                </div>
            </div>
            <div className="col-md-6 col-12  btn-rainbow-card-ik ">
                <div className="ik-banner-big h-100"><span style={{display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }}><span style={{display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', maxWidth: '100%' }}><img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27200%27%20height=%27120%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px' }} /></span><img alt="İstanbul Kodluyor Logo " src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg" decoding="async" data-nimg="intrinsic" style={{ position: 'absolute', inset: '0px', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg  1x,https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg  2x" /></span><span className="greenLine2" />
                    <div><span className="text-blue fw-bold">Aradığın <span style={{ color: 'rgb(0, 176, 120)' }}>&nbsp;"</span>İş<span style={{ color: 'rgb(0, 176, 120)' }}>"&nbsp;</span> Burada!</span></div>
                    <div className="d-flex w-100 flex-column justify-content-center align-items-center"><button className="btn d-md-inline-block mt-5 btn-darkblue2"
                    style={{backgroundColor:'#1e0f41', color:'#0fcdfa', minWidth: '200px',
                    lineHeight: '18px', borderRadius:'20px', fontWeight:'bold'
                    }}
                    >Başvur</button></div>
                </div>
            </div>
        </div>
    </div>
</section> 
  )
}

export default LoginPage