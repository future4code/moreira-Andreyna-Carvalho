import React, { useState } from 'react';
import { Fundao, Header, Img, SpanNone } from './components/styedAll';
import Match from './pages/match/telaMatch';
import Perfils from './pages/perfil/telaPerfils';
import Logo from './components/img/logo.png';
import { Link, Route } from 'react-router-dom';

function App() {
	return (
		<Fundao>
				<Link to="/">
					<SpanNone>Home</SpanNone>
				</Link>
				<Link to="/matches">
					<SpanNone>Home</SpanNone>
				</Link>
			<Header>
				<Img src={Logo} />
			</Header>
			<Route exact path="/" component={Perfils} />
			<Route exact path="/matches" component={Match} />
		</Fundao>
	);
}

export default App;
