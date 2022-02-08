import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react/cjs/react.development";

const PokeCard = (props) => {

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {

    const pegaPokemon = async () => {
      try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.pokemon}`)
          setPokemon(response.data);
      }catch(err){
          console.log('não funcionei',err);
        }
    };

    pegaPokemon()
  }, [props.pokemon])
  
    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
}

export default PokeCard;
