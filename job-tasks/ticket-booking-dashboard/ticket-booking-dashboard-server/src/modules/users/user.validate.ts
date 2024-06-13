import { z } from "zod";

export const userValidationSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  email: z.string().email({ message: "Please provide a valid email address" }),
});
