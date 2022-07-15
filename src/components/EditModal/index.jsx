import { ContainerModal, DivForm, Cabecalho, Select, Cadastrar } from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

const EditModal = ({ setEditIsModalVisible, stringTech, currentRecord }) => {
  const schema = yup.object().shape({
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
      .put(`/users/techs/${currentRecord}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => toast.success("Tecnologia alterada com sucesso"))
      .catch((_) => toast.error("Ocorreu um erro!"));
  };

  const deletar = () => {
    api
      .delete(`/users/techs/${currentRecord}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => toast.success("Tecnologia excluída com sucesso"))
      .catch((_) => toast.error("Ocorreu um erro!"));
  };

  return (
    <ContainerModal>
      <Cabecalho>
        <Cadastrar>Tecnologia detalhes</Cadastrar>
        <button onClick={() => setEditIsModalVisible(false)}> X </button>
      </Cabecalho>
      <DivForm>
        <form onSubmit={handleSubmit(techs)}>
          <h3>Nome do projeto</h3>
          <Input
            placeholder={stringTech}
            type="text"
            register={register}
            name="title"
            disabled={true}
          />

          <h3>
            Status <span> {errors ? errors.status?.message : ""}</span>
          </h3>
          <Select name="status" {...register("status")}>
            <option>Selecione uma opção</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <section>
            <Button
              width="200px"
              borderColor="#59323F"
              bgcor="#59323F"
              type="submit"
            >
              Salvar alterações
            </Button>
            <Button
              type="button"
              width="98px"
              borderColor="#868E96"
              bgcor="#868E96"
              onClick={() => deletar()}
            >
              Excluir
            </Button>
          </section>
        </form>
      </DivForm>
    </ContainerModal>
  );
};

export default EditModal;
