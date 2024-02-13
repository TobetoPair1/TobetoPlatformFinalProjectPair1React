import { AxiosResponse } from 'axios';
import axiosInstance from '../core/interceptors/axiosInceptor';
import { MailSendModel } from '../Models/Requests/Mail/MailSendModel';

const mail = 'Mails';

class MailSenderService {
  SendMail(mailRequest: MailSendModel): Promise<AxiosResponse<boolean, any>> {
    return axiosInstance.post(mail, mailRequest);
  }
}

export default new MailSenderService();