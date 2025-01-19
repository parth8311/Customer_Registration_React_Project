const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, message) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "parth.imscit18@gmail.com", // Your email address
      pass: "qsmdfxwyjhisuifj",
    },
  });

  await transporter.sendMail({
    from: "parthtalsaniya1812@gmail.com",
    to: email,
    subject,
    text: message,
  });
};

module.exports = sendEmail;
