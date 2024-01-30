import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom';
import { authActions } from '../../store/auth/authSlice';

type Props = {}

const navigate=useNavigate();

const OnLogin=()=>{
    authActions.login();
    navigate("/platform")

const LoginForm = (props: Props) => {
  return (
    <Formik onSubmit={()=>{OnLogin}}>
    <form action="/hakkimizda" data-hs-cf-bound="true"><input name="email" className="form-control mt-6" placeholder="E-Posta" /><input name="password" className="form-control mt-6" type="password" placeholder="Şifre" /><button className="btn btn-light w-100 mt-6"  style={{backgroundColor:'#A628FF', color:'#fff', minWidth: '200px',
    lineHeight: '18px', borderRadius:'20px', fontWeight:'bold'
    }} onClick={()=>OnLogin()}>Giriş Yap</button><label><small>
        <p className="text-decoration-none text-muted mt-5 d-block" style={{ cursor: 'pointer' }}>Şifremi Unuttum</p>
    </small></label></form>
    </Formik>
  )
}

export default LoginForm;