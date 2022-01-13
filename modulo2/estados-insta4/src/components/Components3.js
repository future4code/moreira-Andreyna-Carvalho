import React from 'react'
import {Img, Lateral, PostContainer, ImgPost, Icons, Laterais, Interacoes} from '../styled/Style'
import {SecaoComentario} from './Comments'
import IconePreto from '../img/Preto.png'
import IconeVermelho from '../img/Vermelho.png'

class Components3 extends React.Component {

    state = {
        like: 0,
        comentando: false,
        numeroComentarios: 0
    }

    ContadorLike = () => {
        if(this.state.like == 1) {
            this.setState({like: this.state.like - 1})
        }
        else {
            this.setState({like: this.state.like + 1})
        }
    }

    onClickComentario = () => {
        this.setState({
          comentando: !this.state.comentando
        })
      }
    
      aoEnviarComentario = () => {
        this.setState({
          comentando: false,
          numeroComentarios: this.state.numeroComentarios + 1
        })
      }

    render() {

        let iconeCurtida;

        if(this.state.like == 0) {
        iconeCurtida = IconePreto
        } else {
        iconeCurtida = IconeVermelho
        }

        let componenteComentario

        if(this.state.comentando) {
          componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
        }

        return (
            <div>

                <header>
                    <h1> Feed de Noticias</h1>
                </header>

                <PostContainer>
                    <Lateral>
                        <Img src='https://www.animeunited.com.br/oomtumtu/2017/09/shokugeki-no-souma.png' alt='foto'></Img>
                        <p> Souma </p>
                    </Lateral>
                        <ImgPost src='https://c.tenor.com/eRwdyxU7MEAAAAAC/shokugeki-no.gif' alt='feed'></ImgPost>
                    <Laterais>
                        <Interacoes>
                            <Icons onClick={this.ContadorLike} src={iconeCurtida} alt='icons'></Icons>
                            <h3> {this.state.like} </h3>
                        </Interacoes>
                        <Interacoes>
                            <Icons onClick={this.onClickComentario} src='https://cdn-icons-png.flaticon.com/512/711/711739.png' alt='icons'></Icons>
                            <h3> {this.state.numeroComentarios} </h3>
                        </Interacoes>
                    </Laterais>
                    {componenteComentario}
                </PostContainer>
            </div>
        )

    }
}

export default Components3;