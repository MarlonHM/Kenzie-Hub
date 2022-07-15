import { useEffect } from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import Button from "../../components/Button";
import EditModal from "../../components/EditModal";
import Modal from "../../components/Modal";
import api from "../../services/api";
import {
  Container,
  DivUser,
  MyButton,
  DivTech,
  TechList,
  SpanTitle,
  SpanStatus,
} from "./style";

const Dashboard = ({ authenticated, setAuthenticated }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editIsModalVisible, setEditIsModalVisible] = useState(false);
  const [techs, setTechs] = useState([]);
  const [stringTech, setStringTech] = useState("");
  const [currentRecord, setCurrentRecord] = useState();

  const token = JSON.parse(localStorage.getItem("@kenziehub:token"));
  const user = JSON.parse(localStorage.getItem("@kenziehub:username"));

  useEffect(() => {
    let unmounted = true;
    api
      .get(`users/${user.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (unmounted) {
          setTechs(res.data.techs);
        }
      })
      .catch((err) => console.log(err));

    return () => {
      unmounted = false;
    };
  }, [techs]);

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  const { name, course_module } = JSON.parse(
    localStorage.getItem("@kenziehub:username")
  );

  const logout = () => {
    localStorage.clear();
    setAuthenticated(false);
  };

  const selected = (tech, id) => {
    setStringTech(tech);
    setCurrentRecord(id);
  };

  return (
    <>
      <Container>
        <div>
          <h2>Kenzie Hub</h2>
          <Button
            onClick={logout}
            borderColor="#212529"
            height="30px"
            width="60px"
            bgcor="#212529"
          >
            Sair
          </Button>
        </div>
        <hr />
        <DivUser>
          <h3>Olá, {name}</h3>
          <span>{course_module}</span>
        </DivUser>
        <hr />
        <DivTech>
          <h3>Tecnologias</h3>
          <MyButton onClick={() => setIsModalVisible(true)}>+</MyButton>
        </DivTech>
        <TechList>
          <div>
            <ul>
              {techs.map((tech) => {
                return (
                  <li
                    key={tech.id}
                    onClick={() => {
                      setEditIsModalVisible(true);
                      selected(tech.title, tech.id);
                    }}
                  >
                    <SpanTitle>{tech.title}</SpanTitle>
                    <SpanStatus>{tech.status}</SpanStatus>
                  </li>
                );
              })}
            </ul>
          </div>
        </TechList>
        <section>
          {isModalVisible ? (
            <Modal setIsModalVisible={setIsModalVisible} />
          ) : null}
          {editIsModalVisible ? (
            <EditModal
              currentRecord={currentRecord}
              stringTech={stringTech}
              setEditIsModalVisible={setEditIsModalVisible}
            />
          ) : null}
        </section>
      </Container>
    </>
  );
};

export default Dashboard;
