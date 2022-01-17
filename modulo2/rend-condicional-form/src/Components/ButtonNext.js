import React from "react";

export class ButtonNext extends React.Component {

render () {
    return (
      <div>
          <h1>Estamos na etapa 2!</h1>
        <h3> Aperte aqui para continuar</h3>
        <button onClick={this.props.buttonNext}>Próxima Etapa</button>
      </div>
    );
  }
}