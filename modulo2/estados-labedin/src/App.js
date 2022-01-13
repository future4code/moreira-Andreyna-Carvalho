import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {

  state = { nomeUsuario: '', fotoUsuario: '', fotoPost: "",
  feed: [{nomeUsuario:'Souma', fotoUsuario:'https://www.animeunited.com.br/oomtumtu/2017/09/shokugeki-no-souma.png', 
  fotoPost:'https://c.tenor.com/eRwdyxU7MEAAAAAC/shokugeki-no.gif'},
  {nomeUsuario:'Naruto', fotoUsuario:'https://i.pinimg.com/originals/09/75/f8/0975f8e05f41b401e6bca660701c6a5b.jpg',
  fotoPost:'https://pm1.narvii.com/7282/478e8e5e890c4231743ac816885e87a61ed9a37fr1-1061-1061v2_hq.jpg'},
  {nomeUsuario:'Gojo', fotoUsuario:'https://art.ngfiles.com/images/2013000/2013860_carrascovika_satoru-gojo-fanart-icon-jujutsu-kaisen.png?f1628876994',
  fotoPost:'https://64.media.tumblr.com/fcdba5fabcdc485d202dea411abda049/7fa196fab302147d-b6/s1280x1920/a40bcd9f5960a9371da9813bbc11ae5962167e4e.jpg'}
  ]}

  delet = (index) => {
    const newList = [...this.state.feed].filter((feed, i) => {
      return i !== index
    })
    this.setState({
      feed: newList
    })
  }

  addPost = () => {
    const newObject = {
      nomeUsuario: this.state.nomeUsuario,
      fotoPost: this.state.fotoPost,
      fotoUsuario: this.state.fotoUsuario
    }
    const novoPessoas = [...this.state.feed, newObject]
    this.setState({feed: novoPessoas})
  }
  nome = (e) => {
    this.setState({nomeUsuario: e.target.value})
  }
  perfil = (e) => {
    this.setState({fotoUsuario: e.target.value})
  }
  post = (e) => {
    this.setState({fotoPost: e.target.value})
  }

  render() {
    console.log(this.state.feed);

    const todosPost = this.state.feed.map((post, index) => {
      return (
        <div className='app-container'>
          <Post key={index}
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
          />
          <button onClick={ () => this.delet(index)}>X</button>

        </div>

      )
    });

    return (
      <div className='app-container'>
        <h1> Feed de Noticias</h1>
          <form>
            <input onChange={this.nome} value={this.state.nomeUsuario} placeholder={'Seu nome'}/>
            <input onChange={this.perfil} value={this.state.fotoUsuario} placeholder={'link foto perfil'}/>
            <input onChange={this.post} value={this.state.fotoPost} placeholder={'link do post'}/>
            <button onClick={this.addPost}>Adicionar post</button>
          </form>

          {todosPost}
      </div>
    )
  }
}

export default App;
