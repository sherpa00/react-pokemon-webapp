import { useEffect, useState } from "react";
import PokemonBox from "./pokemonInfoBox";

function RecommendPokemon(props) {
    const pokemonList = [
        "garchomp",
        "mudkip",
        "blastoise",
        "scizor",
        "luxray",
        "torterra",
        "snorlax",
        "infernape",
        "tyranitar",
        "ninetales",
        "flygon",
        "squirtle",
        "ampharos",
        "typhlosion",
        "absol",
        "dragonite",
        "eevee",
        "gardevoir",
        "lucario",
        "umbreon",
        "blaziken",
        "bulbasaur",
        "arcanine",
        "gengar",
        "charizard",
        "pikachu",
        "mewtwo",
        "jigglypuff",
        "meowth",
        "magikarp"
    ]

    const [randomPokemonInfo,setRandomPokemonInfo] = useState(null);

    useEffect(() => {
        let pokemon = pokemonList[Math.floor(Math.random() * pokemonList.length)]
        let base = props.url + pokemon;
        try {
            fetch(base).then((res) => {
                return res.json();
            }).then((data) => {
                setRandomPokemonInfo(data);
            })
        } catch(err) {
            throw new Error("NO POKEMON BY THAT NAME.")
        }
    },[])

    return ( 
        <PokemonBox
            result={randomPokemonInfo}
        />
     );
}

export default RecommendPokemon;