import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { LoginModel } from "./Models/Requests/LoginModel";
import AuthService from "./Services/AuthService";
import { UserModel } from "./Models/Responses/UserModel";
import { log } from "console";

function App() {
  // useEffect(()=>{
  //   console.log(CheckUser("eposta","şifre").then(result=>result.data.items));
  // },[]);
  const [login, setLogin] = useState<LoginModel>({email:'',password:''});
  const [user, setUser] = useState<UserModel>();

  const [backgroundColor, setBackgroundColor] = useState('rgba(153, 51, 255, 255)');

  function OnChangeInput(input:any) {
    const {name,value}=input.target;
    setLogin({...login,[name]:value})
  }

  async function Login(loginRequest:LoginModel) {
    try{
    let result = await AuthService.login(loginRequest);
    setUser(result.data);
    }
    catch(error){
      console.log('Hata= ',error);
    }
  }
  useEffect(() => {
    console.log("Doğrulanan Kullanıcı");
    console.log(user);
  }, [user]);
  return (
    <div className="App">      
      <header>
        <img src={logo} className="App-logo" alt="logo" width={100} />
      </header>
      <main>
        <input
          name="email"
          className="email"
          type="email"
          placeholder="E-Posta"
          onChange={OnChangeInput}
        />
        <br />
        <input
          name="password"
          className="pass"
          type="password"
          placeholder="Şifre"
          onChange={OnChangeInput}
        />
        <br />
        <button
          onClick={() =>{Login(login)}}
        >
          Giriş Yap
        </button>
        <button className="regis">Kayıt Ol</button>
      </main>
    </div>
  );
}
export default App;