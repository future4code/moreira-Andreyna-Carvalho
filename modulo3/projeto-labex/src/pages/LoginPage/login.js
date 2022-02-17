import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { urlLogin } from "../../components/url/urls";
import VerificaLogin from "../verificaLogin";
import { Fundo } from "./loginStyled";


export default function Login() {
  //Vou ser uma função de login para entrar no painel do adm
  VerificaLogin();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const history = useHistory();

  const onEmail = (e) => {
    setEmail(e.target.value)
  }
  const onSenha = (e) => {
    setSenha(e.target.value)
  }
  const logar = () => {
    const body = {
      email: email,
      password: senha,
    }
    axios.post(urlLogin, body)
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      history.push('/dashboard')
      console.log('Sucesso', res.data.token);
    })
    .catch((err) => {
      alert('Desculpa, mas esse login não consta no nosso banco de dados')
      console.log('erro na pagina de Login linha 30', err);
    })
  }

  return (
    <Fundo>
      <form>
        <input required placeholder="Seu email" value={email} onChange={onEmail}></input>
        <input required placeholder="Seu email" value={senha} onChange={onSenha}></input>
      </form>
      <button onClick={logar}>Fazer login</button>
      <Link to="/"><button>Voltar para as viagens</button></Link>
    </Fundo>
  );
}