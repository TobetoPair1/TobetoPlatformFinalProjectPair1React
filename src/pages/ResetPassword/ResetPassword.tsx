import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup'
import "./ResetPassword.css";
import { useEffect, useState } from "react";
import UserService from "../../Services/UserService";
import { HttpStatusCode } from "axios";
import { useNavigate } from "react-router-dom";
import ForgotPasswordService from "../../Services/ForgotPasswordService";
import AuthService from "../../Services/AuthService";
import toastr from "toastr";

type Props = {};
interface FormModel{
  password:string
  passwordConfirmation:string
}
const initialValues:FormModel={
  password:"",
  passwordConfirmation:""
}
const schema = Yup.object({  
  password: Yup.string().required("*Doldurulması zorunlu alan."),
  passwordConfirmation: Yup.string().required("*Doldurulması zorunlu alan.").oneOf([Yup.ref('password')], '*Şifreler aynı değil.')
})
const ResetPassword = (props: Props) => {
  const [confirm,setConfirm]=useState(false);
  const navigate=useNavigate();
  const params=new URLSearchParams(window.location.search);
  const code=params.get("code");
  const email=atob(code?code:"");
  async function SendButton(values:FormModel){
    if(confirm){
      const response= await AuthService.changePassword({mail:email, password:values.password});
      if(response.status==HttpStatusCode.Ok){
        toastr.success("Şifre başarıyla değiştirildi.");
        navigate("/giris")
      }
      else{
        toastr.error("Şifre değiştirilemedi, tekrar deneyiniz...");
      }
    }
  }
  async function OnPageLoad() {
    const userResponse=await UserService.getByMail(email);
    let userId:string;
    if(userResponse.status==HttpStatusCode.Ok){
      userId=userResponse.data.id;
      const forgotPasswordResponse = await ForgotPasswordService.getByUserId(userId,code?code:"");      
      if(forgotPasswordResponse.status==HttpStatusCode.Ok){
        if(forgotPasswordResponse.data.code!=code){
          navigate("/")
        }
        else{
          setConfirm(true);
        }
      }
      else{
        navigate("/");
      }
    }    
    else{
      navigate("/");
    }
  }
  useEffect(()=>{
    OnPageLoad();
  },[])
  return (
    <section className="position-relative py-lg-20 bg-light-light py-sm-10">
  <div className="container pt-20">
    <Formik
    initialValues={initialValues}
    validationSchema={schema}
    onSubmit={(values:FormModel)=>SendButton(values)}
    >
    <Form data-hs-cf-bound="true">
      <div className="mw-xl mx-auto text-center">
        <div className="py-12 px-12 bg-white shadow-lg text-center">
          <h3 className="mt-6 mb-8">Şifre Sıfırlama</h3>
          <Field name="password" className="form-control mt-6" type="password" placeholder="Şifre " />
          <ErrorMessage name="password" render={error =>
                        <label style={{ color: 'red' }}>{error}</label>
                    } />
          <Field name="passwordConfirmation" className="form-control mt-6" type="password" placeholder="Şifre Tekrar"/>
          <ErrorMessage name="passwordConfirmation" render={error =>
                        <label style={{ color: 'red' }}>{error}</label>
                    } />
          <button disabled={false} type="submit" className="btn btn-primary w-100 mt-6">Gönder</button>
        </div>
      </div>
    </Form>
    </Formik>
  </div>
</section>
  );
};

export default ResetPassword;