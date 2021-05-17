import React from "react";

import logoMarvel from "../../assets/images/logo-marvel.png";
import { useHistory } from "react-router-dom";
import { Title, Img, LoginDiv, Form } from "./styles";

const Login: React.FC = () => {
  const history = useHistory();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push("/personagens");
  };

  return (
    <>
      <div className="bg-gradiente">
        <LoginDiv>
          <Img src={logoMarvel} alt="Logo Marvel" />
          <div className="content">
            <Title>Bem-vindo(a) de volta!</Title>
            <p>Acesse sua conta:</p>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <input placeholder="Usuário" required />
              <input type="password" placeholder="Senha" required />
              <div className="login-options">
                <div>
                  <label className="login-options-salvar">
                    Salvar login
                    <input name="checkbox" type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <span className="login-options-esqueci">Esqueci a senha</span>
              </div>
              <button type="submit">Entar</button>
            </Form>
            <h4>
              Ainda não tem o login? <span>Cadastre-se</span>
            </h4>
          </div>
        </LoginDiv>
      </div>
    </>
  );
};

export default Login;
