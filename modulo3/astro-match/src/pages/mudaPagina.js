import React, { useState } from 'react';
import { Fundao, Header, Img } from '../components/styedAll';
import Logo from '../components/img/logo.png';
import Perfils from './perfil/telaPerfils';
import Match from './match/telaMatch';

function MudarPagina() {
	const [ mudarTela, setMudarTela ] = useState('');

	const telaDoPerfil = () => {
		setMudarTela('telaPerfil');
	};
	const telaDoMatch = () => {
		setMudarTela('telaMatch');
	};

	const selecionarPagina = () => {
		switch (mudarTela) {
			case 'telaPerfil':
				return <Perfils telaDoMatch={telaDoMatch} />;
			case 'telaMatch':
				return <Match telaDoPerfil={telaDoPerfil} />;
			default:
				return <Perfils telaDoMatch={telaDoMatch} />;
		}
	};

	return (
		<Fundao>
				<Header>
					<Img src={Logo} />
				</Header>
				<div>{selecionarPagina()}</div>
		</Fundao>
	);
}

export default MudarPagina;