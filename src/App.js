import logo from "./logo.svg";

import "./App.css";
import { useEffect, useState } from "react";
import CheckUser from "./Services/UserService";

function App() {
  // useEffect(()=>{
  //   console.log(CheckUser("eposta","şifre").then(result=>result.data.items));
  // },[]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log("Doğrulanan Kullanıcı");
    console.log(user);
  }, [user]);
  return (
    <div className="App">
      <label class="switch">
      <input type="checkbox"/>
      <span class="slider round"></span>
      </label>
      <header>
        <img src={logo} className="App-logo" alt="logo" width={100} />
      </header>
      <main>
        <input
          className="email"
          type="email"
          placeholder="E-Posta"
          onChange={(email) => setEmail(email.target.value)}
        />
        <br />
        <input
          className="pass"
          type="password"
          placeholder="Şifre"
          onChange={(password) => setPassword(password.target.value)}
        />
        <br />
        <button
          onClick={() => {
            setUser(CheckUser(email, password).then((result) => result.data));
          }}
        >
          Giriş Yap
        </button>
        <button className="regis">Kayıt Ol</button>
      </main>
    </div>
  );
}
export default App;
