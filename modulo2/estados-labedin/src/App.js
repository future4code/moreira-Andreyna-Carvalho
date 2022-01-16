import React from 'react';
import './App.css';
import {Img, ImgPost, PostContainer, Lateral, Button, Laterais} from './Styled'
import Post from './components/Post/Post';

class App extends React.Component {

  state = {
    inputUser: '', inputPhoto: '', inputPost: "",
    feed: [{
      nomeUsuario: 'Souma', fotoUsuario: 'https://www.animeunited.com.br/oomtumtu/2017/09/shokugeki-no-souma.png',
      fotoPost: 'https://c.tenor.com/eRwdyxU7MEAAAAAC/shokugeki-no.gif'
    },
    {
      nomeUsuario: 'Naruto', fotoUsuario: 'https://i.pinimg.com/originals/09/75/f8/0975f8e05f41b401e6bca660701c6a5b.jpg',
      fotoPost: 'https://pm1.narvii.com/7282/478e8e5e890c4231743ac816885e87a61ed9a37fr1-1061-1061v2_hq.jpg'
    },
    {
      nomeUsuario: 'Gojo', fotoUsuario: 'https://art.ngfiles.com/images/2013000/2013860_carrascovika_satoru-gojo-fanart-icon-jujutsu-kaisen.png?f1628876994',
      fotoPost: 'https://64.media.tumblr.com/fcdba5fabcdc485d202dea411abda049/7fa196fab302147d-b6/s1280x1920/a40bcd9f5960a9371da9813bbc11ae5962167e4e.jpg'
    }
    ]
  }

  //nome == nomeUsuario
  user = (e) =>
    this.setState({ inputUser: e.target.value });

  //perfil == fotoUsuario
  photo = (e) =>
    this.setState({ inputPhoto: e.target.value });

  //post == fotoPost
  post = (e) =>
    this.setState({ inputPost: e.target.value });

  //addPost == button
  addPost = () => {
    const newPost = [...this.state.feed,
    { nomeUsuario: this.state.inputUser, fotoUsuario: this.state.inputPhoto, fotoPost: this.state.inputPost }];
    this.setState({ feed: newPost, nomeUsuario: '', fotoPost: '', fotoUsuario: '' });
  }

  delet = (indexR) => {
    const newList = [...this.state.feed].filter(
      (feed, index) => {
        return index != indexR
      }
    )
    this.setState({
      feed: newList
    })
  }

  render() {

    const novaLista = this.state.feed.map((feed, indexE) => {
      return (
        <PostContainer key={indexE}>
          <Lateral>
            <Img src={feed.fotoUsuario} alt={'Imagem do usuario'} />
            <p>{feed.nomeUsuario}</p>
            <Button onClick={() => this.delet(indexE)}>X</Button>
          </Lateral>

          <ImgPost className={'post-photo'} src={feed.fotoPost} alt={'Imagem do post'} />

          <Post></Post>

        </PostContainer>
      )
    })

    return (
      <div className='app-container'>
        <h1> Feed de Noticias</h1>
          <input onChange={this.user} value={this.state.inputUser} placeholder={'Seu nome'} />
          <input onChange={this.photo} value={this.state.inputPhoto} placeholder={'link foto perfil'} />
          <input onChange={this.post} value={this.state.inputPost} placeholder={'link do post'} />
          <button onClick={this.addPost}>Adicionar post</button>

        {novaLista}
      </div>
    )
  }
}

export default App;
