import axios from "axios";
import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";

const searchUsers =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=&email=";

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

export default class Details extends React.Component {

  state = {
    userList: [],
  }
  componentDidMount() {
    this.getAllList();
  }

  getAllList = () => {
    axios.get(searchUsers, headers)
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
      return <li key={lista.id}>{lista.name}{lista.email}</li>
    })

    return (
      <div>
        <h1> Details</h1>
        <input value={this.state.name}
          onChange={this.onInputName} type='text' placeholder="Seu nome"></input>
        <button></button>
        {components}
        
        <Link to="/home"><Butt>Voltar a Lista</Butt></Link>
      </div>
    )
  }
}