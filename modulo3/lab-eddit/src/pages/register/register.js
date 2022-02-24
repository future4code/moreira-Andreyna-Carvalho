import React from "react";
import { useNavigate } from "react-router-dom"
import FormRegister from "../../assents/formRegister";

export default function Register() {
  const navigate = useNavigate();

  const returnLogin = () => {
    navigate('/login')
  }

  return (
    <div>
      <h1>Sou um Register</h1>
      <FormRegister/>
      <button onClick={returnLogin}>Já possui Login? Faça Login!</button>
    </div>
  );
}