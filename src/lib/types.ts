import { z } from "zod";

export const FormSchema = z.object({
  email: z.string().describe("email").email({ message: "Invalid email" }),
  password: z.string().describe("Password").min(1, "Password is required"),
});
