import React from 'react';
import {Pequeno, Img, Container, Span} from './Pequeno'

function CardPequeno(props) {
    return (
        <Pequeno>
            <Img src={ props.imagem } />
            <Container>
                <Span>{ props.nome }</Span>
                <p>{ props.descricao }</p>
            </Container>
        </Pequeno>
    )
}

export default CardPequeno;