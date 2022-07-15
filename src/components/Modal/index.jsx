import { ContainerModal, DivForm, Cabecalho, Select, Cadastrar } from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

const Modal = ({ setIsModalVisible }) => {
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const token = JSON.parse(localStorage.getItem("@kenziehub:token"));

  const techs = (data) => {
    api
      .post("/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => toast.success("Tecnologia cadastrada com sucesso"))
      .catch((_) => toast.error("Tecnologia ja cadastrada!"));
  };

  return (
    <ContainerModal>
      <Cabecalho>
        <Cadastrar>Cadastrar Tecnologia</Cadastrar>
        <button onClick={() => setIsModalVisible(false)}> X </button>
      </Cabecalho>
      <DivForm>
        <form onSubmit={handleSubmit(techs)}>
          <h3>
            Nome <span> {errors ? errors.title?.message : ""}</span>
          </h3>
          <Input
            placeholder="insira um nome"
            type="text"
            register={register}
            name="title"
          />
          <h3>
            Selecionar status{" "}
            <span> {errors ? errors.status?.message : ""}</span>
          </h3>
          <Select name="status" {...register("status")}>
            <option>Selecione uma opção</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <Button type="submit">Cadastrar Tecnologia</Button>
        </form>
      </DivForm>
    </ContainerModal>
  );
};

export default Modal;
