import { Route, Routes } from 'react-router-dom'
import Homepage from '../../pages/Homepage/Homepage'
import AboutUs from '../../pages/AboutUs/AboutUs'
import Catalog from '../../pages/Catalog/Catalog'
import Codecademy from '../../pages/Codecademy/Codecademy'
import LoginPage from '../../pages/Login/LoginPage'
import Register from '../../pages/Register/Register'
import Platform from '../../pages/Platform/Platform'
import Appreciations from '../../pages/Appreciations/Appreciations'
import ForgotPassword from '../../pages/ForgotPassword/ForgotPassword'
import ForPeoplePage from '../../pages/Offer/ForPeoplePage'
import ForCorpPage from '../../pages/Offer/ForCorpPage'
import IK from '../../pages/IK/IK'
import Gallery from '../../pages/Gallery/Gallery'
import Profile from '../../pages/Profile/Profile'
import NotFound from '../../pages/NotFound/NotFound'
import Calendar from '../Calendar/Calendar'
import BlogPage from '../Blog/BlogPage'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

type Props = {}

const MainRoutes = (props: Props) => {
  return (
    <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/hakkimizda" element={<AboutUs />}></Route>
            <Route path="/katalog" element={<Catalog />}></Route>
            <Route path="/codecademy" element={<Codecademy />}></Route>
            <Route path="/giris" element={<LoginPage />}></Route>
            <Route path="/kayit-ol" element={<Register />}></Route>
            <Route path="/platform" element={<ProtectedRoute><Platform /></ProtectedRoute> }></Route>
            <Route path="/degerlendirmeler" element={<ProtectedRoute><Appreciations /></ProtectedRoute> }></Route>
            <Route path="/sifremi-unuttum" element={<ForgotPassword />}></Route>
            <Route path="/bireyler-icin" element={<ForPeoplePage />}></Route>
            <Route path="/kurumlar-icin" element={<ForCorpPage />}></Route>
            <Route path="/istanbul-kodluyor" element={<IK />}></Route>
            <Route path="/istanbul-kodluyor/galeri" element={<Gallery />}></Route>
            <Route path="/profilim" element={<ProtectedRoute><Profile /></ProtectedRoute> }></Route>
            <Route path="/takvim" element={<ProtectedRoute><Calendar /></ProtectedRoute>}></Route>
            <Route path="/blog" element={<BlogPage/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
  )
}

export default MainRoutes