import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { GetAllPlaylist, Headers } from "../constants/urlApi";
import { ButSearch, ContAnyme, InputSearch, List, ListAnyme, SearchAnim, TittleH2 } from "../components/syledAll";

export class IdPlaylist extends React.Component {
    state = {
        guardarUrl: '',
        playlists: [],
    }
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
                console.log('Erro no get', err.res);
            });
    };

    createPlaylist = () => {
        const body = {
            name: this.state.playlistInput
        };
        axios
            .post(GetAllPlaylist, body, Headers)
            .then((res) => {
                this.setState({ playlistInput: "" });
                this.getAllPlaylists();
            })
            .catch((err) => {
                this.setState({ playlistInput: "" });
            });
    };

    render() {
        const playlistComponents = this.state.playlists.map((play) => {
            return <div onClick={() => this.props.selectId(play.id)}>
                <List key={play.id}>{play.name}</List>
            </div>
        });


        return (
            <ContAnyme>
                <SearchAnim>
                    <TittleH2>Adicione uma nova playlist:</TittleH2>
                    <InputSearch
                        value={this.state.playlistInput}
                        onChange={this.onPlaylistTextChange}
                        placeholder="Adicionar Playlist"
                    />
                    <ButSearch onClick={this.createPlaylist}>Enviar</ButSearch>
                </SearchAnim>

                <ListAnyme>
                    <h3>Sua(s) lista(s) de playlists:</h3>
                    {playlistComponents}
                </ListAnyme>
            </ContAnyme>
        )
    }
}