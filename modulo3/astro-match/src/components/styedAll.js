import styled from "styled-components";

import Fundo from '../components/img/fundo.png';

export const Fundao = styled.div`
    background: url(${Fundo}) repeat center;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-size: cover;
    text-align: center;
    @media (max-width: 768px) {
        overflow-x: hidden;
    }
`

export const Header = styled.header`
    width: 100%; 
    height: 30vh;
`

export const Img = styled.img`
    width: 20%;
    height: 30vh;
    @media (max-width: 768px) {
        width: 50%;
  }

`