import Twilio from "twilio";

const twilioClient = Twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

const sendSMS = (to: string, body: string) => {

  return twilioClient.messages.create({
    body,
    to,
    from: process.env.TWILIO_NUNBER
  })
};

export const sendVerficationSMS = (to: string, key: string) => sendSMS(to, `Your verfication key is: ${key}`);
