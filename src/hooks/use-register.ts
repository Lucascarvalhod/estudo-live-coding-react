import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  registerSchema,
  type RegisterFormValues,
} from "../features/schema";

export function useRegister() {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    mode: "onBlur",
  });

  async function onSubmit(values: RegisterFormValues) {
    try {
      // Não precisamos enviar a confirmação de senha para a API.
      const { confirmPassword, ...userData } = values;

      // Aqui entraria a chamada ao serviço de cadastro.
      console.log("Dados enviados para a API:", userData);

    } catch (error) {
      form.setError("root.server", {
        type: "server",
        message: "Não foi possível realizar o cadastro.",
      });
    }
  }

  return {
    ...form,
    onSubmit: form.handleSubmit(onSubmit),
  };
}
