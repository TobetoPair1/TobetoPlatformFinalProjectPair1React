import React from 'react'
import './ContactPage.css'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import MailSenderService from '../../Services/MailSenderService'
import { HttpStatusCode } from 'axios'
import toastr from 'toastr'

type Props = {}

interface FormModel{
    name: string
    email: string
    message: string
}

const ContactPage = (props: Props) => {
    const SendMessage = async(values: FormModel) => {
        const MailResponse = await MailSenderService.SendMail({to:"tobeto_pair1@outlook.com",subject:"İletişim Formu",body:values.name + "<br/>" + values.email + "<br/>" + values.message});
        if (MailResponse.status == HttpStatusCode.Ok){
            toastr.success("Mesajınız iletildi");
        }
        else{
            toastr.error("Mesajınız iletilemedi, lütfen tekrar deneyin");
        }
    }
    const initialValues = {
        name: "",
        email: "",
        message: ""
      }
      const schema = Yup.object({
        name: Yup.string().required("Doldurulması zorunlu alan*"),
        email: Yup.string().required("Doldurulması zorunlu alan*").email(),
        message: Yup.string().required("Doldurulması zorunlu alan*")
      })
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
            <section className="my-5 mt-40 position-relative pt-0 border-top border-info overflow-hidden" style={{ backgroundColor: 'white', borderRadius: '10px' }}>
                <div>
                    <div className="raw-html-embed">
                    </div>
                </div>
                <div className="d-md-none position-absolute top-0 start-0 w-100 h-100" />
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-12 col-lg-6 order-first position-relative">
                            <div className="position-relative py-12 px-10 bg-white shadow-lg b-r-15">
                                <div className="w-100 justify-content-center d-flex"><span className="badge bg-secondary text-white">İletişime Geçin</span></div>
                                <div className="w-100 justify-content-center d-flex">
                                    <h3 className="mt-6 mb-6">İletişim Bilgileri</h3>
                                </div>
                                <table className="table table-hover">
                                    <tbody>
                                        <tr className="contact_contactTr__90ggf">
                                            <td style={{ fontWeight: 'bold' }}>Firma Adı:</td>
                                            <td>TOBETO</td>
                                        </tr>
                                        <tr className="contact_contactTr__90ggf">
                                            <td style={{ fontWeight: 'bold' }}>Firma Unvan: </td>
                                            <td>Avez Elektronik İletişim Eğitim Danışmanlığı Ticaret Anonim Şirketi</td>
                                        </tr>
                                        <tr className="contact_contactTr__90ggf">
                                            <td style={{ fontWeight: 'bold' }}>Vergi Dairesi:</td>
                                            <td>Beykoz</td>
                                        </tr>
                                        <tr className="contact_contactTr__90ggf">
                                            <td style={{ fontWeight: 'bold' }}>Vergi No: </td>
                                            <td>1050250859</td>
                                        </tr>
                                        <tr className="contact_contactTr__90ggf">
                                            <td style={{ fontWeight: 'bold' }}>Telefon:</td>
                                            <td>(0216) 331 48 00</td>
                                        </tr>
                                        <tr className="contact_contactTr__90ggf">
                                            <td style={{ fontWeight: 'bold' }}>E-Posta: </td>
                                            <td>info@tobeto.com</td>
                                        </tr>
                                        <tr className="contact_contactTr__90ggf">
                                            <td style={{ fontWeight: 'bold' }}>Adres:</td>
                                            <td>Kavacık, Rüzgarlıbahçe Mah. Çampınarı Sok. No:4 Smart Plaza B Blok Kat:3 34805, Beykoz/İstanbul</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className="mt-20 table table-hover">
                                    <tbody>
                                        <tr className="contact_contactTr__90ggf">
                                            <td style={{ fontWeight: 'bold' }}>İstanbul Kodluyor için Telefon:</td>
                                            <td>(0216) 969 22 40</td>
                                        </tr>
                                        <tr className="contact_contactTr__90ggf">
                                            <td style={{ fontWeight: 'bold' }}>İstanbul Kodluyor için E-Posta: </td>
                                            <td>istanbulkodluyor@tobeto.com</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 order-first position-relative">
                            <div className="position-relative py-12 px-10 bg-white shadow-lg text-center b-r-15">
                                <Formik
                                    validationSchema={schema}
                                    initialValues={initialValues}
                                    onSubmit={(values: FormModel) => SendMessage(values)}
                                    >
                                    <Form action="#" data-hs-cf-bound="true"><span className="badge bg-secondary text-white">Mesaj Bırakın</span>
                                    <h3 className="mt-6 mb-6">İletişim Formu</h3>
                                    <Field name="name" className="form-control mb-6" type="text" placeholder="Adınız Soyadınız" />
                                    <Field name="email" className="form-control mb-6" type="email" placeholder="E-Mail" />
                                    <Field as="textarea" name="message" className="form-control mb-6" cols={30} rows={10} placeholder="Mesajınız" defaultValue={""} />
                                    <div style={{ fontSize: '11px' }}>Yukarıdaki form ile toplanan kişisel verileriniz Enocta tarafından talebinize dair işlemlerin yerine getirilmesi ve paylaşmış olduğunuz iletişim adresi üzerinden tanıtım, bülten ve pazarlama içerikleri gönderilmesi amacıyla<a target="_blank" className=" text-decoration-none" href="/yasal-metinler/kvkk-aydinlatma-metni"> Aydınlatma Metni </a>çerçevesinde işlenebilecektir.</div>
                                    {/* <div style={{ margin: '30px auto', display: 'flex', justifyContent: 'center' }}>
                                        <div>
                                            <div style={{ width: '304px', height: '78px' }}>
                                                <div><iframe title="reCAPTCHA" width={304} height={78} role="presentation" name="a-x5142san2624" frameBorder={0} scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LdXItghAAAAANPUfYw81TI55i6vggSCUVNIawnM&co=aHR0cHM6Ly90b2JldG8uY29tOjQ0Mw..&hl=tr&type=image&v=1kRDYC3bfA-o6-tsWzIBvp7k&theme=light&size=normal&badge=bottomright&cb=ugcxld8311lr" /></div><textarea id="g-recaptcha-response-1" name="g-recaptcha-response" className="g-recaptcha-response" style={{ width: '250px', height: '40px', border: '1px solid rgb(193, 193, 193)', margin: '10px 25px', padding: '0px', resize: 'none', display: 'none' }} defaultValue={""} />
                                            </div><iframe style={{ display: 'none' }} />
                                        </div>
                                    </div> */}
                                    <button type='submit' className="btn btn-secondary">Gönder</button>
                                </Form></Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default ContactPage;