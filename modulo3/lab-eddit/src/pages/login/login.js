import React from "react";
import FormLogin from "../../assents/formLogin";
import { useNavigate } from "react-router-dom"

export default function Login() {
  const navigate = useNavigate();

  const registerPage = () => {
    navigate('/register')
  }

  return (
    <div>
      <h1>Sou Login</h1>
      <FormLogin/>
      <button onClick={registerPage}>Não possui conta? Cadastre-se</button>
    </div>
  );
}