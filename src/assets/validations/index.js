import { object, string } from "yup";

export const contactSchema = object({
  email: string().email().notRequired(),
  message_header: string().required(),
  message: string().required(),
});
