import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function AllTrip() {
	//Vou ser uma função de ver todas as viagens
	const [ viagens, setViagens ] = useState({});

	const getViagens = () => {
		axios
			.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips')
			.then((res) => {
				console.log(res.data.trips);
				setViagens(res.data.trips);
			})
			.catch((err) => {
				console.log('Não localizado:', err);
			});
	};
	useEffect(() => {
		getViagens();
	}, []);

	return (
		<div>
			<div>
				<Link to="/"><button>Voltar ao home</button></Link>
				<Link to="/subscribe"><button>Se inscrever</button></Link>
			</div>

			<h1>Lista de viagens</h1>
			{/* Fazer uma map dos conteudos mostrados */}
			<div key={viagens.id}>
				<h1>Eu vou para o Planeta/Mundo: {viagens.planet}</h1>
				<h2>{viagens.name}</h2>
				<h1>Teste</h1>
			</div>
		</div>
	);
}
