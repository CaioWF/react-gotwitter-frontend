import React, { useState } from "react";
import twitterLogo from "../../twitter.svg";
import { LoginWrapper, FormLogin, InputLogin, ButtonLogin } from "./styles";

export default function Login({ history }) {
  const [username, setUsername] = useState("");

  const handleInputChange = event => {
    setUsername(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!username.length) return;

    localStorage.setItem("@GoTwitter:username", username);

    history.push("/timeline");
  };

  return (
    <LoginWrapper>
      <img src={twitterLogo} alt="GoTwitter" />
      <FormLogin onSubmit={handleSubmit}>
        <InputLogin
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Nome de usuário"
        />
        <ButtonLogin type="submit">Entrar</ButtonLogin>
      </FormLogin>
    </LoginWrapper>
  );
}
