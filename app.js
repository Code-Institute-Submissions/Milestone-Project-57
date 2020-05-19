// Creating variables

let correctPokemon;
let correctPokemon2;
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");

//creating random number for id and 151 is first generation pokemon

let randomID = Math.floor(Math.random() * 151) + 1;

//Fetching data from API

const start = async () => {
  // call the pokemon api for the data
  const url = `https://pokeapi.co/api/v2/pokemon/${randomID}`;
  const response = await fetch(url);
  const json = await response.json();
  correctPokemon = {
    name: json.name,
    id: json.id,
    image: json.sprites.front_default,
  };

  // adding to html the pokemon image
  document.getElementById("correct-image").src = correctPokemon.image;

  // Adding to html option A 

  option1.innerHTML = `A. ${correctPokemon.name}`;

  //creating another  random pokemon for option 2
  //Fetching data from API

  const start2 = async () => {
    let randomID = Math.floor(Math.random() * 151) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${randomID}`;
    const response = await fetch(url);
    const json = await response.json();
    correctPokemon2 = {
      name: json.name,
    };

    // Adding to html option B

    option2.innerHTML = `B. ${correctPokemon2.name}`;
  };
  
  start2();
};

start();

// Adding onclick  styling to options and refreshing or directing to play page.

option1.onclick = function () {
  option1.style.backgroundColor = "rgba(30, 255, 0, 0.315)";
  window.location = "play.html";
};
option2.onclick = function () {
  option2.style.backgroundColor = "rgba(255, 0, 0, 0.315)";
  window.location = "play.html";
};
