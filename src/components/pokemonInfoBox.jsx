function PokemonBox(props) {
    const info = props.result;

    return ( 
        <>
            {
                info === null ? null : 

                <div className="pokemon-box">
                    <img src={info.sprites.other.dream_world.front_default} alt="pic"/>
                    <h1>{info.species.name}</h1>
                    <h3>{info.types[0].type.name}</h3>
                    <h5>weight: {info.weight} | Height: {info.height}</h5>
                    <h2>STATS</h2>
                    {
                        info.stats.map((el,index) => {
                            return <li key={index}>{el.stat.name} : {el.base_stat}</li>
                        })
                    }
                </div>
            }
        
        </>
     );
}

export default PokemonBox;