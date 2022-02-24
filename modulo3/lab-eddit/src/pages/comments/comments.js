import React from "react";
import { useNavigate } from "react-router-dom";
import CreateComments from "./createComments/createComments";
import ViewsComments from "./viewComments/viewComments";

export default function Comments() {
  const navigate = useNavigate();

  const returnPosts = () => {
    localStorage.removeItem('idComments');
    navigate('/posts') 
  }

  return (
    <div>
      <div><CreateComments/></div>
      <div><ViewsComments/> </div>
        <button onClick={returnPosts}>Voltar aos posts</button>
    </div>
  );
}