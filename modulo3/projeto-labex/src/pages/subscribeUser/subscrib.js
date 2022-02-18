import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { urlViagem } from '../../components/url/urls';
import { Fundo } from './subsStyled';

export default function Subscribe() {
	//FUNÇÕES
	const [ nome, setNome ] = useState('');
	const [ idade, setIdade ] = useState(0);
	const [ textoCandidatura, setTextoCandidatura ] = useState('');
	const [ profissao, setProfissao ] = useState('');
	const [ origem, setOrigem ] = useState('');
	const [ viagemEscolha, setViagemEscolha ] = useState(localStorage.getItem('inscrever'));
	
	//TARGETS
	const onNome = (e) => {
		setNome(e.target.value);
	};
	const onIdade = (e) => {
		setIdade(e.target.value);
	};
	const onTextoCandidatura = (e) => {
		setTextoCandidatura(e.target.value);
	};
	const onProfissao = (e) => {
		setProfissao(e.target.value);
	};
	const onOrigem = (e) => {
		setOrigem(e.target.value);
	};

	const postFormulario = (e) => {
		const body = {
			name: nome,
			age: idade,
			applicationText: textoCandidatura,
			profession: profissao,
			country: origem,
		};
		axios
			.post(`${urlViagem}/${viagemEscolha}/apply`, body)
			.then((res) => {
				alert('Sua inscrição foi enviada com sucesso');
			})
			.catch((err) => {
				alert('Infelizmente não foi possível fazer sua inscrição devido ao:', err.response);
				console.log(err.response);
			});
	};

	return (
		<Fundo>
			<h1>Se inscrever</h1>
			<form>
				<input required type="text" placeholder="Qual o seu nome?"  value={nome} onChange={onNome}/>
				<input required type="number" placeholder="Qual a sua idade?" value={idade} onChange={onIdade}/>
				<input required type="text" placeholder="Texto de candidatura" value={textoCandidatura} onChange={onTextoCandidatura}/>
				<input required type="text" placeholder="Qual sua profissão?" value={profissao} onChange={onProfissao}/>
				
        <select required type="text" placeholder="Continente de Origem" value={origem} onChange={onOrigem}>
          <option>Americano</option>
          <option>Europeu</option>
          <option>Asiático</option>
          <option>Africano</option>
          <option>Oceania</option>
          <option>Antártico</option>
        </select>
      </form>

      <div>
        <Link to="/all-trip"><button>Voltar para as viagens</button></Link>
        <button onClick={postFormulario}>Enviar inscrição!</button>
      </div>
      
		</Fundo>
	);
}