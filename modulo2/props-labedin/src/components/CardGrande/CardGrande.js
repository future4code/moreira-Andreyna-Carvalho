import React from 'react';
import {Card, Decoration, Text, Img} from './CardStyle';

function CardGrande(props) {
    return (
        <Card>
            <Img src={ props.imagem } />
            <Decoration>
                <Text>{ props.nome }</Text>
                <p>{ props.descricao }</p>
            </Decoration>
        </Card>
    )
}

export default CardGrande;