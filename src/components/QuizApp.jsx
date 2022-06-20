import { useEffect, useState } from "react";

export default Quiz;

function Quiz(props) {

    const max_Count = 10;
    
    const [gameOver , setGameOver] = useState(false);

    const [ count, setCount ] = useState(0);

    const [score, setScore] = useState(0);

    const [ pokemonInfo, setPokemonInfo ] = useState([]);

    const pokemonList = props.pokemons;

    useEffect(() => {
        /*
        let randomPokemon = getRandom(pokemonList,10);

        for (let i of randomPokemon) {
            let base = props.url + i;
            fetch(base).then((results) => {
                return results.json()
            }).then((data) => {
                let arr = randomNames(i,pokemonList);
                let randInd = Math.floor(Math.random() * 4);
                console.log(randInd)
                arr.splice(randInd,1,i);
                let new_dir = {
                    datas : data,
                    names : arr,
                }
                console.log(new_dir);
                setPokemonInfo(prevState => [...prevState,new_dir])
            });
        }
        */

        newGame();
    },[]);

    function newGame() {
        let randomPokemon = getRandom(pokemonList,10);

        for (let i of randomPokemon) {
            let base = props.url + i;
            fetch(base).then((results) => {
                return results.json()
            }).then((data) => {
                let arr = randomNames(i,pokemonList);
                let randInd = Math.floor(Math.random() * 4);
                console.log(randInd)
                arr.splice(randInd,1,i);
                let new_dir = {
                    datas : data,
                    names : arr,
                }
                console.log(new_dir);
                setPokemonInfo(prevState => [...prevState,new_dir])
            });
        }
    }

    
    function getRandom(list,count) {
        let randList = [];
        for (let i = 0; i < count; i++) {
            let rand = list[Math.floor(Math.random() * list.length)]
            while (randList.indexOf(rand) >= 0) {
                rand = list[Math.floor(Math.random() * list.length)]
            }
            randList.push(rand);
        }

        return randList
    }

    function randomNames(name,list) {
        let arr = [];
        for (let i = 0; i < 4; i++) {
            let rand = list[Math.floor(Math.random() * list.length)]
            
            while (rand === name || arr.indexOf(rand) >= 0) {
                rand = list[Math.floor(Math.random() * list.length)]
            }
            arr.push(rand);
        }
        return arr;
    }


    const handleScore = (val) => {
        if (val) {
            setScore((prevState) => prevState + 1);
        }
    }

    const handleSubmit = () => {
        setGameOver(true);
        
    }

    const handleGameOver = () => {
        setCount(0);
        setGameOver(false);
        setScore(0);
        setPokemonInfo([]);
        newGame();
    }

    return ( 
        <div className="quiz" id="quiz">
            <h1>QUIZ TIME</h1>
            {
                /*pokemonInfo && <QuizBox
                                        names={pokemonInfo[count].names}
                                        image={pokemonInfo[count].datas.sprites.other.dream_world.front_default}
                                        id={count}
                                    /> 
                */
                
            }
            <div className="quiz-box-cont">
                {
                    pokemonInfo.map((el,index) => {
                        return <QuizBox 
                            names={el.names}
                            image={el.datas.sprites.other.dream_world.front_default}
                            key={index}
                            name={el.datas.name}
                            incrementScore={handleScore}
                        />
                    })
                }
            </div>

            <button onClick={handleSubmit} className="next">
                    SUBMIT
            </button>
            {
                gameOver === false ? null : <div className="gameOver">
                                                <h1>CONGRATS !! YOU SCORED {score} OUT OF 10</h1>
                                                <button onClick={handleGameOver}>PLAY AGAIN</button>
                                            </div>
            }
        </div>
     );
}

function QuizBox(props) {

    const handleChange = (e) => {
        console.log(e.target.value);
        
        if (e.target.value === props.name) {
            console.log("correct");
            props.incrementScore(true);
            
        } else {
        }

        for (let i of e.target.parentElement.parentElement.children) {
            for (let j of i.children) {
                j.disabled = true;
            }
        }

        e.target.parentElement.classList.add("done")
        console.log(e.target.parentElement.className);
    }

    return ( 
        <div className="quiz-box">
            <img src={props.image} alt="img"/>
            <h4>Choose the name of the Pokemon given above?</h4>
            <form className="answers">
                {
                    props.names.map((el,index) => {
                        return <label key={index}>
                                
                                <input   
                                    type="radio"
                                    id="check"
                                    name="check"
                                    key={index}
                                    onChange={handleChange}
                                    value={el}
                                />
                                { el}
                            </label>
                    })

                }
            </form>
            
        </div>
     );
};