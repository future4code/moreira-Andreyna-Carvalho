import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { urlLogin, urlViagem } from "../../components/url/urls";
import VerificaLogin from "../verificaLogin";

export default function Dashboard(props){
  VerificaLogin();
  const history = useHistory();
  const [ viagens, setViagens ] = useState([]);

  //DESLOGAR O USUÁRIO
  const deslogar = () => {
    const body = {
      email: null,
      password: null,
    }
    axios.post(urlLogin, body)
    .then((res) => {
    })
    .catch((err) => {
      localStorage.setItem('token', null)
      history.push('/area-admin')
    })
  }

  //MOSTRAR AS VIAGENS EXISTENTES
	const getViagens = () => {
		axios
			.get(urlViagem)
			.then((res) => {
				setViagens(res.data.trips);
			})
			.catch((err) => {
				console.log('Eu sou o erro');
			});
	};
  const deleteViagens = (id) => {
    const headers = {
      headers: {
        auth: localStorage.getItem('token')
      }
    }
    axios.delete(`${urlViagem}/${id}`, headers)
			.then((res) => {
				setViagens(res.data.trips);
			})
			.catch((err) => {
				console.log('Não funcionei dashboard delete', err.response);
			});
	};

	useEffect(() => {
		getViagens();
	}, []);


  return (
    <div>
      <div>
      <Link to="/"><button>Voltar ao home</button></Link>
        <Link to="/create-trip"><button>Criar viagem</button></Link>
        <button onClick={deslogar}>Fazer logout</button>
      </div>
      <h1>Lista de viagens</h1>
			<div>
				{viagens.map((dados) => {
					return (
						<div key={dados.id}>
							<h1>Nome: {dados.name}</h1>
              <button onClick={() => deleteViagens(dados.id)}>REMOVER</button>
						</div>
					);
				})}
			</div>
    </div>
  );
}