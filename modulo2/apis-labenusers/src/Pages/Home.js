import axios from "axios";
import React from "react";
import { Link } from 'react-router-dom'
import { Butt, Container, Butto, ContainerSuperior } from "../Components/Syled";


const getAllUsers =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "andreyna-carvalho-moreira"
  }
};

export default class Home extends React.Component {

  state = {
    userList: [],
    userList2: []
  }
  componentDidMount() {
    this.getAllList();
  }


  getAllList = () => {
    axios.get(getAllUsers, headers)
      .then((res) => {
        this.setState({ userList2: res.data })
      })
      .catch((err) => {
        console.log(err.response);
      })
  }

  deletarUser = (id) => {
    const deletUser = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    axios.delete(deletUser, headers)
      .then((res) => {
        this.getAllList();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  verDetalhes = (id) => {
    const viewUser = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    axios.get(viewUser, headers)
      .then((res) => {
        console.log(res.data);
        this.setState({userList: res.data})
        this.getAllList()
      })
      .catch((err) => {
        console.log('sou um erro', err.res);
      })
  }


  render() {

    const components = this.state.userList2.map((lista) => {
      return <Container>
        <li key={lista.id}>{lista.name}</li>
        <button onClick={() => this.verDetalhes(lista.id)}>Detalhes</button>
        <Butto onClick={() => this.deletarUser(lista.id)}>Deletar</Butto>
      </Container>
    })

    /*   const components2 = this.state.userList2.map((lista2) => {
        return <Container>
          <li key={lista2.id}>{lista2.name}{lista2.email}</li>
        </Container>
      }) */

    return (
      <ContainerSuperior>
        <h1> home funciona</h1>
        {components}
        {/*{components2}*/}
        <Link to="/"><Butt>Voltar ao cadastro</Butt></Link>
        <Link to="/search"><Butt>Detalhes por nome</Butt></Link>
      </ContainerSuperior>
    )
  }
}