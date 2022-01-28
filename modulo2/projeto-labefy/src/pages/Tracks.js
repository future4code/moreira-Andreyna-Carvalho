import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import {  Headers } from "../constants/urlApi";
import { ButSearch, Butt, ContAnyme, InputSearch, List, ListAnyme, SearchAnim, Tittle, TittleH2 } from "../components/syledAll";
import { InfoPlaylist } from "../services/InfoPlaylist";
import { IdPlaylist } from "../services/IdPlaylist";

export default class Tracks extends React.Component{
    state = {
        tracks: [],
        name: "",
        artist: "",
        url: "",
        playlistId: []
    };

    componentDidMount() {
        this.getPlaylistTracks();
    }

    onTrackName = (event) => {
        this.setState({ name: event.target.value });
    };
    onTrackArtist = (event) => {
        this.setState({ artist: event.target.value });
    }
    onTrackUrl = (event) => {
        this.setState({ url: event.target.value });
    };
               
    getPlaylistTracks = () => {                                                                // deve ser em ${}
        const getTracks = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/"+this.props.id+"/tracks"
        axios
            .get(getTracks, Headers)
            .then((res) => {
                console.log('componet',res.data);
                console.log('dados',res.data.result.tracks);
                this.setState({ tracks: res.data.result.tracks });
            })
            .catch((err) => {
                console.log('Erro no get', err.res);
            });
    };

    addTracks = () => {                                                                           // deve ser em ${}                 
        const addTracks = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/"+this.props.id+"/tracks"
        const body = {
            name: this.state.name,
            artist: this.state.artist ,
            url: this.state.url ,
        };
        axios
            .post(addTracks, body, Headers)
            .then((res) => {
                this.setState({ name: "", artist: "", url:''});
                this.getPlaylistTracks();
            })
            .catch((err) => {
                this.setState({ name: "", artist: "", url:''});
                alert('Não adicionado')
            });
    };

    render() {
        const trackComponents = this.state.tracks.map((play) => {
            return <div>
               <List key={play.id}>{play.name}, {play.artist} e {play.url}</List>
                </div>
        });

        return(
            <ContAnyme>
                <SearchAnim>
                    <TittleH2>Adicione uma nova musica:</TittleH2>
                    <InputSearch
                        value={this.state.name}
                        placeholder="Nome da música"
                        onChange={this.onTrackName}
                    />
                    <InputSearch
                        value={this.state.artist}
                        onChange={this.onTrackArtist}
                        placeholder="Nome do artista"
                    />
                    <InputSearch
                        value={this.state.url}
                        onChange={this.onTrackUrl}
                        placeholder="Url da musica"
                    />
                    <ButSearch onClick={this.addTracks}>Enviar</ButSearch>
                </SearchAnim>

                <ListAnyme>
                    <h3>Sua(s) lista(s) de tracks:</h3>
                    {trackComponents}
                    <Link to="/animefy"><Butt>Voltar para as Playlist</Butt></Link> 

                </ListAnyme>

            </ContAnyme>
        )
    }
}