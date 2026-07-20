import * as brevo from "@getbrevo/brevo";
import dotenv from "dotenv";

dotenv.config();

const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
);

const sendEmail = async (to, subject, html) => {
  const email = new brevo.SendSmtpEmail();

  email.sender = {
    name: "Verdique Living",
    email: process.env.EMAIL_USER,
  };

  email.to = [
    {
      email: to,
    },
  ];

  email.subject = subject;
  email.htmlContent = html;

  return await apiInstance.sendTransacEmail(email);
};

export default sendEmail;