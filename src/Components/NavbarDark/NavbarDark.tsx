import "../NavbarDark/NavbarDark.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img
        src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=256&q=75"
        alt="Tobeto"
        className="tobeto-img"
      />
      <ul>
        <li>
          <a href="#" className="nav-item">
            Biz Kimiz?
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav-item"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Neler Sunuyoruz?
          </a>
        </li>
        <li>
          <a href="" className="nav-item">
            Katalog
          </a>
        </li>
        <li>
          <a href="/codecademy" className="nav-item">
            Codecademy
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav-item"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Tobeto'da Bu Ay
          </a>
        </li>
      </ul>
      <div className="d-none d-xl-block">
        <a className="btn2 border-light text-light mx-4" href="/giris">
          Giriş Yap
        </a>
        <a className="btn2 mx-4 btn-rainbow" href="/kayit-ol">
          Ücretsiz Üye Ol
        </a>
      </div>
    </div>
  );
};

export default Navbar;
