import { useEffect, useState } from "react";
import PokemonBox from "./pokemonInfoBox";

function PopularPokemon(props) {

    const pokemon_list = [
        "pikachu",
        "meowth",
        "lucario",
        "charizard",
        "gyarados",
        "mew",
        "mewtwo",
        "eevee",
        "jigglypuff",
        "squirtle",
        "bulbasaur",
        "magikarp",
        "mudkip"
    ]

    const [pokemanInfo, setPokemanInfo] = useState([]);

    useEffect(() => {
        let base = props.url;

        for (let i of pokemon_list) {
            let s_base = base + i;
            fetch(s_base).then((res) => {
                return res.json();
            }).then((data) => {
                setPokemanInfo(prevState => [...prevState,data])
            })
        }
    },[]);

    return ( 
        <div className="popular-pokemons">
            {
                pokemanInfo === [] ? null : pokemanInfo.map((el,index) => {
                    return <PokemonBox 
                                key={index}
                                result={el}
                            />
                })
            }
        </div>
     );
}

export default PopularPokemon;