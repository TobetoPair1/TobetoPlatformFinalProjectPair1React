import { useEffect, useState } from "react";
import { LoginModel } from "./Models/Requests/LoginModel";
import AuthService from "./Services/AuthService";
import { UserModel } from "./Models/Responses/UserModel";
import { Route, Routes, useHref, useLocation } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import Catalog from "./pages/Catalog/Catalog";
import Banner from "./Components/Banner/Banner";
import NavbarDark from "./Components/NavbarDark/NavbarDark";
import './App.css'
import Footer from "./Components/Footer/Footer";
import AboutUs from "./pages/AboutUs/AboutUs";
import Codecademy from "./pages/Codecademy/Codecademy";
import Register from "./pages/Register/Register";
import { OverlayLoader } from "./Components/OverlayLoader/OverlayLoader";
import Platform from "./pages/Platform/Platform";
import NavBarLight from "./Components/NavbarLight/NavBarLight";
import FooterPlatform from "./Components/FooterPlatform/FooterPlatform";
function App() {
  const path = useLocation().pathname;
  // useEffect(()=>{
  //   console.log(CheckUser("eposta","şifre").then(result=>result.data.items));
  // },[]);
  const [login, setLogin] = useState<LoginModel>({ email: '', password: '' });
  const [user, setUser] = useState<UserModel>();

  const [backgroundColor, setBackgroundColor] = useState('rgba(153, 51, 255, 255)');

  function OnChangeInput(input: any) {
    const { name, value } = input.target;
    setLogin({ ...login, [name]: value })
  }

  async function Login(loginRequest: LoginModel) {
    try {
      let result = await AuthService.login(loginRequest);
      setUser(result.data);
    }
    catch (error) {
      console.log('Hata= ', error);
    }
  }
  useEffect(() => {
    console.log("Doğrulanan Kullanıcı");
    console.log(user);
  }, [user]);
  return (
    <>
      {
        path != "/platform" ? <><Banner /><NavbarDark /></> : <NavBarLight />
      }

      <OverlayLoader />
      {path != "/platform" ? <div className="bg-front-dark bg-front-width" style={{ height: "0.5rem", overflow: "visible", width: "auto" }}>
        <main className="bg-front-dark">
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/hakkimizda" element={<AboutUs />}></Route>
            <Route path="/katalog" element={<Catalog />}></Route>
            <Route path="/codecademy" element={<Codecademy />}></Route>
            <Route path="/giris" element={<LoginPage />}></Route>
            <Route path="/kayit-ol" element={<Register />}></Route>
            <Route path="/platform" element={<Platform />}></Route>
            <Route path="/degerlendirmeler" element={<Platform />}></Route>
            <Route path="/sifremi-unuttum" element={<Platform />}></Route>
            <Route path="/bireyler-icin" element={<Platform />}></Route>
            <Route path="/kurumlar-icin" element={<Platform />}></Route>
            <Route path="/istanbul-kodluyor" element={<Platform />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
        : <div className="back-white" style={{ width: '100%', height: '0.5rem', overflow: 'visible' }}>
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/hakkimizda" element={<AboutUs />}></Route>
            <Route path="/katalog" element={<Catalog />}></Route>
            <Route path="/codecademy" element={<Codecademy />}></Route>
            <Route path="/giris" element={<LoginPage />}></Route>
            <Route path="/kayit-ol" element={<Register />}></Route>
            <Route path="/platform" element={<Platform />}></Route>
            <Route path="/degerlendirmeler" element={<Platform />}></Route>
            <Route path="/sifremi-unuttum" element={<Platform />}></Route>
            <Route path="/bireyler-icin" element={<Platform />}></Route>
            <Route path="/kurumlar-icin" element={<Platform />}></Route>
            <Route path="/istanbul-kodluyor" element={<Platform />}></Route>
          </Routes>
          <FooterPlatform />
        </div>
      }
    </>
  );
}
export default App;