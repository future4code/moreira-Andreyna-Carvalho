import './App.css';
import React from 'react';
import Json from './PlaylistMusic.postman_collection.json'

class App extends React.Component {

  state = {
    produtos: Json
  }

  render(){

    const Filtro = this.state.produtos.map((produtos, index) => {
      return (
          <div key={index}>
              <h2>{produtos.name}</h2>
              <h3>Por apenas: {produtos.preco}</h3>
          </div>
      )
  })

    return (
      <div className="App">
        <h1>Tentei ler o arquivo</h1>
      </div>
    );
  }
}

export default App;
