import React from "react";
import axios from "axios";
import { Post_url } from "../../../constants/urls";
import useForm from "../../../hooks/useForm";

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
    <div>
      <h1>Criar Post</h1>
      <form onSubmit={submit}>
        <input required name="title" type={'text'} value={form.title} onChange={onChange} placeholder="Título"></input>
        <input required name="body" type={'text'} value={form.body} onChange={onChange} placeholder="Conteúdo"></input>
      </form>
      <button type="submit" onClick={postPosts}> Enviar Post</button>
    
    </div>
  );
}