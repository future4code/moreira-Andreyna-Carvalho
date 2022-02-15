import { Link, Route, Switch } from 'react-router-dom';
import { Fundo } from './components/styled-components/AllStyledComponents';

//MUDANÇA DE PÁGINAS
import AllTrip from './pages/allTrip/allTrip';
import CreateNewTrip from './pages/createNewTrip/createNewTrip';
import Home from './pages/homePage/home';
import Subscribe from './pages/subscribeUser/subscrib';
import VerificaLogin from './pages/verificaLogin';

function App() {
	//Vou ser uma função de Rotas
	return (
		<div>
			<Link to="/" />
			<Link to="/login" />
			<Link to="/dashboard" />
			<Link to="/create-trip" />
			<Link to="/all-trip" />
			<Link to="/subscribe" />
			<Switch>
				<Route exact path="/" component={Home} />

				<Route exact path="/area-admin" component={VerificaLogin} />
				<Route exact path="/create-trip" component={CreateNewTrip} />

				<Route exact path="/all-trip" component={AllTrip} />
				<Route exact path="/subscribe" component={Subscribe} />
			</Switch>
		</div>
	);
}

export default App;
