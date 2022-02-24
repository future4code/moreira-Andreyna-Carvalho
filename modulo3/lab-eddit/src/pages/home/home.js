import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from '../../constants/imgs/nomeLogo.png'
import { Container, FundoBalao, H1, Paragrafo, TamanhoDivImg, TamanhoImg } from "./styledHome";

export default function Home() {
  const navigate = useNavigate();

  const login = () => {
    navigate('/login') 
  }
  const register = () => {
    navigate('/') 
  }

  return (
    <Container>
      <TamanhoDivImg>
        <TamanhoImg src={Banner}></TamanhoImg>
        <H1>Mostre ao mundo as suas ideias!</H1>
        <FundoBalao>
          <Paragrafo>+ Entre para a comunidade da Labenu</Paragrafo>
          <Paragrafo>+ Conheça pessoas e redija texto cativantes</Paragrafo>
          <Paragrafo>+ Adquira conhecimento e interaja</Paragrafo>
          <Paragrafo>+ Conquiste o seu publico e outras turmas</Paragrafo>
          <Paragrafo>+ Tenha visibilizade</Paragrafo>
        </FundoBalao>
      </TamanhoDivImg>
      <div>
        <button onClick={login}>Entrar</button>
        <button onClick={register}>Registra-se</button>
      </div>
    </Container>
  );
}