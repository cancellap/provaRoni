import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserInfo = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios
      .get("https://655e45bb9f1e1093c59ad580.mockapi.io/api/v1/login")
      .then((response) => {
        setUserData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erro ao obter dados do usuário:", error);
      });
  }, []);

  return (
    <div>
      {userData !== null &&
        userData.map((user) => (
          <div key={user.id}>
            <p>{user.username}</p>
            <Link to={`/delete/${user.id}`}>Excluir</Link>
          </div>
        ))}
    </div>
  );
};

export default UserInfo;
