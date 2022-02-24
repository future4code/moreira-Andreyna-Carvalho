import React, { useEffect } from "react";
import CheckLogin from "../../assents/checkLogin";
import { useNavigate } from "react-router-dom";
import ViewPost from "./viewPosts/viewPost";
import CreatePost from "./createPost/createPost";

export default function Post() {
  CheckLogin();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('tokenEddit');
    navigate('/') 
  }

  return (
    <div>
      <h1> Sou o Post</h1>
      <button onClick={logout}>Sair da conta</button>
      <CreatePost/>
      <ViewPost/>
    </div>
  );
}