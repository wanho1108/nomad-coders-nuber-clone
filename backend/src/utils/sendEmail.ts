import Mailgun from "mailgun-js";

const mailgunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || "",
  domain: "sandbox7c88a1a2bb644666a7c05bad8d352089.mailgun.org"
});
