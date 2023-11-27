import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import './App.css';

const validationPost = yup.object().shape({
  username: yup
    .string()
    .required("O título é obrigatório")
    .max(40, "Tamanho até 40 carac..."),
  password: yup
    .string()
    .required("A descrição é obrigatória")
    .max(100, "Tamanho at´100 carac..."),
});

export default function Login() {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationPost) });

  const addUser = (data) =>
  axios
    .post("https://655e45bb9f1e1093c59ad580.mockapi.io/api/v1/login", data)
    .then(() => {
      console.log("Deu certo");
      navigate("/App");
      navigate("./userinfo"); 
    })
    .catch(() => console.log("Deu ruim"));

  return (
    <div>
      <main>
        <div className="card-post">
          <h1>Login de Administrador</h1>
          <hr />
          <div className="card-body-post">
            <form onSubmit={handleSubmit(addUser)}>
              <div className="fields">
                <label htmlFor="username">Usuário</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  {...register("username")}
                />
                <p className="error-message">{errors.username?.message}</p>
              </div>

              <div className="fields">
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  {...register("password")}
                />
                <p className="error-message">{errors.password?.message}</p>
              </div>

              <div className="btn-post">
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
