import './Banner.css';

const Navbar = () => {
  return (
    <div className="banner">
      <img src="https://tobeto.com/_next/static/media/ik-logo-light.ace655db.svg" alt="İstanbul Kodluyor" className="sol-resim" />
      <div className="orta-metin">Aradığın <span className='tırnak'>"</span>İş<span className='tırnak'>"</span> Burada!</div>
      <button className="basvur-buton">Başvur</button>
    </div>
  );
}

export default Navbar;
