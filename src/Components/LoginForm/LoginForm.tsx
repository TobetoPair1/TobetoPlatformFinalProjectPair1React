import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import toastr from 'toastr';
import AuthService from '../../Services/AuthService';
import { HttpStatusCode } from 'axios';


interface FormValues {
  email: string
  password: string
}



type Props = {

}


const LoginForm = (props: Props) => {
  const navigate=useNavigate();
  const initialValues = {
    email: "",
    password: ""
  }

  const schema = Yup.object({
    email: Yup.string().required("Doldurulması zorunlu alan*"),
    password: Yup.string().required("Doldurulması zorunlu alan*")
  })
  const OnLogin =async (values: FormValues) => {    
  const token= await AuthService.login({email:values.email,password:values.password})
  console.log(token);
   if(token.status==HttpStatusCode.Ok){
    localStorage.setItem("token", JSON.stringify({...token.data}));
    navigate("/platform");
    toastr.success("Giriş başarılı.")
   }
   else{
    toastr.error("hatalı giriş");
   }
  }

    return (      
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values: FormValues) => { OnLogin(values) }}>
        <Form data-hs-cf-bound="true">
          <Field name="email" className="form-control mt-6" placeholder="E-Posta"/>
          <ErrorMessage name="email" render={error=>
                        <label style={{color:'red'}}>{error}</label>
                    }/>
          <Field name="password" className="form-control mt-6" type="password" placeholder="Şifre" />
          <ErrorMessage name="password" render={error=>
                        <label style={{color:'red'}}>{error}</label>
                    }/>
          <button 
          className="btn btn-light w-100 mt-6" 
          style={{backgroundColor: '#A628FF', color: '#fff', minWidth: '200px',lineHeight: '18px', borderRadius: '20px', fontWeight: 'bold'}} type='submit' >Giriş Yap</button>
        <label><small>
          <p className="text-decoration-none text-muted mt-5 d-block" style={{ cursor: 'pointer' }}>Şifremi Unuttum</p>
        </small></label>
        </Form>        
      </Formik>
    )
  }

export default LoginForm;
