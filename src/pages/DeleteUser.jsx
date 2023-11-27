import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const DeleteUser = ({ match, history }) => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`https://655e45bb9f1e1093c59ad580.mockapi.io/api/v1/login/${userId}`)
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(
          `Erro ao obter dados do usuário com ID ${userId}:`,
          error
        );
      });
  }, [userId]);

  const handleDeleteUser = () => {
    axios
      .delete(
        `https://655e45bb9f1e1093c59ad580.mockapi.io/api/v1/login/${userId}`
      )
      .then(() => {
        console.log(`Usuário com ID ${userId} excluído com sucesso.`);
        alert("Usuário deletado com sucesso!");
      })
      .catch((error) => {
        console.error(`Erro ao excluir usuário com ID ${userId}:`, error);
      });
  };

  return (
    <div>
      {user !== null && (
        <div>
          <Link to={"/userinfo"}>Voltar inicio</Link>
          <p>{user.username}</p>
          <p>Tem certeza que deseja excluir este usuário?</p>
          <button onClick={handleDeleteUser}>Sim, Excluir</button>
        </div>
      )}
    </div>
  );
};

export default DeleteUser;
