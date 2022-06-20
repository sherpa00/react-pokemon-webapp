import PokemonBox from "./components/pokemonInfoBox";

function SerachContainer(props) {

    return ( 
        <PokemonBox result={props.res}/>
     );
}

export default SerachContainer;