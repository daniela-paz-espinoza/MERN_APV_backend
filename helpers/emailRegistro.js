import nodemailer from "nodemailer";

const emailRegistro = async (datos) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      const { email, nombre, token } = datos
      
      //enviar email
      const info = await transporter.sendMail({
        from: "APV-Aadministrador de Pacientes de Veterinaria",
        to: email,
        subject: "Comprueba tu cuenta en APV",
        text: "Comprueba tu cuenta en APV",
        html: `<p>Hola: ${nombre}, comprueba tu cuenta en APV</p>
            <p>Tu cuenta ya esta confirmada solo debes confirmarla en el sigiente enlace:
            <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a><p/>
            <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>     
        `
      })
      console.log("Mensaje Enviado: %s", info.messageId)

}

export default emailRegistro;