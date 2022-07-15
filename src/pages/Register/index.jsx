import { useHistory, Redirect } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import InputPassword from "../../components/InputPassword";
import { ContainerRegister, Titulo, Header, Select } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

const Registro = ({ authenticated }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 digitos")
      .required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
    course_module: yup.string().required("Informar um módulo"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleregister = (data) => {
    const user = { ...data, bio: " ", contact: " " };
    delete user.confirmPassword;

    api
      .post("/users", user)
      .then((_) => {
        toast.success("Sucesso ao criar a conta");
      })
      .catch((err) =>
        toast.error("Email ja cadastrado, por favor informe outro email!")
      );
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <Header>
        <Titulo> Kenzie Hub</Titulo>
        <Button
          cor="#F8F9FA"
          bgcor="#212529"
          borderColor="#212529"
          width="80px"
          height="25px"
          onClick={() => history.push("/")}
        >
          Voltar
        </Button>
      </Header>
      <ContainerRegister>
        <h2>Crie sua conta</h2>
        <span>Rápido e grátis, vamos nessa</span>
        <form onSubmit={handleSubmit(handleregister)}>
          <h3>
            Nome <span> {errors ? errors.name?.message : ""}</span>
          </h3>
          <Input
            type="text"
            placeholder="Digite aqui seu nome"
            register={register}
            name="name"
          />
          <h3>
            Email <span> {errors ? errors.email?.message : ""}</span>
          </h3>
          <Input
            type="email"
            placeholder="Digite aqui seu email"
            register={register}
            name="email"
          />
          <h3>
            Senha <span> {errors ? errors.password?.message : ""}</span>
          </h3>
          <InputPassword
            register={register}
            name="password"
            placeholder="Digite aqui sua senha"
          />
          <h3>
            Confirmar Senha
            <span> {errors ? errors.confirmPassword?.message : ""}</span>
          </h3>
          <InputPassword
            register={register}
            placeholder="Confirme aqui sua senha"
            name="confirmPassword"
          />
          <h3>
            Selecionar módulo
            <span> {errors ? errors.course_module?.message : ""}</span>
          </h3>
          <Select name="course_module" {...register("course_module")}>
            <option>Selecione uma opção</option>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Quarto módulo (Backend Avançado)
            </option>
          </Select>
          <Button type="submit">Cadastrar</Button>
        </form>
      </ContainerRegister>
    </>
  );
};

export default Registro;
