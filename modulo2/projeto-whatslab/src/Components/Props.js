import React from 'react';
import {Perfil, Header, Bod, Foot, UmTerco, DoisTerco, Input, 
  Mensagem, DistancH4, DistancP, DistancB, Revers} from '../Components/Imgs'
import styled from "styled-components";


export function Head() {

  return (
    <Header>
      <Perfil src='https://img2.gratispng.com/20180414/rpq/kisspng-windows-live-messenger-msn-instant-messaging-micro-viber-5ad1f81fb871d5.4486480315237099837555.jpg'></Perfil>
      <h3>MSN Chat</h3>
      <Perfil src='https://img2.gratispng.com/20180414/rpq/kisspng-windows-live-messenger-msn-instant-messaging-micro-viber-5ad1f81fb871d5.4486480315237099837555.jpg'></Perfil>
    </Header>
  )
}

export class Body extends React.Component {

  state = {
    nome: '',
    msg: '',
    mensagens: [{nome: 'andreyna', msg: 'Hello World'}]
  }

  pegarInput = (event) => this.setState({ nome: event.target.value });
  pegarMsg = (event) => this.setState({ msg: event.target.value });

  addMsg = () => {
    const novoChat = [
      ...this.state.mensagens,
      { nome: this.state.nome, msg: this.state.msg }
    ];
    this.setState({
      mensagens: novoChat,
      nome: "",
      msg: ""
    });
  };

  deletMsg = (indexRecebido) => {
    const novoChat = [...this.state.mensagens].filter(
      (Chat, index) => {
        return index !== indexRecebido;
      }
    );
    this.setState({
      mensagens: novoChat
    });
  };

  teclaEnter = (event) => {
    if (event.keyCode === 13 && this.state.nome != '' && this.state.msg != '') {
      const novoChat = [
        ...this.state.mensagens,
        { nome: this.state.nome, msg: this.state.msg }
      ];
      this.setState({
        mensagens: novoChat,
        nome: "",
        msg: ""
      });
    }
  }
  
  render() {

    const todoChat = this.state.mensagens.map(
      (Chat, indexEnviado) => {
        return (
          <Mensagem key={indexEnviado}>
            <DistancH4>{Chat.nome}:</DistancH4>
            <DistancP>{Chat.msg}</DistancP>
            <DistancB onClick={() => this.deletMsg(indexEnviado)}> delet</DistancB>
          </Mensagem>
        );
      }
    );
    return (
      <Bod>
        <div>
          <UmTerco onKeyDown={this.teclaEnter} placeholder="Nome" value={this.state.nome} onChange={this.pegarInput}></UmTerco>
          <DoisTerco onKeyDown={this.teclaEnter} value={this.state.msg} onChange={this.pegarMsg} placeholder='Mensagem'></DoisTerco>
          <Input onKeyDown={this.teclaEnter} onClick={this.addMsg}>Enviar</Input>
        </div>
        <Revers>
          {todoChat}
        </Revers>
      </Bod>
    )
  }
}

export function Footer() {
  return(
    <Foot>Eu tentei ser um Footer</Foot>
  )
}