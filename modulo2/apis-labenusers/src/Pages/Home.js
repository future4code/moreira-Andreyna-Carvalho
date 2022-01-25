import axios from "axios";
import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";

const getAllUsers =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "andreyna-carvalho-moreira"
  }
};

const Butt = styled.button`
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

export default class Home extends React.Component {

  state = {
    userList: [],
  }
  componentDidMount() {
    this.getAllList();
  }

  getAllList = () => {
    axios.get(getAllUsers, headers)
      .then((res) => {
        console.log(res.data);
        this.setState({ userList: res.data })
      })
      .catch((err) => {
        console.log(err.response);
      })
  }
  

  render() {

    const components = this.state.userList.map((lista) => {
      return <li key={lista.id}>{lista.name}</li>
    })

    return (
      <div>
        <h1> home funciona</h1>
        {components}
        <Link to="/"><Butt>Voltar ao cadastro</Butt></Link>    
        <Link to="/details"><Butt>Ir para detalhes</Butt></Link>
      </div>
    )
  }
}