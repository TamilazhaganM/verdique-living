import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const sendEmail = async (to, subject, html) => {
  const response = await axios.post(
    "https://api.brevo.com/v3/smtp/email",
    {
      sender: {
        name: "Verdique Living",
        email: process.env.EMAIL_USER,
      },
      to: [
        {
          email: to,
        },
      ],
      subject,
      htmlContent: html,
    },
    {
      headers: {
        "api-key": process.env.EMAIL_PASS,
        "Content-Type": "application/json",
      },
    }
  );
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("API KEY PREFIX:", process.env.EMAIL_PASS?.substring(0, 8));
  console.log("Email sent:", response.data);

  return response.data;
};

export default sendEmail;