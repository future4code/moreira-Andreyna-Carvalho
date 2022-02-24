import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const Login = () => {
    localStorage.removeItem('tokenEddit');
    navigate('/login') 
  }

  return (
    <div>
      <h1>Sou a Home</h1>
      <button onClick={Login}>Entrar</button>
    </div>
  );
}