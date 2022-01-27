import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { GetAllPlaylist, Headers } from "../constants/urlApi";
import { ButSearch, ContAnyme, InputSearch, List, ListAnyme, SearchAnim, Tittle, TittleH2 } from "../components/syledAll";

export default class Anymefy extends React.Component {

    state = {
        playlists: [],
        playlistInput: "",
        playlistClicada: ""
    };

    componentDidMount() {
        this.getAllPlaylists();
    }

    onPlaylistTextChange = (event) => {
        this.setState({ playlistInput: event.target.value });
    };

    getAllPlaylists = () => {
        axios
            .get(GetAllPlaylist, Headers)
            .then((res) => {
                this.setState({ playlists: res.data.result.list });
            })
            .catch((err) => {
                alert("Algo deu errado, tente novamente");
            });
    };

    createPlaylsit = () => {
        const body = {
            name: this.state.playlistInput
        };

        axios
            .post(GetAllPlaylist, body, Headers)
            .then((res) => {
                alert(`A playlist ${this.state.playlistInput} foi criada com sucesso!`);
                this.setState({ playlistInput: "" });
                this.getAllPlaylists();
            })
            .catch((err) => {
                alert(err.response.data.message);
                this.setState({ playlistInput: "" });
            });
    };

    viewsDetails = (id) => {
        const detailsTracks = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        this.setState({ playlistClicada: detailsTracks})
        console.log(this.viewsDetails());
        console.log('playlist:',this.setState.playlistClicada);
    }


    render() {
        const playlistComponents = this.state.playlists.map((play) => {
            return <div onClick={() => this.viewsDetails(play.id)}>
               {/*  <Link to="/create"> */}<List key={play.id}>{play.name}</List>{/* </Link>  */}
                </div>
        });

        return (
            <ContAnyme>
                <Tittle>Bem-vindo(a) ao AnimeFy</Tittle>

                <SearchAnim>
                    <TittleH2>Adicione uma nova playlist:</TittleH2>
                    <InputSearch
                        value={this.state.playlistInput}
                        onChange={this.onPlaylistTextChange}
                        placeholder="Adicionar Playlist"
                    />
                    <ButSearch onClick={this.createPlaylsit}>Enviar</ButSearch>
                </SearchAnim>

                <ListAnyme>
                    <h3>Sua(s) lista(s) de playlists:</h3>
                    {playlistComponents}
                </ListAnyme>

            </ContAnyme>
        )
    }
}