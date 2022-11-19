import React from "react";
import Logo from "./Logo";
import "./App.css";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";



const App = () => {
  const myAbilities = ["Anticipation", "Adaptability", "Run-Away"];
  const todayDate = new Date().toLocaleDateString();
  return (
    <div className="App">
      <Logo appName="Pokedex" />
      <BestPokemon abilities={myAbilities}/>
      <CaughtPokemon date={todayDate} />
    </div>
  );
};

export default App;
