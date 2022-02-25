import React from "react";
import axios from "axios";
import { Post_url } from "../../../constants/urls";
import useForm from "../../../hooks/useForm";
import { ButtonsPost, Container, Form, Input, InputBody } from "../styledPost";

export default function CreatePost(){
  const [ form, onChange, clear ] = useForm({title: '', body:''})

  const submit = (e) => {
    e.preventDefault()
  }

  const postPosts = () => {
    axios.post(Post_url, form, {
      headers: {
        Authorization: localStorage.getItem('tokenEddit')
      }
		})
    .then((res) => {
      alert('Conteúdo publicado com sucesso!')
      clear();
    })
    .catch((err) => {
      alert('Sentimos muito, mas não foi possível criar essa publicação')
    })
  }

  return (
    <Container>
      <h1>Criar Post</h1>
      <Form onSubmit={submit}>
        <Input required name="title" type={'text'} value={form.title} onChange={onChange} placeholder="Título"></Input>
        <InputBody required name="body" type={'text'} value={form.body} onChange={onChange} placeholder="Conteúdo"></InputBody>
        <ButtonsPost type="submit" onClick={postPosts}> Enviar Post</ButtonsPost>
      </Form>    
    </Container>
  );
}