import * as styled from "./style";
import { useRegister } from "../../hooks/use-register";

export function RegisterForm() {
  const {
    register,
    onSubmit,
    formState: { errors, isSubmitting },
  } = useRegister();

  return (
    <styled.Form onSubmit={onSubmit} noValidate>
      <styled.Label htmlFor="name">
        Nome
      </styled.Label>

      <styled.Input
        id="name"
        type="text"
        placeholder="Digite seu nome"
        autoComplete="name"
        aria-invalid={!!errors.name}
        aria-describedby="name-error"
        {...register("name")}
      />

      {errors.name && (
        <styled.ErrorMessage id="name-error" role="alert">
          {errors.name.message}
        </styled.ErrorMessage>
      )}

      <styled.Label htmlFor="email">
        E-mail
      </styled.Label>

      <styled.Input
        id="email"
        type="email"
        placeholder="Digite seu e-mail"
        autoComplete="email"
        aria-invalid={!!errors.email}
        aria-describedby="email-error"
        {...register("email")}
      />

      {errors.email && (
        <styled.ErrorMessage id="email-error" role="alert">
          {errors.email.message}
        </styled.ErrorMessage>
      )}

      <styled.Label htmlFor="password">
        Senha
      </styled.Label>

      <styled.Input
        id="password"
        type="password"
        placeholder="Digite sua senha"
        autoComplete="new-password"
        aria-invalid={!!errors.password}
        aria-describedby="password-error"
        {...register("password")}
      />

      {errors.password && (
        <styled.ErrorMessage id="password-error" role="alert">
          {errors.password.message}
        </styled.ErrorMessage>
      )}

      <styled.Label htmlFor="confirmPassword">
        Confirmar senha
      </styled.Label>

      <styled.Input
        id="confirmPassword"
        type="password"
        placeholder="Confirme sua senha"
        autoComplete="new-password"
        aria-invalid={!!errors.confirmPassword}
        aria-describedby="confirmPassword-error"
        {...register("confirmPassword")}
      />

      {errors.confirmPassword && (
        <styled.ErrorMessage
          id="confirmPassword-error"
          role="alert"
        >
          {errors.confirmPassword.message}
        </styled.ErrorMessage>
      )}

      {errors.root?.server && (
        <styled.ErrorMessage role="alert">
          {errors.root.server.message}
        </styled.ErrorMessage>
      )}

      <styled.Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Cadastrando..." : "Cadastrar"}
      </styled.Button>
    </styled.Form>
  );
}
