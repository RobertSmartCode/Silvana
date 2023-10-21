import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;
const clientId = process.env.OAUTH2_CLIENT_ID;
const clientSecret = process.env.OAUTH2_CLIENT_SECRET;

export const transporter = nodemailer.createTransport({

  host:"https://silvana-iota.vercel.app/",
  secure:true,
  service: "Gmail",
  auth: {
    user: email,
    pass: pass,
    clientId: clientId,
    clientSecret: clientSecret,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
