import React from 'react';
import {
  Bod, UmTerco, DoisTerco, Input,
  Mensagem, DistancH4, DistancP, Revers, Me}
  from '../Components/Imgs'
  

export class Body extends React.Component {

  state = {
    nome: '',
    msg: '',
    mensagens: [{ nome: 'andreyna', msg: 'Hello World' }, { nome: 'Eu', msg: 'Sou apenas um teste' } ]
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

  click = (indexRecebido) => {
      const novoChat = [...this.state.mensagens].filter(
        (Chat, index) => {
          return index !== indexRecebido;
        }
      );
      this.setState({
        mensagens: novoChat
      });
  }

  render() {

    const todoChat = this.state.mensagens.map(
      (Chat, indexEnviado) => {
        if(Chat.nome.toLowerCase() === 'eu'){
          return (
            <Me onDoubleClick={() => this.click(indexEnviado)} key={indexEnviado}>
              <DistancP>{Chat.msg}</DistancP>
            </Me>
          )
        }
        else {
          return (
            <Mensagem onDoubleClick={() => this.click(indexEnviado)} key={indexEnviado}>
              <DistancH4>{Chat.nome}:</DistancH4>
              <DistancP>{Chat.msg}</DistancP>
            </Mensagem>
          )
        }
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