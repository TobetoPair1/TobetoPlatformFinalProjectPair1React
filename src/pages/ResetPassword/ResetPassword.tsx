import React from "react";
import "./ResetPassword.css";

type Props = {};

const ResetPassword = (props: Props) => {
  return (
    <section className="position-relative py-lg-20 bg-light-light py-sm-10">
  <div className="container pt-20">
    <form data-hs-cf-bound="true">
      <div className="mw-xl mx-auto text-center">
        <div className="py-12 px-12 bg-white shadow-lg text-center">
          <h3 className="mt-6 mb-8">Şifre Sıfırlama</h3>
          <input name="password" className="form-control mt-6" type="password" placeholder="Şifre " />
          <input name="passwordConfirmation" className="form-control mt-6" type="password" placeholder="Şifre Tekrar"/>
          <button disabled={false} className="btn btn-primary w-100 mt-6">Gönder</button>
        </div>
      </div>
    </form>
  </div>
</section>
  );
};

export default ResetPassword;