import { useLocation } from "react-router-dom";
import Banner from "./Components/Banner/Banner";
import NavbarDark from "./Components/NavbarDark/NavbarDark";
//import './App.css'
import { OverlayLoader } from "./Components/OverlayLoader/OverlayLoader";
import NavBarLight from "./Components/NavbarLight/NavBarLight";
import DarkRoute from "./Components/Routes/DarkRoute";
import LightRoute from "./Components/Routes/LightRoute";
import tokenService from "./core/services/tokenService";
import { jwtDecode } from "jwt-decode";
import { DecodedTokenModel } from "./core/Models/DecodedTokenModel";


function App() {
  const path = useLocation().pathname;
  document.title = "Tobeto | " + path.substring(1, path.length);
  if (tokenService.hasToken()) {
    const tokenString = tokenService.getToken();
    const exp = (jwtDecode(tokenString ? tokenString : "") as DecodedTokenModel).exp;
    const dateString = Date.now().toString();
    const now = Number.parseInt(dateString.substring(0, exp.toString().length));
    if (exp <= now) {
      tokenService.removeToken()
    }
  }
  return (
    <>    
      {
        path != "/istanbul-kodluyor"?
          path == "/"
            ||
            path == "/hakkimizda"
            ||
            path == "/katalog"
            ||
            path == "/codecademy"
            ||
            path == "/giris"
            ||
            path == "/kayit-ol"
            ||
            path == "/sifremi-unuttum"
            ||
            path == "/bireyler-icin"
            ||
            path == "/kurumlar-icin"
            ||
            path == "/blog"
            ?
            <><Banner /><NavbarDark /></>
            : <NavBarLight />
          : null

      }
      <OverlayLoader />
      {path == "/"
            ||
            path == "/hakkimizda"
            ||
            path == "/katalog"
            ||
            path == "/codecademy"
            ||
            path == "/giris"
            ||
            path == "/kayit-ol"
            ||
            path == "/sifremi-unuttum"
            ||
            path == "/bireyler-icin"
            ||
            path == "/kurumlar-icin"
            ||
            path == "/blog" ? <DarkRoute />
        : <LightRoute />
      }
    </>
  );
}
export default App;