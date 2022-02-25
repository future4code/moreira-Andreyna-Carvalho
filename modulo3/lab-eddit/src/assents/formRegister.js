import React, { useEffect } from "react";
import useForm from "../hooks/useForm";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { Register_url } from "../constants/urls";
import { Buttons, Container, Form, Input } from "../components/styledFormsLoginRegister";

export default function FormRegister() {
  const navigate = useNavigate();

  const [ form, onChange ] = useForm({username: '', email:'', password: ''})
 
  const registerAccount = () => {    
    axios.post(Register_url, form)
    .then((res) => {
      alert('Cadastro realizado com sucesso! Bom proveito')
      localStorage.setItem('tokenEddit', res.data.token);
      navigate('/')
    })
    .catch((err) => {
      alert('Sentimos muito, mas não foi possível realizar seu cadastro')
    })
  }
  const keyPressEnter = (e) => {
    if(e.key === 'Enter' && form.name !== '' && form.email !== '' && form.username !== ''){
      console.log('Oi');
      registerAccount()
    }
  }

  return (
    <Container>
      <Form onSubmit={registerAccount}>
        <Input onKeyPress={keyPressEnter} required name="username" type={'text'} value={form.username} onChange={onChange} placeholder="Crie seu nome de usuário"></Input>
        <Input onKeyPress={keyPressEnter} required name="email" type={'email'} value={form.email} onChange={onChange} placeholder="Digite seu melhor email"></Input>
        <Input onKeyPress={keyPressEnter} required name="password" minLength={'8'} maxLength={'30'} type={'password'} value={form.password} onChange={onChange} placeholder="Crie sua senha"></Input>
      </Form>
      <Buttons onKeyPress={keyPressEnter} onClick={registerAccount}>Fazer cadastro</Buttons>
    </Container>
  );
}