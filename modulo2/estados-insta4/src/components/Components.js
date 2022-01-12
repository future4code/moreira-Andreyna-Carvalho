import React from 'react'
import {Img, Lateral, PostContainer, ImgPost, Icons, Laterais, Interacoes} from '../styled/Style'
import {SecaoComentario} from './Comments'
import IconePreto from '../img/Preto.png'
import IconeVermelho from '../img/Vermelho.png'

class Components extends React.Component {

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
                        <Img src='https://i.pinimg.com/originals/09/75/f8/0975f8e05f41b401e6bca660701c6a5b.jpg' alt='foto'></Img>
                        <p> Naruto </p>
                    </Lateral>
                        <ImgPost src='https://pm1.narvii.com/7282/478e8e5e890c4231743ac816885e87a61ed9a37fr1-1061-1061v2_hq.jpg' alt='feed'></ImgPost>
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

export default Components;