import "../NavbarDark/NavbarDark.css";

const NavbarDark = () => {
  return (
          <section className="web-header">
            <nav className="navbar bg-web navbar-expand-xxl w-100 m-0 z-index-999 position-fixed border-0 px-3 py-5">
              <div className="container-fluid">
                <a href="#">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: "0px",
                      margin: "0px",
                      padding: "0px",
                      position: "relative",
                      maxWidth: "100%",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        maxWidth: "100%",
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27165%27%20height=%2734%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                        }}
                      />
                    </span>
                    <img
                      alt=""
                      srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=256&q=75  1x,https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=384&q=75  2x"
                      src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=384&q=75"
                      decoding="async"
                      data-nimg="intrinsic"
                      style={{
                        position: "absolute",
                        inset: "0px",
                        boxSizing: "border-box",
                        padding: "0px",
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: "0px",
                        height: "0px",
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                      }}
                    />
                  </span>
                </a>
                <button
                  className="btn p-0 d-xl-none "
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasExample"
                  aria-controls="offcanvasExample"
                >
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.5 7C3.22386 7 3 6.77614 3 6.5C3 6.22386 3.22386 6 3.5 6H20.5C20.7761 6 21 6.22386 21 6.5C21 6.77614 20.7761 7 20.5 7H3.5ZM3.5 12C3.22386 12 3 11.7761 3 11.5C3 11.2239 3.22386 11 3.5 11H20.5C20.7761 11 21 11.2239 21 11.5C21 11.7761 20.7761 12 20.5 12H3.5ZM3 16.5C3 16.7761 3.22386 17 3.5 17H20.5C20.7761 17 21 16.7761 21 16.5C21 16.2239 20.7761 16 20.5 16H3.5C3.22386 16 3 16.2239 3 16.5Z"
                      fill="#fff"
                    />
                  </svg>
                </button>
                <ul className="d-none d-xl-flex flex-row justify-content-center navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link " href="/hakkimizda">
                      Biz Kimiz?
                    </a>
                  </li>
                  <li className="nav-item dropdown tbt-dropdown">
                    <a
                      className="nav-link tnav-link "
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Neler Sunuyoruz?
                    </a>
                    <ul className="dropdown-menu dd-bg w-100">
                      <li className="nav-item">
                        <a className="m-0 nav-link " href="/bireyler-icin">
                          Bireyler için
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="m-0 nav-link " href="/kurumlar-icin">
                          Kurumlar için
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="/katalog">
                      Katalog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="/codecademy">
                      Codecademy
                    </a>
                  </li>
                  <li className="nav-item dropdown tbt-dropdown">
                    <a
                      className="nav-link tnav-link "
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Tobeto'da Bu Ay
                    </a>
                    <ul className="dropdown-menu dd-bg w-100">
                      <li className="nav-item">
                        <a className="m-0 nav-link " href="/blog">
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="m-0 nav-link " href="/basinda-biz">
                          Basında Biz
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="m-0 nav-link " href="/takvim-anasayfa">
                          Takvim
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="m-0 nav-link " href="/istanbul-kodluyor">
                          İstanbul Kodluyor
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="d-none d-xl-block">
                  <a className="btn border-light text-light mx-4" href="/giris">
                    Giriş Yap
                  </a>
                  <a className="btn mx-4 btn-rainbow" href="/kayit-ol">
                    Ücretsiz Üye Ol
                  </a>
                </div>
              </div>
            </nav>
            <div
              className="offcanvas offcanvas-start"
              tabIndex={-1}
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div className="offcanvas-header">
                <a className="me-auto navbar-brand" href="#">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: "0px",
                      margin: "0px",
                      padding: "0px",
                      position: "relative",
                      maxWidth: "100%",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        maxWidth: "100%",
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27165%27%20height=%2734%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                        }}
                      />
                    </span>
                    <img
                      alt=""
                      srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&w=256&q=75  1x,https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&w=384&q=75  2x"
                      src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&w=384&q=75"
                      decoding="async"
                      data-nimg="intrinsic"
                      style={{
                        position: "absolute",
                        inset: "0px",
                        boxSizing: "border-box",
                        padding: "0px",
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: "0px",
                        height: "0px",
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                      }}
                    />
                  </span>
                </a>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body">
                <div>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link " href="/hakkimizda">
                        Biz Kimiz?
                      </a>
                    </li>
                    <li className="nav-item dropdown tbt-dropdown">
                      <a
                        className="nav-link tnav-link "
                        href="#"
                        role="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseNav1"
                        aria-expanded="false"
                        aria-controls="collapseNav1"
                      >
                        Neler Sunuyoruz?
                      </a>
                      <div
                        id="collapseNav1"
                        className="collapse collapse-navbar"
                      >
                        <ul className=" collapse-nav-bg ">
                          <li className="nav-item">
                            <a className="m-0 nav-link " href="/bireyler-icin">
                              Bireyler için
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="m-0 nav-link " href="/kurumlar-icin">
                              Kurumlar için
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/katalog">
                        Katalog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="/codecademy">
                        Codecademy
                      </a>
                    </li>
                    <li className="nav-item dropdown tbt-dropdown">
                      <a
                        className="nav-link tnav-link "
                        href="#"
                        role="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseNav2"
                        aria-expanded="false"
                        aria-controls="collapseNav2"
                      >
                        Tobeto'da Bu Ay
                      </a>
                      <div
                        id="collapseNav2"
                        className="collapse collapse-navbar"
                      >
                        <ul className="collapse-nav-bg">
                          <li className="nav-item">
                            <a className="m-0 nav-link " href="/blog">
                              Blog
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="m-0 nav-link" href="/basinda-biz">
                              Basında Biz
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="m-0 nav-link "
                              href="/takvim-anasayfa"
                            >
                              Takvim
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="m-0 nav-link "
                              href="/istanbul-kodluyor"
                            >
                              İstanbul Kodluyor
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto">
                  <div className="py-6">
                    <a className="w-100 btn btn-dark" href="#">
                      Giriş Yap
                    </a>
                    <a
                      className="w-100 btn btn-primary mt-3 btn-rainbow"
                      href="#"
                    >
                      Ücretsiz Üye Ol
                    </a>
                  </div>
                  <p className="mb-4 small text-center text-muted">
                    © 2021 Tüm hakları saklıdır.
                  </p>
                </div>
              </div>
            </div>
            <div className="calendarBtn">
              <div className="calendar-btn" />
            </div>
          </section>
  );
};
export default NavbarDark;
