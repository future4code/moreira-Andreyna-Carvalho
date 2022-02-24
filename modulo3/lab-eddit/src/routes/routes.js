import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { Fundo, Header, Img } from "../components/header";
import Comments from "../pages/comments/comments";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Post from "../pages/post/post";
import Register from "../pages/register/register";
import Logo from '../constants/imgs/logo.png'
import { Footer } from "../components/footer";

export default function RoutesAll() {

  return (
    <Fundo>
      <Header>
        <Img src={Logo}></Img>
      </Header>

    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home />} /> 
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/register' element={<Register />} />
      <Route exact path='/posts' element={<Post />} />
      <Route exact path='/comments-post' element={<Comments />} />
    </Routes>
  </BrowserRouter>

  <Footer>
    <h3>Todos os direitos reservados UrOpine &copy;</h3>
  </Footer>
  </Fundo>
  )
}
