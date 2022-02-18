import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { urlViagem } from "../../components/url/urls";
import VerificaLogin from "../verificaLogin";

export default function Dashboard(props){
  const history = useHistory();
  const [ viagens, setViagens ] = useState([]);

  VerificaLogin();

  //Fazer uma função que ao clicar vai receber o id
  //e vamos guardar no local stody
  const recebeId = (id) => {
    console.log('guardei o id',id);
    localStorage.setItem('id', id)
  }

  //DESLOGAR O USUÁRIO
  const deslogar = () => {
    localStorage.clear()
    history.push('/login')
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
    axios.delete(`${urlViagem}/${id}`,{
      headers: {
        auth: localStorage.getItem('token')
      }
    })
			.then((res) => {
        console.log(res.data);
			})
			.catch((err) => {
				console.log('Não funcionei dashboard delete', err.response);
			});
	};

	useEffect(() => {
		getViagens();

	}, [getViagens()]);

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
              <Link to="/detail-trip"><button onClick={() => recebeId(dados.id)} >Ver mais informações</button></Link>
              <button onClick={() => deleteViagens(dados.id)}>REMOVER</button>
						</div>
					);
				})}
			</div>
    </div>
  );
}