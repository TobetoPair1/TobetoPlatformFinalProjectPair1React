import { Route, Routes} from "react-router-dom";
import LoginPage from '../../pages/Login/LoginPage'
import AboutUs from '../../pages/AboutUs/AboutUs'
import Catalog from '../../pages/Catalog/Catalog'
import Codecademy from '../../pages/Codecademy/Codecademy'
import Register from '../../pages/Register/Register'
import Platform from '../../pages/Platform/Platform'
import Appreciations from '../../pages/Appreciations/Appreciations'
import ForgotPassword from '../../pages/ForgotPassword/ForgotPassword'
import ForPeoplePage from '../../pages/Offer/ForPeoplePage'
import ForCorpPage from '../../pages/Offer/ForCorpPage'
import IK from '../../pages/IK/IK'
import Gallery from '../../pages/Gallery/Gallery'
import Footer from "../Footer/Footer";
import { OverlayLoader } from "../OverlayLoader/OverlayLoader";

type Props = {}

const DarkRoute = (props: Props) => {
  return (
    <div className="bg-front-dark bg-front-width" style={{ height: "0.5rem", overflow: "visible", width: "auto" }}>
    <main className="bg-front-dark">
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/hakkimizda" element={<AboutUs />}></Route>
            <Route path="/katalog" element={<Catalog />}></Route>
            <Route path="/codecademy" element={<Codecademy />}></Route>
            <Route path="/giris" element={<LoginPage />}></Route>
            <Route path="/kayit-ol" element={<Register />}></Route>
            <Route path="/platform" element={<Platform />}></Route>
            <Route path="/degerlendirmeler" element={<Appreciations />}></Route>
            <Route path="/sifremi-unuttum" element={<ForgotPassword />}></Route>
            <Route path="/bireyler-icin" element={<ForPeoplePage />}></Route>
            <Route path="/kurumlar-icin" element={<ForCorpPage />}></Route>
            <Route path="/istanbul-kodluyor" element={<IK />}></Route>
            <Route path="/istanbul-kodluyor/galeri" element={<Gallery />}></Route>
          </Routes>
        </main>
        <Footer />
    </div>
  )
}
export default DarkRoute;