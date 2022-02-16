import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { urlViagem } from '../../components/url/urls';
import { Fundo } from './AllTripStyled';

export default function AllTrip() {
	//Vou ser uma função de ver todas as viagens
	const [ viagens, setViagens ] = useState([]);

	const getViagens = () => {
		axios
			.get(urlViagem)
			.then((res) => {
				setViagens(res.data.trips);
				console.log(res.data.trips);
			})
			.catch((err) => {
				alert(err);
			});
	};
	useEffect(() => {
		getViagens();
	}, []);

	return (
		<Fundo>
			<div>
				<Link to="/">
					<button>Voltar ao home</button>
				</Link>
				<Link to="/subscribe">
					<button>Se inscrever</button>
				</Link>
			</div>

			<h1>Lista de viagens</h1>
			<div>
				{viagens.map((dados) => {
					return (
						<div key={dados.id}>
							<h1>Nome: {dados.name}</h1>
							<h2>Descrição: {dados.description}</h2>
							<h2>Planeta ou Universo: {dados.planet}</h2>
							<h2>Duração: {dados.durationInDays}</h2>
							<h2>Data da viagem: {dados.date}</h2>
						</div>
					);
				})}
			</div>
		</Fundo>
	);
}
