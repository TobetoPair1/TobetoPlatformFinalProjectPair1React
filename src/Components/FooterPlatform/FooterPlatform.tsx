import { Link } from 'react-router-dom'

type Props = {}

const FooterPlatform = (props: Props) => {
  return (
    <section className="bg-footerpurple py-5">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-6 col-lg-4 mb-lg-0 my-4"><Link className="d-block mobile-text-center navbar-brand" to="#"><span style={{boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%'}}><span style={{boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', maxWidth: '100%'}}><img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27100%27%20height=%2721%27/%3e" style={{display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px'}} /></span><img alt="" srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=128&q=75  1x,https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=256&q=75  2x" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=256&q=75" decoding="async" data-nimg="intrinsic" style={{position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%'}} /></span></Link></div>
            <div className="col-6 col-lg-8 my-4">
              <ul className="list-unstyled mb-0 d-flex flex-wrap align-items-center justify-content-center justify-content-lg-end">
                <li className=" mb-lg-0"><Link className="btn btn-light-light" to="#">Bize Ulaşın</Link></li>
              </ul>
            </div>
            <div className="col-12">
              <p className="d-lg-none small text-white text-center">© 2022 Tobeto </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default FooterPlatform