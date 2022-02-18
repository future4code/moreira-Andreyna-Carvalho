import { Button } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { urlTripDetail } from '../../components/url/urls';

export default function TripDetail() {
	//Vou ser uma função de de apertar e ver os detalhes
	const [ id, setId ] = useState(localStorage.getItem('id'));
	const [ viagemDetalhada, setViagemDetalhada ] = useState({});

  const [pendentes, setPendentes] = useState([])
  const [aprovados, setAprovados] = useState([])


	const todosOsDetalhes = () => {
		const url = urlTripDetail + id;
		axios
			.get(`${url}`, {
				headers: {
					auth: localStorage.getItem('token')
				}
			})
			.then((res) => {
				setViagemDetalhada(res.data.trip);
        setPendentes(res.data.trip.candidates);
				setAprovados(res.data.trip.approved);
			})
			.catch((err) => {
				console.log(err.data);
			});
	};

	const aprovarCandidato = (candidateId) => {
		const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/dricaMoreira/trips/${id}/candidates/${candidateId}/decide`
		const body = {
			approve: true,
		}
		axios.put(url, body, {
			headers: {
				auth: localStorage.getItem('token')
			}
		})
		.then((res) => {
			todosOsDetalhes()
		})
		.catch((err) => {
			alert('Não foi possível aprovar o(a) candidato(a)')
			console.log(err.response);
		})
	}

	const reprovarCandidato = (reproveId) => {
		const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/dricaMoreira/trips/${id}/candidates/${reproveId}/decide`
		const body = {
			approve: false
		}
		axios.put(url, body, {
			headers: {
				auth: localStorage.getItem('token')
			}
		})
		.then(() => {
			todosOsDetalhes()
		})
		.catch((err) => {
			alert('Não foi possível aprovar o(a) candidato(a)')
		})

	}

	useEffect(() => {
		todosOsDetalhes();
	}, []);

	return (
		<div>
			<h1>Trip Detail</h1>
			<Link to="/dashboard">
				<button>Voltar ao painel administrativo</button>
			</Link>
			<h1>{viagemDetalhada.name}</h1>
      <h1>{viagemDetalhada.description}</h1>
      <h1>{viagemDetalhada.planet}</h1>
      <h1>{viagemDetalhada.durationInDays}</h1>
			<h1>{viagemDetalhada.date}</h1>

			<h1>Candidatos aprovados</h1>
			{aprovados && aprovados.length > 0 ? aprovados.map((dados) => {
				return <div key={dados.id}>{dados.name}</div>
				}) : <p>Nenhum candidato foi aprovado ainda</p>}

			<h1>Candidatos pendentes</h1>
			{pendentes && pendentes.length > 0 ? pendentes.map((dados) => {
				return <div key={dados.id}>
					<h1>{dados.name}</h1>
					<button onClick={() => aprovarCandidato(dados.id)}>Aprovar candidato</button>
					<button onClick={() => reprovarCandidato(dados.id)}>Reprovar candidato</button>
				</div>
			}) : <p>Essa viagem não possui nenhum candidato pendente</p>}
		</div>
	);
}
