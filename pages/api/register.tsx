import { Request, Response } from "express";
import { transporter, mailOptions } from "../../config/nodemailer";

// Objeto que mapea los campos del formulario
const CONTACT_MESSAGE_FIELDS: { [key: string]: string } = {
  name: "Name",
  email: "Email",
};

// Función para enviar un correo de bienvenida
const sendWelcomeEmail = (toEmail: string, firstName: string) => {
  console.log("Sending welcome email to:", toEmail);
  console.log("User's first name:", firstName);

  const welcomeMailOptions = {
    from: mailOptions.from,
    to: toEmail,
    subject: "Bienvenido a nuestra aplicación",
    text: `Hola ${firstName},\n\nBienvenido a nuestra aplicación. Gracias por unirte.`,
  };

  transporter.sendMail(welcomeMailOptions, (error, info) => {
    if (error) {
      console.error("Error al enviar el correo de bienvenida:", error);
    } else {
      console.log("Correo de bienvenida enviado:", info.response);
    }
  });
};

const handleRegister = async (req: Request, res: Response) => {
  if (req.method === "POST") {
    const data = req.body;
    console.log("Received data:", data);

    if (!data || !data.firstName || !data.toEmail) {
      return res.status(400).send({ message: "Bad request" });
    }

    try {
      await sendWelcomeEmail(data.toEmail, data.firstName);
      console.log("Email sent successfully.");
      res.status(200).json({ success: true });
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Error:", err);
        return res.status(400).json({ message: err.message });
      } else {
        console.error("Error desconocido");
        return res.status(400).json({ message: "Error desconocido" });
      }
    }
  } else {
    return res.status(400).json({ message: "Bad request" });
  }
}


export default handleRegister;
