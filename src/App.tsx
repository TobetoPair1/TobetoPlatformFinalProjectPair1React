import { useEffect, useState } from "react";
import { LoginModel } from "./Models/Requests/LoginModel";
import AuthService from "./Services/AuthService";
import { UserModel } from "./Models/Responses/UserModel";
import { Route, Routes, useHref, useLocation } from "react-router-dom";
import Banner from "./Components/Banner/Banner";
import NavbarDark from "./Components/NavbarDark/NavbarDark";
import './App.css'
import { OverlayLoader } from "./Components/OverlayLoader/OverlayLoader";
import NavBarLight from "./Components/NavbarLight/NavBarLight";
import DarkRoute from "./Components/Routes/DarkRoute";
import LightRoute from "./Components/Routes/LightRoute";
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
      {/* {
        path != "/platform" ? <><Banner /><NavbarDark /></> : <NavBarLight />
      } */}

{
        path != "/istanbul-kodluyor"?
        path != "/platform"? 
        <><Banner /><NavbarDark /></>
         : <NavBarLight />
         :null

      }

      <OverlayLoader />
      {path != "/platform" ? <DarkRoute/>
        : <LightRoute/>
      }
    </>
  );
}
export default App;