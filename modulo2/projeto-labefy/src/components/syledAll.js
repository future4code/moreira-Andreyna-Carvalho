import styled from "styled-components";

//DESIGNER O APP.JS
export const All = styled.div `
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`

export const DesignerTop = styled.a `
    color: white;
    text-decoration: none;
    margin: 0 30px;
    text-decoration-color: black;
    &:hover {
        color: orangered;
        transition: 0.3s;
    }
    `
export const Nav = styled.nav `
    text-align: center;
    `

export const Head = styled.header `
    width: 100%;
    padding: 20px 0;
    background-color: black;
    opacity: 0.9;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    `

export const Foot = styled.footer `
    width: 100%;
    padding: 2px 0;
    height: 40px;
    background-color: black;
    opacity: 0.9;
    position: fixed;
    bottom:0;
    left:0;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
`

export const SpanNone = styled.span `
    display: none;
`

// ---------- GERAIS -----------
export const Butt = styled.button `
margin: 5px;
padding: 0 90px;
height: 25px;
cursor: pointer;
&:hover {
  background-color: orangered;
  color: white;
  transition: 0.3s;
}
`

// ----------- HOME -------------
export const Container = styled.div `
    display: flex;
    justify-content: space-between;
    width: 30%;
    margin: 3px auto;
    border: solid 2px black;
    padding: 7px;
    align-items: center;
    `
export const Butto = styled.button `
    margin: 5px;
    height: 25px;
    cursor: pointer;
    &:hover {
    background-color: orangered;
    color: white;
    transition: 0.3s;
    }
`
export const ContainerSuperior = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin: 10px auto;
    align-items: center;
    `

// ------- LOGIN -----------
export const Margin = styled.input `
    margin: 5px;
    width: 40%;
    padding: 0 14px;
    height: 25px;
    `
export const ContainerLogin = styled.div `
    display: flex;
    flex-direction: column;
    height: auto;
    max-width: 1280px;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    `
export const ContLogin = styled.div `
    width: 100%;
    text-align: center;
    height: 500px;
    `

// ANYMEFYYY
export const ContAnyme = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
`
export const SearchAnim = styled.div `
    margin: 10px 0;
    width: 100%;
`
export const Tittle = styled.h1 `
    margin: 20px;
`
export const TittleH2 = styled.h2 `
    margin-bottom: 10px;
`
export const ButSearch = styled.button `
    height: 25px;
    width: 140px;
    margin: 0 2px;
    cursor: pointer;
    &:hover {
        background-color: blue;
        opacity: 0.5;
        color: white;
        border-radius: 70px;
        transition: 0.4s;
    }
`
export const InputSearch = styled.input `
    height: 25px;
    width: 280px;
    padding: 3px 7px;
`
export const ListAnyme = styled.div `
    margin: 10px 0;
`
export const List = styled.li`
    width: 400px;
    height: 40px;
    color: black;
    border: solid 2px blue;
    margin: 14px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover{
        background-color: #add8e6;
    }
`