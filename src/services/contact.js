const FORM = process.env.NEXT_PUBLIC_FORM_ID;
const P_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

export const sendEmail = async (body) =>
  await emailjs.sendForm("default_service", FORM, body, P_KEY);
