import { useHistory, Redirect } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import InputPassword from "../../components/InputPassword";
import { ContainerLogin, Titulo } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

const Login = ({ authenticated, setAuthenticated }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 digitos")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleLogin = (data) => {
    api
      .post("/sessions", data)
      .then((res) => {
        const { token, user } = res.data;
        localStorage.setItem("@kenziehub:token", JSON.stringify(token));
        localStorage.setItem("@kenziehub:username", JSON.stringify(user));

        setAuthenticated(true);

        return history.push("/dashboard");
      })
      .catch((err) => toast.error("Email ou senha inválidos"));
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <Titulo> Kenzie Hub</Titulo>
      <ContainerLogin>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <h3>
            Email <span> {errors ? errors.email?.message : ""}</span>
          </h3>
          <Input
            type="email"
            register={register}
            placeholder="Digite seu email"
            name="email"
          />
          <h3>
            Senha <span> {errors ? errors.password?.message : ""}</span>
          </h3>
          <InputPassword
            register={register}
            name="password"
            placeholder="Digite sua senha"
          />
          <Button type="submit">Entrar</Button>
        </form>
        <span>Ainda não possui uma conta?</span>
        <Button
          bgcor="#868E96"
          cor="#F8F9FA"
          borderColor="#868E96"
          onClick={() => history.push("/register")}
        >
          Cadastre - se
        </Button>
      </ContainerLogin>
    </>
  );
};

export default Login;
