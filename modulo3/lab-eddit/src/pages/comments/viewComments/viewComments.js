import React, { useEffect, useState } from "react";
import axios from "axios";
import { Auth, Post_url } from "../../../constants/urls";

export default function ViewsComments() {
  const [ infoDetailPost, setInfoDetailPost] = useState([])

  let idComments = localStorage.getItem('idComments')

  const getCommentsId = () => {
    axios.get(`${Post_url}/${idComments}/comments`, Auth)
    .then((res) => {
      setInfoDetailPost(res.data);
    })
    .catch((err) => {
      alert('Problema na requisição dos comentários')
  })
  }

  useEffect(() => {
    getCommentsId();
  }, [infoDetailPost])

  return (
    <div>
      <h1>Todos os comentários</h1>
      {infoDetailPost && infoDetailPost.length > 0 ? infoDetailPost.map((posts) => {
          return <div key={posts.id}>
            <div>
                <p>{posts.username}</p>
                <p>{posts.body}</p>
                <p>{posts.voteSum}</p>
            </div>
            </div>
        }) : <p>Carregando comentários</p>}
    </div>
  );
}