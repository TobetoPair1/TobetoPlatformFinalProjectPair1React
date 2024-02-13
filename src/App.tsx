import { useLocation } from 'react-router-dom';
import Banner from './Components/Banner/Banner';
import NavbarDark from './Components/NavbarDark/NavbarDark';
import { OverlayLoader } from './Components/OverlayLoader/OverlayLoader';
import NavBarLight from './Components/NavbarLight/NavBarLight';
import DarkRoute from './Components/Routes/DarkRoute';
import LightRoute from './Components/Routes/LightRoute';
import tokenService from './core/services/tokenService';
import { store } from './store/configureStore';
import { PlatformModel, platformActions } from './store/platform/platformSlice';
import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { authActions } from './store/auth/authSlice';
function App() {
  const platform: PlatformModel = useSelector((state: any) => state.platform);

  async function OnPageLoad() {
    if (tokenService.hasToken()) {
      store.dispatch(authActions.login());
      store.dispatch(platformActions.decodeToken());
      store.dispatch(platformActions.getUser());
    }   
  }

  useEffect(() => {
    OnPageLoad();
  }, []);

  useEffect(() => {
    if (platform.token.exp != undefined) {
      const dateString = Date.now().toString();
      const now = Number.parseInt(
        dateString.substring(0, platform.token.exp.toString().length)
      );
      if (platform.token.exp <= now) {
        tokenService.removeToken();
      }
    }
  });

  const path = useLocation().pathname;
  document.title = 'Tobeto | ' + path.substring(1, path.length);

  return (
    <>
      {path != '/istanbul-kodluyor' && path != '/kurs' ? (
        path == '/' ||
        path == '/hakkimizda' ||
        path == '/katalog' ||
        path == '/codecademy' ||
        path == '/giris' ||
        path == '/kayit-ol' ||
        path == '/sifremi-unuttum' ||
        path == '/bireyler-icin' ||
        path == '/kurumlar-icin' ||
        path == '/blog' ||
        path == '/anasayfa-takvim' ? (
          <>
            <Banner />
            <NavbarDark />
          </>
        ) : (
          <NavBarLight />
        )
      ) : null}
      <OverlayLoader />
      {path == '/' ||
      path == '/hakkimizda' ||
      path == '/katalog' ||
      path == '/codecademy' ||
      path == '/giris' ||
      path == '/kayit-ol' ||
      path == '/sifremi-unuttum' ||
      path == '/bireyler-icin' ||
      path == '/kurumlar-icin' ||
      path == '/blog' ||
      path == '/anasayfa-takvim' ? (
        <DarkRoute />
      ) : (
        <LightRoute />
      )}
    </>
  );
}
export default App;