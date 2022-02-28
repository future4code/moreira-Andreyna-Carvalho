import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
`

export const ContainerDados = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  margin: 2% 0;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
	}
`
export const Buttons = styled.button`
  margin: 0 5%;
  width: 500px;
  height: 40px;
  color: #21CDD9;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  margin-top: 20px;
  background-color: transparent;
  border-radius: 20px;
  border-color: #21CDD9;
  :hover{
    background-color: #21CDD9;
    color: black;
    transition: 0.5s;
  }
  @media (max-width: 700px) {
      width: 80%;
      margin: 2%;
      margin-bottom: 10%;
	}
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 70%;
	margin: 3% auto;
	@media (max-width: 700px) {
		margin: 2% 10%;
		width: 300px;
	}
	@media (min-width: 1600px) {
		width: 80%;
		margin: 8% auto;
	}
`
export const Input = styled.input`
	background: rgba(33,205,217,1);
	height: 45px;
	margin: 1% 0;
	padding: 10px 30px;
  border-radius: 15px;
	font-weight: bolder;
  border-color: black;
  outline: none;
	::placeholder {
       color: white;
   }
	 @media (min-width: 1600px) {
		height: 60px;
	}
`
export const InputBody = styled.input`
	background: rgba(33,205,217,1);
	height: 80px;
	padding: 5px 20px;
  border-radius: 20px;
	font-weight: bolder;
  border-color: black;
  outline: none;
	::placeholder {
       color: white;
   }
	 @media (min-width: 1600px) {
		height: 120px;
	}
`

export const ButtonsPost= styled.button`
  margin-right: 0;
  margin-left: 60%;
  width: 40%;
  height: 40px;
  color: #21CDD9;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  margin-top: 2px;
  background-color: transparent;
  border-radius: 10px;
  border-color: #21CDD9;
  :hover{
    background-color: #21CDD9;
    color: black;
    transition: 0.5s;
  }
  @media (max-width: 700px) {
      width: 99%;
      margin: 1%;
      margin-bottom: 10%;
	}
`
export const ImgProfile = styled.img`
  width: 15%;
  border-radius: 80px;
  overflow: hidden;
`
export const ImgPost = styled.img`
  width: 350px;
`
export const Loading = styled.img`
  width: 25%;
  margin-bottom: 30px;
`

export const ContainerCard = styled.div`
  border: dashed 2px  #21CDD9;
  margin: 20px auto;
  width: 60%;
`
export const ContainerProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 35px;
  height: 12vh;
  overflow: hidden;
  background-color: rgba(30,35,45,1);
`
export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  height: 8vh;
  overflow: hidden;
  background-color: rgba(30,35,45,1);
`

export const ParagrafoText = styled.p`
  font-size: 22px;
  font-weight: bolder;
  color: #21CDD9;
  padding-left: 7%;
  justify-content: center;
  @media (max-width: 700px) {
		padding: 2% 4%;
	}
`