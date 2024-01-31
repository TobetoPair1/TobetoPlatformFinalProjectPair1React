import { useLocation } from "react-router-dom";
import Banner from "./Components/Banner/Banner";
import NavbarDark from "./Components/NavbarDark/NavbarDark";
import './App.css'
import { OverlayLoader } from "./Components/OverlayLoader/OverlayLoader";
import NavBarLight from "./Components/NavbarLight/NavBarLight";
import DarkRoute from "./Components/Routes/DarkRoute";
import LightRoute from "./Components/Routes/LightRoute";
import './/../node_modules/toastr/build/toastr.css';


function App() {
  const path = useLocation().pathname;
  return (
    <>
{
        path != "/istanbul-kodluyor"?
        path != "/platform"? 
        <><Banner /><NavbarDark /></>
         : <NavBarLight />
         :null

      }
      <OverlayLoader/>
      {path != "/platform" ? <DarkRoute/>
        : <LightRoute/>
      }
    </>
  );
}
export default App;