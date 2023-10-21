import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;
const clientId = process.env.OAUTH2_CLIENT_ID;
const clientSecret = process.env.OAUTH2_CLIENT_SECRET;

export const transporter = nodemailer.createTransport({
  service: 'Gmail', // Cambia esto al servicio de correo que estés utilizando
  auth: {
    type: "OAuth2",
    user: email,
    clientId: clientId,
    clientSecret: clientSecret,
    
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
