let correctPokemon;
let correctPokemon2;
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");

//creating random number for id and 151 is first generation pokemon

let randomID = Math.floor(Math.random() * 151) + 1;

const start = async () => {
  // call the pokemon api for the data
  const url = `https://pokeapi.co/api/v2/pokemon/`;
  const response = await fetch(url);
  const json = await response.json();
  correctPokemon = {
    name: json.name,
    id: json.id,
    image: json.sprites.front_default,
  };

start();
