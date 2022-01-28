import React from "react";

import {ContAnyme, Tittle } from "../components/syledAll";

import {IdPlaylist} from "../services/IdPlaylist";
import Tracks from "./Tracks";

export default class Anymefy extends React.Component {

    //condição de click feito juntamente com a instrutora na revisão de react
    state = {
        playlistClicada: "",
        mudarPagina: "list",
    };

    irInfoTrack = () => {
        this.setState({mudarPagina: 'list', playlistComponents: ""})
    }

    selectId = (id) => {
        this.setState({ mudarPagina: 'detail' , playlistClicada: id });
    }
    
    selectPage = () => {
        switch (this.state.mudarPagina){
            case 'list':
                return <IdPlaylist selectId={this.selectId}/>
            case 'detail':
                return <Tracks irInfoTrack={this.irInfoTrack} id={this.state.playlistClicada}/>
            default:
                return <IdPlaylist selectId={this.selectId}/>
        }
    }


    render() {

        return (
            <ContAnyme>
                <Tittle>Bem-vindo(a) ao AnimeFy</Tittle>
                {this.selectPage()}
            </ContAnyme>
        )
    }
}