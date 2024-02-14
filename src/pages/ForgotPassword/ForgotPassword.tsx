import { useState } from "react";
import { MailSendModel } from "../../Models/Requests/Mail/MailSendModel";
import MailSenderService from "../../Services/MailSenderService";
import "./ForgotPassword.css";
import UserService from "../../Services/UserService";
import { HttpStatusCode } from "axios";
import toastr from "toastr";
import ForgotPasswordService from "../../Services/ForgotPasswordService";

const ForgotPassword = () => {
  const [mail, setMail] = useState("");
  async function SendMail(){
    //user bilgisini çek
    const userResponse=(await UserService.getByMail(mail));
    let user;
    if(userResponse.status==HttpStatusCode.Ok) user=userResponse.data;
    else if(userResponse.status==HttpStatusCode.NoContent){      
       toastr.warning("Kullanıcı kaydı yok!");
       return;
      }
    else {      
      toastr.error("Bir hata oluştu!");
      return;
    }    
    //bir kod oluştur
    const code=btoa(mail);
    //kodu backende yaz userid ile eşleştir
    const forgotPasswordResponse= await ForgotPasswordService.add({userId:user.id,code:code});
    if(forgotPasswordResponse.status==HttpStatusCode.Ok)
    {
      //kod başarıyla backende yazılırsa kodu mail ile gönder
    const mailRequest: MailSendModel = {to: mail, subject: "Şifre Sıfırlama",body: "Şifremi unuttum linkine aşağıdan ulaşabilirsin <br/>"
    + "<a href='http://localhost:3000/sifre-yenile?code=" + code+"'>Şifreyi Yenile</a>"};
    console.log(code);
   await MailSenderService.SendMail(mailRequest);
   toastr.success("E-posta adresinize bir şifre yenileme linki gönderildi.");
    }
    else{
      toastr.error("Sunucuda hata oluştu tekrar deneyiniz.");
    }
    
  }
  return (
    <>
      <div
        className="modal fade"
        id="TobetoVideo"
        data-bs-backdrop="static"
        aria-hidden="true"
        aria-labelledby="TobetoVideoLabel"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content back-none border-0">
            <button
              type="button"
              className="btn-close btn-close-modal pause-video"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <svg
                width={22}
                height={22}
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 5.5L5.5 16.5"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.5 5.5L16.5 16.5"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="modal-body p-0">
              <video
                width="100%"
                className="modal-height youtube-video"
                height={240}
                controls
              >
                <source
                  src="https://s3.cloud.ngn.com.tr/tobeto/tobeto_final_v2_5c7893fbe0.mp4"
                  type="video/mp4"
                />
                <source src="movie.ogg" type="video/ogg" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <section className="position-relative py-lg-20 bg-light-light py-sm-10">
        <div className="container pt-20">
          <div className="mw-xl mx-auto text-center">
            <div className="py-12 px-12 bg-white shadow-lg text-center">
              <h3 className="mt-6 mb-8">Şifre Sıfırlama</h3>
              <input
                onChange={(e) => setMail(e.target.value)}
                className="form-control mt-6"
                type="email"
                placeholder="Şifre sıfırlama linki için e-posta adresinizi giriniz"
                required
              />
              <button className="btn btn-primary w-100 mt-6" onClick={SendMail}>Gönder</button>
            </div>
          </div>
        </div>
      </section>
      </>
  );
};

export default ForgotPassword;