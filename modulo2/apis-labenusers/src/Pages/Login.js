import React from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import { Butt, Cont, Margin, ContainerLogin  } from "../Components/Syled";

const urlCreate = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const getAllUsers =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: 'andreyna-carvalho-moreira'
  }
}

export default class Login extends React.Component {

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
    const body = {
      name: this.state.name,
      email: this.state.email
    }

    axios.post(urlCreate, body, headers)
      .then((res) => {
        this.setState({ name: '', email: ''})
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
        <h1> Faça seu Login</h1>

        <ContainerLogin>
          <Margin value={this.state.name}
            onChange={this.onInputName} type='text' placeholder="Seu nome"></Margin>
          <Margin value={this.state.email}
            onChange={this.onInputEmail} type='email' placeholder="Seu melhor email"></Margin>
          <Butt onClick={this.createUser}>Criar usuário</Butt>
          <Link to="/home"><Butt>Fazer Login</Butt></Link>
        </ContainerLogin>



      </Cont>
    )
  }
}