import styled from "styled-components";

export const Container = styled.div`
    margin: 20px auto;
	flex-direction: column;
    padding: 20px 50px;
    width: 60%;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    background:rgba(300, 300, 300,0.3);
    @media (max-width: 768px) {
        padding: 0;
        margin: auto;
        width: 90%;
        overflow-x: hidden;
    }

`
export const Dados = styled.div`
    width: 450px;
    display: flex;
    margin: 10px;
    @media (max-width: 768px) {
        padding: 0;
        margin: auto;
        width: 90%;
        overflow-x: hidden;
    }
`
export const Img = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 90px;
    margin: 0 20px;
    border: solid 2px black;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`
export const NomeH1 = styled.h1`
    align-items: center;
    display: flex;
    color: white;
    margin: 0 auto;
`
export const LimparMatch = styled.img`
    width: 220px;
    cursor: pointer;
`