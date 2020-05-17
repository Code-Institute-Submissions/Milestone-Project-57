let correctPokemon;
 const start =  () => {
    //create a random number for correct answer
    const ranNum = Math.floor(Math.random() * 151);
    // call the pokemon api for the data
    const url = `https://pokeapi.co/api/v2/pokemon/${ranNum}`;
    const response =  fetch(url).then((response) => {
    correctPokemon = {
            name: results.name,
            id: results.id,
            image: results.sprites.front_default
        };
        console.log(correctPokemon);
    // join the pokemon image data
   var logo = document.getElementById('correct-image').src = correctPokemon.image;
    // create other 3 name data random for options

    // call api for the data

    //join the pokemon name data

    //
});
}
start();