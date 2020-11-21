import Mailgun from "mailgun-js";

const mailgunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || "",
  domain: "sandbox7c88a1a2bb644666a7c05bad8d352089.mailgun.org",
});

const sendEmail = (subject: string, body: string) => {
  const emailData = {
    from: "wanho1108@gmail.com",
    to: "wanho1108@gmail.comn",
    subject,
    html: body,
  };

  return mailgunClient.messages().send(emailData);
};

export const sendVerificationEmail = (fullName: string, key: string) => {
  const emailSubject = `Hello! ${fullName}, please verify your email`;
  const emailBody = `Verify your email by clicking <a href="http://nuber.com/verifycation/${key}/">here</a>`;

  return sendEmail(emailSubject, emailBody);
};
