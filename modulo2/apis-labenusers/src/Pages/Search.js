import React from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import { Butt, Cont, Margin, ContainerLogin  } from "../Components/Syled";

const getAllUsers =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: 'andreyna-carvalho-moreira'
  }
}

export default class Search extends React.Component {

  state = {
    userList: [],
    name:'',
    email: '',
  }

  onInputName = (event) => {
    this.setState({ name: event.target.value });
  };
  onInputEmail = (event) => {
    this.setState({ email: event.target.value });
  };

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

  createUser = () => {
    const search = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=&email="
    
    const body = {
      name: this.state.name,
      email: this.state.email
    }

    axios.get(search, headers)
      .then((res) => {
        this.getAllList();
      })
      .catch((err) => {
        console.log('O problema está na linha 64, create', err);
        this.setState({ name: 'Sorry, but', email: 'error' });
      })
  }

  render() {

    return (
      <Cont>
        <h1> Pesquise pelo nome/email</h1>

        <ContainerLogin>
          <Margin value={this.state.name}
            onChange={this.onInputName} type='text' placeholder="Nome"></Margin>
          <Margin value={this.state.email}
            onChange={this.onInputEmail} type='text' placeholder="Email"></Margin>
          <Butt onClick={this.createUser}>Criar Buscar</Butt>
          <Link to="/home"><Butt>Voltar para</Butt></Link>
        </ContainerLogin>



      </Cont>
    )
  }
}