import React, { useState } from 'react';
import { All, Fundao, Header, Img } from './components/styedAll';
import Match from './pages/match/telaMatch';
import Perfils from './pages/perfil/telaPerfils';
import Logo from './components/img/logo.png';

function App() {
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

export default App;
