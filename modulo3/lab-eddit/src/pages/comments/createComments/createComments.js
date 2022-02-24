import React from "react";
import axios from "axios";
import useForm from "../../../hooks/useForm";
import { Auth, Post_url } from "../../../constants/urls";

export default function CreateComments() {
  const [form, onChange, clear ] = useForm({body:''})

  let idComments = localStorage.getItem('idComments')

  const commentsCreate = (e) => { 
    e.preventDefault()
   
    axios.post(`${Post_url}/${idComments}/comments`, form, Auth)
    .then((res) => {
      alert('Comentário enviado com sucesso!');
      clear();
    })
    .catch((err) => {
      alert('Sentimos muito, mas não foi possível enviar esse comentário!')
    })
  }

  return (
    <div>
      <h1>Envio do comentário</h1>
      <form onSubmit={commentsCreate}>
        <input required name="body" type={'text'} value={form.body} onChange={onChange} placeholder="Envie seu comentário"></input>
        <button type="submit" onClick={commentsCreate}>Enviar comentário</button>
      </form>
    </div>
  );
}