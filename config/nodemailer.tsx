import nodemailer, { Transporter, SendMailOptions } from "nodemailer";
import { google } from "googleapis";

const email = process.env.EMAIL;
const clientId = process.env.OAUTH2_CLIENT_ID;
const clientSecret = process.env.OAUTH2_CLIENT_SECRET;
const refreshToken = process.env.OAUTH2_REFRESH_TOKEN;

interface OAuth2Credentials {
  clientId?: string;
  clientSecret?: string;
  refreshToken?: string;
}

interface OAuth2TransportConfig {
  type: "OAuth2";
  user: string;
  clientId: string;
  clientSecret: string;
  refreshToken: string;
  accessToken: string;
}



const getAccessToken = async (credentials: OAuth2Credentials): Promise<string> => {
  const oauth2Client = new google.auth.OAuth2({
    clientId: credentials.clientId,
    clientSecret: credentials.clientSecret,
    redirectUri: "https://developers.google.com/oauthplayground", // Cambia la URL de redirección según tu configuración
  });

  oauth2Client.setCredentials({
    refresh_token: credentials.refreshToken,
  });

  const { token } = await oauth2Client.getAccessToken()!;
  return token as string;
}; // Agrega un corchete de cierre aquí

export const createTransporter = async (credentials: OAuth2Credentials): Promise<Transporter> => {
  const accessToken = await getAccessToken(credentials);

  const transporter: Transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      type: "OAuth2",
      user: email,
      clientId: credentials.clientId,
      clientSecret: credentials.clientSecret,
      refreshToken: credentials.refreshToken,
      accessToken,
    } as OAuth2TransportConfig,
  });

  return transporter;
};

export const sendEmail = async (mailOptions: SendMailOptions): Promise<void> => {
  const credentials: OAuth2Credentials = {
    clientId,
    clientSecret,
    refreshToken,
  };

  const transporter = await createTransporter(credentials);
  await transporter.sendMail(mailOptions);
};


export const mailOptions = {
  from: email,
  to: email,
};