import React from "react";
import axios from "axios";
import useForm from "../../../hooks/useForm";
import { Auth, Post_url } from "../../../constants/urls";

export default function CreateComments() {
  const [form, onChange, clear ] = useForm({body:''})

  let idComments = localStorage.getItem('idComments')

  const commentsCreate = () => {    
    axios.post(`${Post_url}/${idComments}/comments`, form, Auth)
    .then((res) => {
      alert('Comentário enviado com sucesso!');
      this.getCommentsId()
      clear();
    })
    .catch((err) => {
      alert('Sentimos muito, mas não foi possível enviar esse comentário!')
    })
  }
  
  const keyPressEnter = (e) => {
    if(e.key === 'Enter' && form.body !== ''){
      commentsCreate();
    }
  }

  return (
    <div>
      <form>
        <input onKeyPress={keyPressEnter} required name="body" type={'text'} value={form.body} onChange={onChange} placeholder="Envie seu comentário"></input>
        <button onKeyPress={keyPressEnter} onClick={commentsCreate}>Enviar comentário</button>
      </form>
    </div>
  );
}