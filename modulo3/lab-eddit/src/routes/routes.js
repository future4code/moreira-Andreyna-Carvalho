import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Comments from "../pages/comments/comments";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Post from "../pages/post/post";
import Register from "../pages/register/register";

export default function RoutesAll() {
  return (
    <BrowserRouter>
    <Routes>

      <Route exact path='/' element={<Home />} /> 
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/register' element={<Register />} />
      <Route exact path='/posts' element={<Post />} />
      <Route exact path='/comments-post' element={<Comments />} />
      
    </Routes>
  </BrowserRouter>
  )
}
