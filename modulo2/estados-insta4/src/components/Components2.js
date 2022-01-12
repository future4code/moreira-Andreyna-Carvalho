import React from 'react'
import {Img, Lateral, PostContainer, ImgPost, Icons, Laterais, Interacoes} from '../styled/Style'
import {SecaoComentario} from './Comments'
import IconePreto from '../img/Preto.png'
import IconeVermelho from '../img/Vermelho.png'

class Components2 extends React.Component {

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
                <PostContainer>
                    <Lateral>
                        <Img src='https://i.pinimg.com/originals/06/cd/94/06cd942c482e00b245e8eceda45a45a9.jpg' alt='foto'></Img>
                        <p> Kakashi </p>
                    </Lateral>
                        <ImgPost src='https://i.pinimg.com/736x/5d/09/f7/5d09f7a170fa049231e22d3c51b7aec6.jpg' alt='feed'></ImgPost>
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

export default Components2;