//Importações necessarias
import React from "react";
import { Link, Switch, Route } from 'react-router-dom';
import { SpanNone } from "./components/styedAll";
import MudarPagina from "./pages/mudaPagina";


class App extends React.Component {

  render() {

    return (
      <div>
          <Link to="/"> <SpanNone>Home</SpanNone></Link>
          <Switch>
            <Route exact path='/' component={MudarPagina} />
          </Switch>
      </div>
    );
  }
}

export default App;