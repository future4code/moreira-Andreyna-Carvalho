import styled from "styled-components";

export const DivCreateComments = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4% 0;
`

export const H1 = styled.h1`
  font-size: 42px;
  color: #21CDD9;
  padding-top: 20px;
  @media (max-width: 700px) {
		padding: 2% 4%;
    font-size: 45px;
    text-align: left;
	}
`

export const ContainerProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 35px;
  height: 7vh;
  overflow: hidden;
  background-color: rgba(30,35,45,1);
`
export const ButtonRemove= styled.button`
  width: 60%;
  margin: 0 4%;
  color: #21CDD9;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  margin-top: 2px;
  background-color: transparent;
  border-color: #21CDD9;
  :hover{
    background-color: #21CDD9;
    color: black;
    transition: 0.5s;
  }
`