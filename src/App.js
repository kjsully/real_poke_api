
import "./App.css";
import { useState } from "react";

function App() {

  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemon = (props) => {

    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => response.json())
      .then(jsonResponse => {
        console.log(jsonResponse.results);
        setPokemonList(jsonResponse.results)
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      {/* {JSON.stringify(pokemonList)} */}
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      {
        pokemonList.map((pokemon, i) => (
          <p key={i}>
            <span> {pokemon.name} </span>
          </p>
        ))
      }
    </div>
  );
}
export default App;
