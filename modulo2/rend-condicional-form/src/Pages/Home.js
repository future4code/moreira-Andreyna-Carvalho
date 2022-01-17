import React from "react";
import { QuestionsOne } from "./QuestionsOne";

export default class Home extends React.Component {

    state = {
        estaLogado: false
    };

    fazerLogin = () => {
        this.setState({ estaLogado: true });
    };

    fazerLogout = () => {
        this.setState({ estaLogado: false })
    }

    render() {
        console.log(this.state);
        const mudarTela = () => {
            if (this.state.estaLogado) {
                return <Home botaoLogout={this.fazerLogout} />
            }
            else {
                return <QuestionsOne botaoLogin={this.fazerLogin} />
            }
        }



        return (
            <div>
                <h1>Bem-vindo(a)! Vamos iniciar?</h1>
                <div>
                    <button onClick={this.props.botaoLogin}>Questions</button>
                    <button onClick={this.props.botaoLogout}>Logout</button>
                </div>
                {mudarTela()}
            </div>
        );
    }
}
