import Navbar from "./components/Navbar";
import Searchbar from "./components/SearchBar";
import React, { useState, useEffect } from 'react';
import PokemonBox from "./components/pokemonInfoBox";
import SerachContainer from "./SearchContainer";
import RecommendPokemon from "./components/Recommend";
import PopularPokemon from "./components/PopularPokeman";
import Quiz from "./components/QuizApp";



const pokemonList = [
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
  "mudkip",
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


function App() {

  const [ searchText, setSearchText ] = useState('');

  const [ searchResult,setSearchResult] =  useState(null);

  const search_base = "https://pokeapi.co/api/v2/pokemon/"

  const handleTextSubmit = () => {
    console.log(`${searchText} submitted`);
    let base = search_base + searchText.toLowerCase();
    
    fetch(base).then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data);
      setSearchResult(data);
    })
  }

  const handleTextChange = (val) => {
    setSearchText(val);
  }

  return (
    <div className="App">
      <Navbar/>
      <main>
        <Searchbar
          onTextSubmit={handleTextSubmit}
          onTextChange={handleTextChange}
          text={searchText}
        />
        <div className="search-container">
          {
            searchResult === null ? null :
              <SerachContainer res={searchResult}/>
          }
        </div>
        
        <br></br>
        <div className="recommendation" id="recommendation">
          <div className="recom">
            <h1>TODAY'S RECOMMENDATION</h1>
            <RecommendPokemon 
              url={search_base}
            />
            
          </div>
          <div className="popular">
            <h1>POPULAR POKEMAN</h1>
            <PopularPokemon
              url={search_base}
            />
          </div>
        </div>

        <Quiz
          url={search_base}
          pokemons={pokemonList}
        />
      </main>
    </div>
  );
}

export default App;
