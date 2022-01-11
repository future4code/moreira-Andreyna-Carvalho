import React from 'react';

import {Tudo, Container, TextoH2} from './Styled/StyleGeral';

import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';


function App() {
  return (
    <Tudo>
        <Container>
          <TextoH2>Dados pessoais</TextoH2>
          <CardGrande 
            imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
            nome="Astrodev" 
            descricao="Oi eu sou a Andreyna, sou estudante da Labenu. Amo responder aos emails do chefe no domingo tururururu"
          />
          
          <ImagemButton 
            imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
            texto="Ver mais"
          />
        </Container>

        <Container>
        <CardPequeno 
            imagem="https://cdn-icons.flaticon.com/png/512/3178/premium/3178158.png?token=exp=1641921430~hmac=8ce12e1449e76622f063e0a8f006c8cd" 
            nome="Email:" 
            descricao="andreyna.m.carvalho@gmail.com" 
          />
          
          <CardPequeno
            imagem="https://cdn-icons-png.flaticon.com/512/1239/1239525.png" 
            nome="Endereço:" 
            descricao="Konoha" 
          />
        </Container>


        <Container>
          <TextoH2>Experiências profissionais</TextoH2>
          <CardGrande 
            imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
            nome="Labenu" 
            descricao="Formando desenvolvedores para o mercado de trabalho!" 
          />
          
          <CardGrande 
            imagem="http://www.nasa.gov/sites/default/files/files/nasa_insignia_300.jpg" 
            nome="NASA" 
            descricao="Apontando defeitos." 
          />
        </Container>

        <Container>
          <TextoH2>Minhas redes sociais</TextoH2>
          <ImagemButton 
            imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
            texto="Facebook" 
          />        

          <ImagemButton 
            imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
            texto="Twitter" 
          />        
        </Container>

        <Container>
          <TextoH2>Dados pessoais</TextoH2>
          <CardGrande 
            imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
            nome="Desabafo" 
            descricao="Forammmmmmm umasss 3 horasss só para entender como funciona o import e export de componentes com Styled-components
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          />
        </Container>

      

    </Tudo>
  );
}

export default App;
