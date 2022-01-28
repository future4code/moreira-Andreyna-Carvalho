import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class InfoPlaylist extends React.Component {

    state = {
        playlists: [],
        guardarUrl: '',
    };

    componentDidMount() {
        this.getGuardar();
    }

    getGuardar = () => {
        axios.get(this.props.id)
            .then((res) => {
                this.setState({ guardarUrl: res.data })
                console.log(res.data);
            })
            .catch((err) => {
                console.log('Não deu certo de guardar', err.res);
                this.setState({ guardarUrl: this.props.id})
            })
    }

    render() {
        console.log(this.state.guardarUrl);
        return (
            <div>
                {this.props.id}
                <p>{this.state.guardarUrl.name}</p>
                <p>{this.state.guardarUrl.artist}</p>
                <p>{this.state.guardarUrl.url}</p>
            </div>

        )
    }
}
