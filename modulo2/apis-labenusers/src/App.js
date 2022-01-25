import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Details from './Pages/Details';
import styled from "styled-components";

const Lin = styled.span`
      color: white;
      text-decoration: none;
      margin: 0 30px;
      &:hover {
          color: orangered;
          transition: 0.3s;
      }
  `
const Nav = styled.nav`
      text-align: center;
  `
const Head = styled.header`
      padding: 20px 0;
      background-color: black;
      opacity: 0.9;
  `
const Foot = styled.footer`
      width: 100%;
      padding: 2px 0;
      background-color: black;
      opacity: 0.9;
      position: relative;
      bottom:0;
      left:0;
      color: white;
      text-align: center;
  `
const ExDig = styled.span`
      display: none;
  `

export default class App extends React.Component {


  render() {


    return (
      <div>
        <Head>
          <Nav>
            <Link to="/"> <ExDig>Login </ExDig></Link>
            <Link to="/home" > <ExDig>Loja </ExDig> </Link>
            <Link to="/details" > <ExDig>Loja </ExDig> </Link>
            <Lin>Seja bem-vindo(a)</Lin>
          </Nav>
        </Head>
        <main>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/details' component={Details} />
          </Switch>
        </main>

        <Foot>
          <h3>Todos os direitos reservados &copy;</h3>
        </Foot>
      </div>
    )
  }
}