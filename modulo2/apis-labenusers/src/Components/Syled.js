import styled from "styled-components";

// ---------- GERAIS -----------
export const Butt = styled.button`
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
export const Container = styled.div`
display: flex;
justify-content: space-between;
width: 30%;
margin: 3px auto;
border: solid 2px black;
padding: 7px;
align-items: center;
`
export const Butto = styled.button`
margin: 5px;
height: 25px;
cursor: pointer;
&:hover {
  background-color: orangered;
  color: white;
  transition: 0.3s;
}
`
export const ContainerSuperior = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 100%;
margin: 10px auto;
align-items: center;
`

// ------- LOGIN -----------
export const Margin = styled.input`
margin: 5px;
width: 40%;
padding: 0 14px;
height: 25px;
`
export const ContainerLogin = styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
`
export const Cont = styled.div`
  text-align: center;

`