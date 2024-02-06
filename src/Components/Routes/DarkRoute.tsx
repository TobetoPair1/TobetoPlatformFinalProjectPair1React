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
import NotFound from "../../pages/NotFound/NotFound";
import HomePage from "../../pages/HomePage/HomePage";
import Profile from "../../pages/Profile/Profile";
import MainRoutes from "./MainRoutes";

type Props = {}

const DarkRoute = (props: Props) => {
  return (
    <div className="bg-front-dark bg-front-width" style={{ height: "0.5rem", overflow: "visible", width: "auto" }}>
    <main className="bg-front-dark">
          <MainRoutes/>
        </main>
        <Footer />
    </div>
  )
}
export default DarkRoute;