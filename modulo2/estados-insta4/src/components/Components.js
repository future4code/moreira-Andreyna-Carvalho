import React from 'react'
import {Img, Lateral, PostContainer, ImgPost, Icons, Laterais, Interacoes} from '../styled/Style'
import {Comments} from './Comments'


class Components extends React.Component {

    state = {
        like: 0,
        comentario: 0
    }

    ContadorLike = () => {
        this.setState({like: this.state.like + 1})
    }
    Comentario = () => {
        alert('To ligado')
    }

    render() {
        return (
            <div>
                <header>
                    <h1> Feed de Noticias</h1>
                </header>

                <PostContainer>
                    <Lateral>
                        <Img src='https://i.pinimg.com/originals/06/cd/94/06cd942c482e00b245e8eceda45a45a9.jpg' alt='foto'></Img>
                        <p> Kakashi </p>
                    </Lateral>
                        <ImgPost src='https://i.pinimg.com/736x/5d/09/f7/5d09f7a170fa049231e22d3c51b7aec6.jpg' alt='feed'></ImgPost>
                    <Laterais>
                        <Interacoes>
                            <Icons onClick={this.ContadorLike} src='https://cdn-icons.flaticon.com/png/512/2589/premium/2589175.png?token=exp=1642010084~hmac=bd4e86ed29086038b210ce0a41462f4d' alt='icons'></Icons>
                            <h3> {this.state.like} </h3>
                        </Interacoes>
                        <Interacoes>
                            <Icons onClick={this.Comentario} src='https://cdn-icons-png.flaticon.com/512/711/711739.png' alt='icons'></Icons>
                            <h3> {this.state.comentario} </h3>
                        </Interacoes>
                    </Laterais>
                </PostContainer>


            </div> 
        )
    }
}

export default Components;