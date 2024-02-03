import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup'
import AuthService from "../../Services/AuthService";
import { HttpStatusCode } from "axios";
import toastr from 'toastr';

interface FormValues {
    firstName: string
    lastName: string
    email: string
    password: string
    passwordAgain: string
}
const initialValues: FormValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordAgain: ""
}

const schema = Yup.object({
    firstName: Yup.string().required("*Doldurulması zorunlu alan."),
    lastName: Yup.string().required("*Doldurulması zorunlu alan."),
    email: Yup.string().required("*Doldurulması zorunlu alan.").email("*Geçerli bir e-mail giriniz."),
    password: Yup.string().required("*Doldurulması zorunlu alan."),
    passwordAgain: Yup.string().required("*Doldurulması zorunlu alan.").oneOf([Yup.ref('password')], '*Şifreler aynı değil.')
})
type Props = {}

const RegisterForm = (props: Props) => {
    const navigate = useNavigate();
    const [buttonEnabled, setButtoEnabled] = useState(false);
    const [formValues, setFormValues] = useState<FormValues>({ email: "", firstName: "", lastName: "", password: "", passwordAgain: "" });
    const checkInputs = (input: HTMLInputElement) => {
        const { name, value } = input;
        let formDatas = formValues;
        formDatas = { ...formValues, [name]: value };
        let enabled = true;
        Object.values(formDatas).forEach((item) => {
            if (item == "") enabled = false;
        })
        setButtoEnabled(enabled);
        setFormValues(formDatas);
    }
    const OnRegister = async (values: FormValues) => {
        const token = await AuthService.register({ email: values.email, firstName: values.firstName, lastName: values.lastName, password: values.password })

        if (token.status == HttpStatusCode.Ok) {
            localStorage.setItem("token", JSON.stringify({ ...token.data}));
            navigate("/platform");
            toastr.success("Kayıt başarılı.")            
        }
        else {
            toastr.error("Kayıt olunamadı!");
        }
    }
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values: FormValues) => OnRegister(values)}
            >
                <Form data-hs-cf-bound="true" onChange={(input) => checkInputs(input.target as HTMLInputElement)}>
                    <h3 className="mt-6 mb-8">Hemen Kayıt Ol</h3>
                    <Field name="firstName" className="form-control mt-6" type="text" placeholder="Ad*" />
                    <ErrorMessage name="firstName" render={error =>
                        <label style={{ color: 'red' }}>{error}</label>
                    } />
                    <Field name="lastName" className="form-control mt-6" type="text" placeholder="Soyad*" />
                    <ErrorMessage name="lastName" render={error =>
                        <label style={{ color: 'red' }}>{error}</label>
                    } />
                    <Field name="email" className="form-control mt-6" type="email" placeholder="E-Posta*" />
                    <ErrorMessage name="email" render={error =>
                        <label style={{ color: 'red' }}>{error}</label>
                    } />
                    <Field name="password" className="form-control mt-6" type="password" placeholder="Şifre*" />
                    <ErrorMessage name="password" render={error =>
                        <label style={{ color: 'red' }}>{error}</label>
                    } />
                    <Field name="passwordAgain" className="form-control mt-6" type="password" placeholder="Şifre Tekrar*" />
                    <ErrorMessage name="passwordAgain" render={error =>
                        <label style={{ color: 'red' }}>{error}</label>
                    } />
                    <button type="submit" disabled={!buttonEnabled} className="btn btn-primary w-100 mt-6">Kayıt Ol</button>
                </Form>
            </Formik>

        </>
    )
}
export default RegisterForm;