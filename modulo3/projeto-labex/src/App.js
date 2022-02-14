import { Link, Route, Switch } from "react-router-dom";

//MUDANÇA DE PÁGINAS
import AllTrip from "./pages/allTrip/allTrip";
import CreateNewTrip from "./pages/createNewTrip/createNewTrip";
import Home from "./pages/homePage/home";
import MudarPagina from "./pages/mudarPagina";
import Subscribe from "./pages/subscribeUser/subscrib";
import VerificaLogin from "./pages/verificaLogin";

function App() {
  //Vou ser uma função de Rotas
  return (
    <div>
        <Link to='/'></Link>
        <Link to='/login'></Link>
        <Link to='/dashboard'></Link>
        <Link to='/create-trip'></Link>
        <Link to='/all-trip'></Link>
        <Link to='/subscribe'></Link>
      <Switch>
        <Route exact path='/' component={Home}/>

        <Route exact path='/area-admin' component={VerificaLogin}/>
        <Route exact path='/create-trip' component={CreateNewTrip}/>

        <Route exact path='/all-trip' component={AllTrip}/>
        <Route exact path='/subscribe' component={Subscribe}/>
      </Switch>
    </div>
  );
}

export default App;
