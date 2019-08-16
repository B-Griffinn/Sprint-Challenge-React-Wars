import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import CharacterProps from "./components/Characters/CharacterProps";
import NextComp from "./components/NextComponents/Next-Comp";

const App = () => {
   // the state properties here.
  const [people, setPeople] = useState();
  

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect( () => {
  axios.get('https://swapi.co/api/people/') 
  
  .then(res => {
    console.log(res.data);
    const ourPeople = res.data;
    setPeople(ourPeople);
  }) 
  
  .catch(err => {
    // console.log(err)
  })
}, [] ) // END MVP useEffect

// Conditional to prevent parsing timeout 
if(!people) return <h3>Loading...</h3> //MVP

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <NextComp />
      <div className="char-container">
      {people.results.map(chars => <CharacterProps key={chars.url} name={chars.name} dob={chars.birth_year}/>)}
      </div>
    </div>
  );
}

export default App;
