import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, "O nome deve ter pelo menos 3 caracteres"),

    email: z
      .string()
      .min(1, "O e-mail é obrigatório")
      .email("Informe um e-mail válido"),

    password: z
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres"),

    confirmPassword: z
      .string()
      .min(1, "Confirme sua senha"),
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      message: "As senhas não coincidem",
      path: ["confirmPassword"],
    }
  );

// O TypeScript infere os tipos diretamente do schema.
export type RegisterFormValues = z.infer<typeof registerSchema>;
