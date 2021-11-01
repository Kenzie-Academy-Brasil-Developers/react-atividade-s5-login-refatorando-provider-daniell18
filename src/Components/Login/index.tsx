import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Container, FormContainer, Paper } from "./style";
import { useAuth } from "../../Providers/Auth/autch";
interface UserData {
  email: string;
  password: string;
}
export const Login = () => {
  const schema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required(),
  });

  const { register, handleSubmit } = useForm<UserData>({
    resolver: yupResolver(schema),
  });
  const teste = (e: UserData) => {
    signIn(e);
  };
  const { signIn } = useAuth();
  return (
    <Container>
      <Paper>
        <h1>SING IN</h1>
        <FormContainer onSubmit={handleSubmit(teste)}>
          <input placeholder="Email" {...register("email")} />
          <input placeholder="Senha" {...register("password")} />
          <Button type="submit">Enviar</Button>
        </FormContainer>
      </Paper>
    </Container>
  );
};
