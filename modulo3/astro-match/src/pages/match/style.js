import styled from "styled-components";

export const Container = styled.div`
    margin: 20px auto;
	flex-direction: column;
    padding: 20px 50px;
    width: 60%;

    @media (max-width: 768px) {
        padding: 10px;
        width: 100%;
        overflow-x: hidden;
    }

`
export const Dados = styled.div`
    width: 450px;
    display: flex;
    margin: 10px;
`
export const Img = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin: 0 20px;
`
export const NomeH1 = styled.h1`
    color: white;
    margin: 0 30px;
`
export const LimparMatch = styled.img`
    width: 220px;
    cursor: pointer;
`