import React, { useState } from "react";

//Peguei da net
const verCalendario = () => {
  const data = new Date(Date.now());
  const mes = ("0" + (data.getMonth() + 1)).slice(-2);
  const ano = data.getFullYear();
  let dia = Number(data.getDay()) + 2;
  dia = ("0" + dia.toString()).slice(-2);
  return `${ano}/${mes}/${dia}`;
};

export default function Subscribe() {
  // Vou ser uma função de inscrever o usuário na viagem
  const [ name, setName] = useState('');
  const [ description, setDescription] = useState('');
  const [ planet, setPlanet] = useState('');
  const [ duration, setDuration] = useState(0);
  const [ date, setDate] = useState(verCalendario);

  //Targets
  const onTexto = (e) => {
    setName(e.target.value);
  };
  const onDescricao = (e) => {
    setDescription(e.target.value);
  };
  const onPlaneta = (e) => {
    setPlanet(e.target.value);
  };
  const onDuracao = (e) => {
    setDuration(e.target.value);
  };
  const onData = (e) => {
    setDate(e.target.value);
  };


  return (
    <div>
      <h1>Se inscrever</h1>
    </div>
  );
}