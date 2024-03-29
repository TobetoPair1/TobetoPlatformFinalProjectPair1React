import { Route, Routes } from 'react-router-dom';
import Homepage from '../../pages/Homepage/Homepage';
import AboutUs from '../../pages/AboutUs/AboutUs';
import Catalog from '../../pages/Catalog/Catalog';
import Codecademy from '../../pages/Codecademy/Codecademy';
import LoginPage from '../../pages/Login/LoginPage';
import Register from '../../pages/Register/Register';
import Platform from '../../pages/Platform/Platform';
import Appreciations from '../../pages/Appreciations/Appreciations';
import ForgotPassword from '../../pages/ForgotPassword/ForgotPassword';
import ForPeoplePage from '../../pages/Offer/ForPeoplePage';
import ForCorpPage from '../../pages/Offer/ForCorpPage';
import IK from '../../pages/IK/IK';
import Gallery from '../../pages/Gallery/Gallery';
import Profile from '../../pages/Profile/Profile';
import NotFound from '../../pages/NotFound/NotFound';
import Calendar from '../Calendar/Calendar';
import BlogPage from '../Blog/BlogPage';
import EducationPage from '../../pages/EducationPage/EducationPage';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import CoursePage from '../../pages/CoursePage/CoursePage';
import MainCalendar from '../MainCalendar/MainCalendar';
import ResetPassword from '../../pages/ResetPassword/ResetPassword';
import PersonalInformation from '../../pages/PersonalInformation/PersonalInformation';
import PlatformCatalog from '../../pages/PlatformCatalog/PlatformCatalog';
import ContactPage from '../../pages/Contact/ContactPage';
import Kvkk from '../../pages/Kvkk/Kvkk';

type Props = {};

const MainRoutes = (props: Props) => {
  const basePath = '/profilim/profilimi-duzenle/';
  const protectedRouteWithPersonalInfo = (path: string) => (
    <Route
      path={basePath + path}
      element={
        <ProtectedRoute>
          <PersonalInformation />
        </ProtectedRoute>
      }
    />
  );
  return (
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/hakkimizda' element={<AboutUs />}></Route>
      <Route path='/katalog' element={<Catalog />}></Route>
      <Route path='/codecademy' element={<Codecademy />}></Route>
      <Route path='/giris' element={<LoginPage />}></Route>
      <Route path='/kayit-ol' element={<Register />}></Route>
      <Route
        path='/platform'
        element={
          <ProtectedRoute>
            <Platform />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path='/degerlendirmeler'
        element={
          <ProtectedRoute>
            <Appreciations />
          </ProtectedRoute>
        }
      ></Route>
      <Route path='/sifremi-unuttum' element={<ForgotPassword />}></Route>
      <Route path='/bireyler-icin' element={<ForPeoplePage />}></Route>
      <Route path='/kurumlar-icin' element={<ForCorpPage />}></Route>
      <Route path='/istanbul-kodluyor' element={<IK />}></Route>
      <Route path='/istanbul-kodluyor/galeri' element={<Gallery />}></Route>
      <Route
        path='/profilim'
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path='/platform-katalog'
        element={
          <ProtectedRoute>
            <PlatformCatalog />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path='/takvim'
        element={
          <ProtectedRoute>
            <Calendar />
          </ProtectedRoute>
        }
      ></Route>
      <Route path='/blog' element={<BlogPage />}></Route>
      <Route
        path='/egitimlerim'
        element={
          <ProtectedRoute>
            <EducationPage />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path='/kurs'
        element={
          <ProtectedRoute>
            <CoursePage />
          </ProtectedRoute>
        }
      ></Route>
      <Route path='/anasayfa-takvim' element={<MainCalendar />}></Route>
      <Route path='/sifre-yenile' element={<ResetPassword />}></Route>

      {protectedRouteWithPersonalInfo('kisisel-bilgilerim')}
      {protectedRouteWithPersonalInfo('deneyimlerim')}
      {protectedRouteWithPersonalInfo('egitim-hayatim')}
      {protectedRouteWithPersonalInfo('yetkinliklerim')}
      {protectedRouteWithPersonalInfo('sertifikalarim')}
      {protectedRouteWithPersonalInfo('medya-hesaplarim')}
      {protectedRouteWithPersonalInfo('yabanci-dil')}
      {protectedRouteWithPersonalInfo('ayarlar')}
      <Route path="/iletisim" element={<ContactPage/>}></Route>
      <Route path="/yasal-metinler/kvkk-aydinlatma-metni" element={<Kvkk/>}></Route> 
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  );
};

export default MainRoutes;
