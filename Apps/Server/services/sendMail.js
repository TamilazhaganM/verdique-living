import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async (to, subject, html) => {
  const info = await transport.sendMail({
    from: {
      name: "Verdique Living",
      address: process.env.EMAIL_USER,
    },
    to,
    subject,
    html,
  });

  console.log("Email sent:", info.response);

  return info;
};

export default sendEmail;