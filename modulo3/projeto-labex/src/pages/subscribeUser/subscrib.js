import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { urlViagem } from '../../components/url/urls';
import { Fundo } from './subsStyled';

export default function Subscribe() {
	// Vou ser uma função de inscrever o usuário na viagem
	const [ form, setForm ] = useState({
		nome: '',
		idade: 0,
		textoCandidatura: '',
		profissao: '',
		origem: '',
		viagem: null,
	});
  const [ viagem, setViagem] = useState([]);

  const getViagens = () => {
    axios.get(urlViagem)
    .then((res) => {
      setViagem(res.data.trips)
    })
    .catch((err) => {
      alert(err)
    })
  }
	
  const onInput = (e) => {
    const {value, dados} = e.target;
    onChange(value, dados)
  }

  const postFormulario = (e) => {
    const body = {
      name: form.nome,
      age: form.idade,
      applicationText: form.textoCandidatura,
      profession: form.profissao,
      country: form.origem,
    }
    axios.post(`${urlViagem}/${form.viagem}/apply`, body)
    .then((res) => {
      alert('Sua inscrição foi enviada com sucesso conforme:' res)
    })
    .catch((err) => {
      alert('Infelizmente não foi possível fazer sua inscrição devido ao:' err);
    })
  }

	return (
		<Fundo>
			<Link to="/all-trip">
				<button>Voltar para as viagens</button>
			</Link>
			<h1>Se inscrever</h1>
			<form>
				<input type="checkbox" />
				<input type="text" placeholder="Qual o seu nome?" />
				<input type="number" placeholder="Qual a sua idade?" />
				<input type="text" placeholder="Texto de candidatura" />
				<input type="text" placeholder="Qual sua profissão?" />
			</form>
		</Fundo>
	);
}
