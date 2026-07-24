import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transport.verify((error, success) => {
  if (error) {
    console.error("SMTP Verify Error:", error);
  } else {
    console.log("SMTP Ready:", success);
  }
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